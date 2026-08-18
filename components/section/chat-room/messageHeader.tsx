import Watcher from "@/components/global/badge.tsx/watcher";
import Logout from "@/components/global/button/logout";
import HeaderTitle from "@/components/global/header/header-title";
import { User } from "@supabase/supabase-js";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface MessageHeaderProps {
  user: User | undefined;
}

export default function MessageHeader({ user }: MessageHeaderProps) {
  return (
    <div className="pb-6 space-y-4">
      <Link
        href={"/"}
        className="h-8 w-fit flex gap-1 items-center font-semibold text-green-600 dark:text-green-500 transition-all"
      >
        <ArrowLeft size={20} strokeWidth={1.5} />
        <p>Back to Home</p>
      </Link>
      <HeaderTitle
        name="Chat Room"
        descriptions="Interactive chat room for real-time conversations and seamless communication"
        className="text-3xl"
        prefixChildren={
          user && (
            <div className="flex gap-3">
              <Logout />
              {/* <Watcher /> */}
            </div>
          )
        }
      />
    </div>
  );
}
