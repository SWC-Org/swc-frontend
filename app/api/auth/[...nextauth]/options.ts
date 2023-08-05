import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


import User from "@models/user";
import { connectDB } from "@util/database";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      async profile(profile){
        try {
          await connectDB()
  
          const user = await User.findOne({
            email:profile.email,
          })
          if(user){
            return{
              ...profile,
              role : user.role
            }
          }else{
            return{
              ...profile,
              role : ""
            }
          }
        } catch (error) {
          console.log(error)
          return profile
        }
      }
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "myemail@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          await connectDB()
          const user = await User.findOne({
            email:credentials?.email
          })

          if(credentials?.password === user.password){
            return user
          }
        } catch (error) {
          console.log(error)
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async signIn({ profile }) {
      try {
        await connectDB()

        const user = await User.findOne({
          email:profile?.email,
          auth : "Provider"
        })

        if(!user){
          await User.create({
            email : profile?.email,
            first_name : profile?.name,
            last_name : "",
            password : "",
            image: profile?.image,
            role: "",
            policy : "",
            auth : "Provider"
          })
        }
         return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
    async jwt({ token , user }) {
      if(user.role && token){
        token.role = user.role
      }else{
        token.role = ""
      }
      return token
    }
  },
};
