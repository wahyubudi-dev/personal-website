"use client";

import { cn } from "@/common/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { snappySpring } from "@/common/lib/motion";

interface NavigationItemProps {
  name: string;
  route: string;
  icon: LucideIcon;
  bgColor: string;
  hoverBg: string;
  pathname: string;
}

export default function NavigationItem({
  name,
  route,
  icon: Icon,
  bgColor,
  hoverBg,
  pathname,
}: NavigationItemProps) {
  return (
    <Tooltip>
      <Link href={route} download={route === "/file/cv.pdf"}>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={snappySpring}
            className={cn(
              "group p-3 rounded-2xl border border-border/50 bg-card shadow-soft transition-colors",
              hoverBg,
              pathname === route && bgColor
            )}
          >
            <Icon strokeWidth={1.5} className="text-muted-foreground" />
          </motion.div>
        </TooltipTrigger>
      </Link>

      <TooltipContent className="mb-3.5 border border-border/60 bg-card text-foreground shadow-soft">
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
}
