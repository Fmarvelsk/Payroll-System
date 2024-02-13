import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const authorMail = process.env.MAIL_ID;
const authorPass = process.env.MAIL_PASS;

interface MailResponse {
  error: boolean;
  emailSent: boolean;
  message: string;
  stack: string;
}

export async function POST(request: Request) {
  const data: MailResponse = {
    error: true,
    emailSent: false,
    message: "",
    stack: "",
  };

  try {
    const { email, message, subject, name } = await request.json();

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: authorMail,
        pass: authorPass,
      },
      secure: true,
    });

    const mailData = {
      from: email,
      to: authorMail,
      subject: `${subject}-${name}`,
      text: message + " | Sent from: " + email,
      html: `<div>${message}</div><p>Sent from:
      ${email}</p <p>Name: ${name}<br/>Subject: ${subject} </p>`,
    };

    const info = await transporter.sendMail(mailData);

    data.error = false;
    data.emailSent = true;
    data.message = "Successfully Sent.";
    data.stack = info.response;

    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    data.error = true;
    data.emailSent = false;
    data.message = "Message Not Sent! Please contact at dreambill";
    data.stack = err.response;

    return NextResponse.json(data, { status: 500 });
  }
}
