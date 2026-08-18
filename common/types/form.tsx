import { z } from "zod";

export const emailFormSchema = z.object({
  fullname: z.string().describe("Fullname").min(5, "Fullname is required"),
  email: z
    .string()
    .describe("Email")
    .email({ message: "Email format is invalid" }),
  message: z.string().describe("Message").min(1, "Message is required"),
});

export const chatFormSchema = z.object({
  message: z.string().describe("Message"),
});
