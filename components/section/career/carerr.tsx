"use client";

import HeaderTitle from "@/components/global/header/header-title";
import CareerList from "./careerList";
import { Badge } from "@/components/ui/badge";
import { Download, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function Career() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="py-8"
    >
      <HeaderTitle
        name="Careers"
        descriptions={`My professional work journey since 2020-${new Date().getFullYear()} (current)`}
        leadingIcon={Leaf}
        prefixChildren={
          <a href="file/cv.pdf" download className="text-sm">
            <Badge variant="outline" className="flex gap-1.5">
              <Download className="h-5 w-5 md:h-3 md:w-3" />
              Download Resume
            </Badge>
          </a>
        }
      />
      <CareerList />
    </motion.section>
  );
}
