"use client";

import { useMessage } from "@/common/lib/store/messages";
import { createClient } from "@/common/lib/supabase/client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export default function DeleteMessage() {
  const { actionMessage, optimisticDeleteMessage } = useMessage(
    (state) => state
  );

  const handleDeleteMessage = async () => {
    const supabase = createClient();

    const { data, error } = await supabase
      .from("messages")
      .delete()
      .eq("id", actionMessage?.id!);

    if (error) toast.error(error.message);

    optimisticDeleteMessage(actionMessage?.id!);
    toast.success("Successfully deleted a message");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div id="trigger-delete" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            message and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteMessage}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
