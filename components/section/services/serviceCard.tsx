"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import IconChip from "@/components/elements/iconChip";
import TiltCard from "@/components/elements/tiltCard";
import { fadeInUp, hoverLift } from "@/common/lib/motion";

interface ServiceCardProps {
  icon: LucideIcon;
  name: string;
  hastag: string;
  iconBg: string;
  iconColor: string;
  description: string;
}

export default function ServiceCard({
  icon,
  name,
  hastag,
  iconBg,
  iconColor,
  description,
}: ServiceCardProps) {
  return (
    <motion.div variants={fadeInUp} {...hoverLift}>
      <TiltCard>
        <Card className="h-full hover:shadow-soft-lg">
          <CardHeader>
            <IconChip icon={icon} iconBg={iconBg} iconColor={iconColor} />
            <CardTitle className="pt-2 text-base font-medium">
              {name}
            </CardTitle>
            <CardDescription>{hastag}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </TiltCard>
    </motion.div>
  );
}
