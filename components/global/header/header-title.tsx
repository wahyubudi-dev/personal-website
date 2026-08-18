import { cn } from "@/common/lib/utils";
import { LucideProps } from "lucide-react";

interface IntroProps {
  leadingIcon?: React.ComponentType<LucideProps>;
  name: string;
  descriptions: string;
  className?: string;
  prefixChildren?: React.ReactNode;
}

export default function HeaderTitle({
  name,
  descriptions,
  leadingIcon: LeadingIcon,
  className,
  prefixChildren,
}: IntroProps) {
  return (
    <div className="flex flex-1 justify-between items-center gap-5 md:gap-0">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          {LeadingIcon && <LeadingIcon strokeWidth={1.5} size={18} />}
          <p className={cn("font-semibold text-xl", className)}>{name}</p>
        </div>
        <p className="pt-1 text-sm md:text-base line-clamp-2 hover:line-clamp-none">
          {descriptions}
        </p>
      </div>
      {prefixChildren}
    </div>
  );
}
