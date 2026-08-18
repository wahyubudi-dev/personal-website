"use client";

import AnimateCounter from "@/components/elements/animateCounter";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { hoverLift } from "@/common/lib/motion";

interface OverviewItemProps {
  label: string;
  value: number;
  unit?: string;
}

export default function OverviewItem({
  label,
  value,
  unit = "",
}: OverviewItemProps) {
  return (
    <motion.div {...hoverLift} className="self-center">
      <Card>
        <CardContent className="flex flex-col gap-0 p-4">
          <span className="text-sm text-muted-foreground">{label}</span>
          <div>
            <AnimateCounter
              className="text-xl font-medium text-primary lg:text-2xl"
              total={value}
            />
            {unit && (
              <span className="text-sm text-muted-foreground"> {unit}</span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
