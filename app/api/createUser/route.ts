import { NextResponse } from "next/server";
import User from "@models/user";
import { connectDB } from "@util/database";

export async function POST(request: Request) {
  try {
    await connectDB();
    const res = await request.json();
    console.log(res);
    const user = await User.create({
      email: res["email"],
      first_name: res["first_name"],
      last_name: res["last_name"],
      password: res["password"],
      image: "",
      role: "",
      policy: "",
      auth: "Credential",
    });
    if (!user) {
      throw new Error("Failed to create user");
    }
    return NextResponse.json({ error: false });
  } catch (error) {
    console.log(error);
    const obj = { error: true };
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });

    return new Response(blob, {
      status: 403,
    });
  }
}
