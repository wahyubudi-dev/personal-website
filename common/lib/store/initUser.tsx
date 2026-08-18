"use client";

import { User } from "@supabase/supabase-js";
import { useRef, useEffect } from "react";
import { useUser } from "./user";

interface InitUserProps {
  user: User | undefined;
}

export default function InitUser({ user }: InitUserProps) {
  const initUser = useRef(false);

  useEffect(() => {
    if (!initUser.current) {
      useUser.setState({ user });
    }

    initUser.current = true;
  }, []);

  return <></>;
}
