"use client";

import { Waves } from "lucide-react";
import { motion } from "framer-motion";
import ServiceList from "./serviceList";
import HeaderTitle from "@/components/global/header/header-title";

export default function Service() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="py-6 flex flex-col gap-5"
    >
      <HeaderTitle
        name="Services"
        descriptions="The services i&#39;m proficient are"
        leadingIcon={Waves}
      />
      <ServiceList />
    </motion.section>
  );
}
