"use client";

import HeaderTitle from "@/components/global/header/header-title";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import ContactList from "./contactList";

export default function Contact() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="pb-6">
        <HeaderTitle
          name="Discover Me"
          descriptions="More to know about me find here"
          className="text-3xl"
        />
      </div>
      <Separator />
      <ContactList />
    </motion.section>
  );
}
