"use client";

import { servicesData } from "@/common/constant/data";
import ServiceCard from "./serviceCard";
import { motion } from "framer-motion";
import { staggerContainer } from "@/common/lib/motion";

export default function ServiceList() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.1)}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {servicesData.map((service) => (
        <ServiceCard {...service} key={service.name} />
      ))}
    </motion.div>
  );
}
