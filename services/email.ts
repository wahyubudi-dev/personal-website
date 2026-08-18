import EmailTemplate from "@/components/section/contact/email/emailTemplate";
import { Resend } from "resend";

interface EmailProps {
  fullname: string;
  emailSender: string;
  message: string;
}

export const sendEmail = async ({
  fullname,
  emailSender,
  message,
}: EmailProps) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: "Personal Website <wahyubudi@resend.dev>",
      to: ["wahyu.budi.w.b33@gmail.com"],
      subject: "[Contact]: Let's connect with me!",
      react: EmailTemplate({
        fullname: fullname,
        email: emailSender,
        message: message,
      }),
    });

    if (error) {
      console.error(error);
      return;
    }

    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};
