"use client";

import { handleLogout } from "@/common/lib/supabase/auth-action";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleOnClick = async () => {
    const logout = await handleLogout();

    if (logout) {
      router.refresh();
    }
  };

  return (
    <Button
      variant={"destructive"}
      onClick={handleOnClick}
      className="rounded-sm h-7 p-0 shadow-md dark:shadow-gray-800 space-x-2 px-3 dark:border-gray-600 "
    >
      <LogOutIcon size={12} />
      <p>Sign out</p>
    </Button>
  );
}
