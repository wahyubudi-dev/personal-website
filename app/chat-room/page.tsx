import { Metadata } from "next";
import ChatRoom from "@/components/section/chat-room/chatRoom";

export const metadata: Metadata = {
  title: "Chat Room | Wahyu Budi Utomo",
  description:
    "Join interactive Chat Room for real-time conversations and seamless communication. Connect, chat, and engage with a dynamic community. Experience the future of messaging now!",
};

export default function ChatRoomPage() {
  return (
    <main className="page-shell h-screen">
      <div className="page-container h-full">
        <ChatRoom />
      </div>
    </main>
  );
}
