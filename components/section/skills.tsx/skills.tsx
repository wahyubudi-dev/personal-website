"use client";

import HeaderTitle from "@/components/global/header/header-title";
import SkillList from "./skillsList";
import { Workflow } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="py-8"
    >
      <HeaderTitle
        name="Skills"
        descriptions={"My stack / skill list i'm currently using"}
        leadingIcon={Workflow}
      />
      <SkillList />
    </motion.section>
  );
}
