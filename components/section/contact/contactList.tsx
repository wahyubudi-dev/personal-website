import { contacts } from "@/common/constant/socials";
import ContactCard from "./contactCard";
import EmailForm from "./email/emailForm";

export default function ContactList() {
  return (
    <section>
      <div className="py-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {contacts
          .filter((item) => item.name !== "instagram")
          .map((item, index) => (
            <ContactCard {...item} key={index} />
          ))}
      </div>
      <EmailForm />
    </section>
  );
}
