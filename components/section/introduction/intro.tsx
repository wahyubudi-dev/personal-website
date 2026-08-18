"use client";

import { TypeAnimation } from "react-type-animation";
import { workingStatus } from "@/common/constant/working";
import { motion } from "framer-motion";
import SummaryProfile from "./summaryProfile";
import WorkingStatus from "./workingStatus";

export default function Intro() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="pb-8 flex flex-col gap-5"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <TypeAnimation
            className="font-semibold"
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
              fontSize: "2em",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
          <ul className="flex items-center gap-2">
            {workingStatus.map((item, index) => (
              <WorkingStatus {...item} key={index} />
            ))}
          </ul>
        </div>
        {/* <ShimmerButton title="Open new opportunities" /> */}
      </div>
      <SummaryProfile />
    </motion.section>
  );
}
