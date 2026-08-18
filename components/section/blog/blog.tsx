"use client";

import HeaderTitle from "@/components/global/header/header-title";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import BlogList from "./blogList";

export default function Blog() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="pb-6">
        <HeaderTitle
          name="Blogs"
          descriptions="Discover insights, tips, and experiences in coding, development best practices, and the latest industry trends"
          className="text-3xl"
        />
      </div>
      <Separator />
      <BlogList />
    </motion.section>
  );
}
