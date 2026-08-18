"use client";

import HeaderTitle from "@/components/global/header/header-title";
import ProjectList from "./projectList";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="pb-6">
        <HeaderTitle
          name="Projects"
          descriptions="Showcasing innovation, expertise, and a passion for excellence"
          className="text-3xl"
        />
      </div>
      <Separator />
      <ProjectList />
    </motion.section>
  );
}
