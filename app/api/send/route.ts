import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: any) {
  try {
    const title = "sminasij efef";
    const message = "lorem ipsum";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "saminchandeepa@gmail.com",
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    const mailOption = {
      from: "saminchandeepa@gmail.com",
      to: "adomicarts@gmail.com",
      subject: "Send Email Tutorial",
      html: `
        <html>
          <head>
            <style>
              /* Add your inline styles here */
              body {
                font-family: 'Arial', sans-serif;
              }
              h3 {
                color: #333;
              }
              li {
                list-style-type: square;
                margin-bottom: 10px;
              }
            </style>
          </head>
          <body>
            <h3>Hello Augustine</h3>
            <ul>
              <li className=" text-cyan-600"> title: ${title}</li>
              <li> message: ${message}</li>
            </ul>
          </body>
        </html>
      `,
    };

    // Send mail and handle errors
    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
