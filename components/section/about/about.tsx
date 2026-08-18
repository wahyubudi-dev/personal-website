"use client";

import HeaderTitle from "@/components/global/header/header-title";
import AboutDetail from "./aboutDetail";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="pb-6">
        <HeaderTitle
          name="About Me"
          descriptions="The short journey life of me"
          className="text-3xl"
        />
      </div>
      <Separator />
      <AboutDetail />
    </motion.section>
  );
}
