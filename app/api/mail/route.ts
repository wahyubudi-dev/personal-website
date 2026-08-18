import { sendEmail } from "@/services/email";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { fullname, email, message } = await req.json();

  try {
    const response = await sendEmail({ fullname, emailSender: email, message });

    return NextResponse.json({ status: true, data: response }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { status: false, error: "Failed to send email" },
      { status: 400 }
    );
  }
};
