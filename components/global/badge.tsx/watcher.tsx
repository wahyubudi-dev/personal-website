import { Badge } from "@/components/ui/badge";
import { User } from "@supabase/supabase-js";
import { Eye } from "lucide-react";

interface WatcherProps {
  user?: User | undefined;
}

export default function Watcher({ user }: WatcherProps) {
  return (
    <Badge variant={"default"} className="flex items-center gap-2 w-fit py-1">
      <Eye size={18} />
      <p>Watch</p>
      <div className="rounded-full bg-muted-foreground h-4 w-4 text-center">
        7
      </div>
    </Badge>
  );
}
