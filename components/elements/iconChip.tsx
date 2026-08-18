import { cn } from "@/common/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconChipProps {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  size?: number;
  className?: string;
}

/** Small colored circle housing a lucide icon — reused wherever a service/skill/stat needs a chip. */
export default function IconChip({
  icon: Icon,
  iconBg,
  iconColor,
  size = 16,
  className,
}: IconChipProps) {
  return (
    <div
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full",
        iconBg,
        className
      )}
    >
      <Icon size={size} className={iconColor} strokeWidth={2} />
    </div>
  );
}
