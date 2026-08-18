import { Badge } from "@/components/ui/badge";

interface WorkingStatusProps {
  isPlace: Boolean;
  name: string;
}

export default function WorkingStatus({ isPlace, name }: WorkingStatusProps) {
  return (
    <Badge
      variant="outline"
      className="flex items-center gap-1 dark:shadow-[0_3px_10px_rgb(0,0,0,0.15)] dark:shadow-neutral-800 dark:border-[1px] dark:border-gray-800"
    >
      {!isPlace && <span className="text-green-600">{!isPlace && "•"}</span>}
      {name}
    </Badge>
  );
}
