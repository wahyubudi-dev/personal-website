import { Metadata } from "next";
import Contact from "@/components/section/contact/contact";

export const metadata: Metadata = {
  title: "Contact | Wahyu Budi Utomo",
  description:
    "Get in touch with me for inquiries, collaborations, or any questions. Discover how you can connect with me and learn more about my work and services.",
};

export default async function ContactPage() {
  return (
    <main className="page-shell">
      <div className="page-container">
        <Contact />
      </div>
    </main>
  );
}
