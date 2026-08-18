import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { supabaseServer } from "@/common/lib/supabase/server";
import MessageList from "./messageList";
import Login from "@/components/global/button/login";
import MessageField from "./messageField";
import InitUser from "@/common/lib/store/initUser";
import MessageHeader from "./messageHeader";
import InitMessages from "@/common/lib/store/initMessages";

export default async function ChatRoom() {
  const supabase = await supabaseServer();
  const { data: userData } = await supabase.auth.getSession();
  const { data: messageData } = await supabase
    .from("messages")
    .select("*, users(*)");

  return (
    <section className="flex flex-col h-full">
      <MessageHeader user={userData.session?.user} />
      <Separator />
      <Suspense fallback={"Loading..."}>
        <MessageList />
        <InitMessages messages={messageData || []} />
      </Suspense>
      <Separator />
      <div className="pt-4">
        {userData.session ? <MessageField /> : <Login />}
      </div>
      <InitUser user={userData.session?.user} />
    </section>
  );
}
