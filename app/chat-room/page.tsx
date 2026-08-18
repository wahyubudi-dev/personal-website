import { Metadata } from "next";
import ChatRoom from "@/components/section/chat-room/chatRoom";

export const metadata: Metadata = {
  title: "Chat Room | Wahyu Budi Utomo",
  description:
    "Join interactive Chat Room for real-time conversations and seamless communication. Connect, chat, and engage with a dynamic community. Experience the future of messaging now!",
};

export default function ChatRoomPage() {
  return (
    <main className="flex flex-col items-center py-16 gap-6 px-8 lg:px-0 h-screen">
      <div className="max-w-[50rem] w-full h-full">
        <ChatRoom />
      </div>
    </main>
  );
}
