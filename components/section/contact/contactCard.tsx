import { cn } from "@/common/lib/utils";
import { LucideIcon, MoveRight } from "lucide-react";
import Link from "next/link";

interface ContactCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  route: string;
  classContainer: string;
  classText: string;
  classLink: string;
  classIcon: string;
}

export default function ContactCard({
  name,
  description,
  icon: Icon,
  route,
  classContainer,
  classText,
  classLink,
  classIcon,
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "flex h-max w-full items-end justify-between rounded-lg border bg-opacity-40 bg-gradient-to-br p-4 md:p-6",
        classContainer
      )}
    >
      <div className={classText}>
        <h3 className="text-xl font-semibold capitalize">{name}</h3>
        <p className="my-2 max-w-[250px] text-[10px] md:text-xs">
          {description}
        </p>
        <Link
          href={route}
          target="_blank"
          className={cn(
            "mt-4 flex w-max items-center gap-1 rounded-md px-3 py-2 text-[8px] text-xs font-medium text-white shadow-sm dark:text-black md:px-4 md:py-2 md:text-sm",
            classLink
          )}
        >
          <p>
            Go to <span className="capitalize">{name}</span>
          </p>
          <MoveRight strokeWidth={1} />
        </Link>
      </div>
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full text-white md:h-16 md:w-16",
          classIcon
        )}
      >
        <Icon />
      </div>
    </div>
  );
}
