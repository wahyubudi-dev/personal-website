import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { hoverLiftSmall } from "@/common/lib/motion";

interface WorkingStatusProps {
  isPlace: Boolean;
  name: string;
}

export default function WorkingStatus({ isPlace, name }: WorkingStatusProps) {
  return (
    <motion.div {...hoverLiftSmall}>
      <Badge
        variant="outline"
        className="flex items-center gap-1.5 border-border/70 bg-card px-3 py-1 shadow-soft"
      >
        {!isPlace && (
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        )}
        {name}
      </Badge>
    </motion.div>
  );
}
