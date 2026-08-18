// import { NODEMAILER_ACCOUNTS } from "@/common/constant/email";
// import nodemailer from "nodemailer";

// interface EmailProps {
//   email: string | any;
//   message: string;
// }

// export const sendEmail = async ({ email, message }: EmailProps) => {
//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: NODEMAILER_ACCOUNTS.email,
//       pass: NODEMAILER_ACCOUNTS.password,
//     },
//   });

//   let mailOptions = {
//     from: email,
//     to: NODEMAILER_ACCOUNTS.email,
//     subject: "Personal Website | Let's connect with me!",
//     text: message,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return;
//   } catch (error) {
//     return;
//   }
// };
