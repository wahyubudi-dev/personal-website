"use client";

import { createClient } from "@/common/lib/supabase/client";
import { chatFormSchema } from "@/common/types/form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Send } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@/common/lib/store/user";
import { Imessage, useMessage } from "@/common/lib/store/messages";

export default function MessageField() {
  const form = useForm<z.infer<typeof chatFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(chatFormSchema),
    defaultValues: {
      message: "",
    },
  });

  const { user } = useUser((state) => state);
  const { addMessage } = useMessage((state) => state);

  const supabase = createClient();

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof chatFormSchema>> = async (
    messageData
  ) => {
    try {
      const newMessage = {
        id: uuidv4(),
        text: messageData.message,
        send_by: user?.id,
        is_edit: false,
        created_at: new Date().toISOString(),
        users: {
          id: user?.id,
          avatar_url: user?.user_metadata.avatar_url,
          created_at: user?.created_at,
          display_name: user?.user_metadata.full_name,
        },
      };

      const { data, error } = await supabase
        .from("messages")
        .insert({ text: messageData.message });

      if (error) toast.error(error.message);

      addMessage(newMessage as Imessage);

      toast.success("Message sent successfully");

      form.reset();
    } catch (err) {
      toast("Email failed to send", {
        description: "System trouble, please use another method for now.",
      });
      return;
    }
  };

  const handleKeyDown = (event: {
    key: string;
    shiftKey: any;
    preventDefault: () => void;
  }) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.handleSubmit(onSubmit)();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 flex items-center gap-3"
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Textarea
                  className="resize-none"
                  placeholder="Write the message here..."
                  {...field}
                  onKeyDown={handleKeyDown}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button
          type="submit"
          disabled={isLoading || form.getValues().message.length < 1}
          className="rounded-sm h-12 w-12 p-0 shadow-md"
        >
          {!isLoading ? <Send size={24} /> : <Loader />}
        </Button> */}
      </form>
    </Form>
  );
}
