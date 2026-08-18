import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { emailFormSchema } from "@/common/types/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import axios from "axios";
import { sendEmailApiRoute } from "@/common/constant/route";

export default function EmailForm() {
  const form = useForm<z.infer<typeof emailFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof emailFormSchema>> = async (
    emailData
  ) => {
    try {
      const { data } = emailFormSchema.safeParse(emailData);

      if (data) {
        const response = await axios.post(sendEmailApiRoute, data);

        if (response.status !== 200) {
          toast("Email failed to send", {
            description: "System trouble, please use another method for now.",
          });
        }

        form.reset();
        toast("Email sent successfully", {
          description: "Thanks for contacting me. I'll reply ASAP!",
        });
      }
    } catch (err) {
      toast("Email failed to send", {
        description: "System trouble, please use another method for now.",
      });
      return;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <FormField
              disabled={isLoading}
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fullname</FormLabel>
                  <FormControl>
                    <Input placeholder="Write your fullname here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2">
            <FormField
              disabled={isLoading}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Write your email here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          disabled={isLoading}
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="h-44"
                  placeholder="Write here the message you want"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {!isLoading ? "Send a message" : <Loader />}
        </Button>
      </form>
    </Form>
  );
}
