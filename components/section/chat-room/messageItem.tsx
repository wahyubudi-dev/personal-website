import { Imessage } from "@/common/lib/store/messages";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdVerified } from "react-icons/md";
import moment from "moment";
import MessageMenu from "./messageMenu";

interface MessageItemProps {
  message: Imessage;
}

export default function MessageItem({ message }: MessageItemProps) {
  const isOwner =
    message.users?.id === process.env.NEXT_PUBLIC_SUPABASE_SUPER_USER_ID;

  return (
    <div className="flex gap-3.5">
      <Avatar className="ring-1 ring-gray-400">
        <AvatarImage
          src={message.users?.avatar_url}
          alt={message.users?.display_name}
          draggable={false}
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold flex gap-1.5 items-center">
            {message.users?.display_name}
            {isOwner && (
              <MdVerified className="text-blue-600 dark:text-blue-500 transition-all" />
            )}
          </h3>
          <p className="text-xs text-gray-400">
            {moment(message.created_at).fromNow()}
          </p>
        </div>
        <div className="group w-fit flex items-center gap-2 relative">
          <div className="bg-slate-100 dark:bg-black border dark:border-gray-800 pl-4 pr-10 py-3 rounded-r-sm rounded-bl-sm transition-all relative">
            <p className="pb-3 text-gray-700 dark:text-gray-200">
              {message.text}
            </p>
            <p className="absolute bottom-1.5 right-2 text-xs font-medium text-gray-400">
              {moment(message.created_at).format("LT")}
            </p>
          </div>
          <MessageMenu message={message} />
        </div>
      </div>
    </div>
  );
}
