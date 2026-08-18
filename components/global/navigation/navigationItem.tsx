import { cn } from "@/common/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

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
        <TooltipTrigger
          className={cn(
            "group p-3 rounded-2xl border border-gray-50 bg-white shadow transition-all",
            hoverBg,
            pathname === route && bgColor
          )}
        >
          <Icon strokeWidth={1.5} className="text-gray-600" />
        </TooltipTrigger>
      </Link>

      <TooltipContent className="mb-3.5 shadow bg-gray-50 border border-white">
        <p className="dark:text-black">{name}</p>
      </TooltipContent>
    </Tooltip>
  );
}
