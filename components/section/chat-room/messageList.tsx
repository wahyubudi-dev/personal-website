"use client";

import MessageItem from "./messageItem";
import { useMessage } from "@/common/lib/store/messages";
import { cn } from "@/common/lib/utils";
import DeleteMessage from "./actions/deleteMessage";

interface MessageListProps {
  classname?: string;
}

export default function MessageList({ classname }: MessageListProps) {
  const { messages } = useMessage((state) => state);

  if (messages.length < 1) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="font-medium">Data is empty</p>
      </div>
    );
  }

  return (
    <div className={cn("h-full overflow-y-scroll no-scrollbar", classname)}>
      <div className="py-4 space-y-7 overflow-y-scroll no-scrollbar">
        {messages.map((message, index) => (
          <MessageItem key={index} message={message} />
        ))}
        <DeleteMessage />
      </div>
    </div>
  );
}
