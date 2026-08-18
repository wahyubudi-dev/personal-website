"use client";

import { TypeAnimation } from "react-type-animation";
import { workingStatus } from "@/common/constant/working";
import { motion } from "framer-motion";
import SummaryProfile from "./summaryProfile";
import WorkingStatus from "./workingStatus";
import { fadeInUp, staggerContainer } from "@/common/lib/motion";

export default function Intro() {
  return (
    <motion.section
      variants={staggerContainer(0.12, 0.05)}
      initial="hidden"
      animate="show"
      className="pb-10 flex flex-col gap-6"
    >
      <div className="flex flex-col gap-3">
        <motion.div variants={fadeInUp}>
          <TypeAnimation
            className="font-semibold tracking-tight text-foreground"
            sequence={[
              `Hi, i'm Wahyu Budi Utomo`,
              2000,
              "Hi, i'm Software Engineer",
              2000,
              "Hi, i'm Fullstack Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2.25em",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </motion.div>
        <motion.ul
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-2"
        >
          {workingStatus.map((status, index) => (
            <WorkingStatus {...status} key={index} />
          ))}
        </motion.ul>
      </div>
      <motion.div variants={fadeInUp}>
        <SummaryProfile />
      </motion.div>
    </motion.section>
  );
}
