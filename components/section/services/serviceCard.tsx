import { cn } from "@/common/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceListProps {
  icon: LucideIcon;
  name: string;
  hastag: string;
  bgColor: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  name,
  hastag,
  bgColor,
  description,
}: ServiceListProps) {
  return (
    <Card
      key={name}
      className={cn(
        "dark:shadow-[0_3px_10px_rgb(0,0,0,0.15)] dark:shadow-neutral-800 dark:border-[1px] dark:border-gray-800 dark:text-black",
        bgColor
      )}
    >
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon size={14} />
          <CardTitle className="text-base">{name}</CardTitle>
        </div>
        <CardDescription>{hastag}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-justify text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
