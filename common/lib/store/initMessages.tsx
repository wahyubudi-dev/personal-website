"use client";

import { useRef, useEffect } from "react";
import { Imessage, useMessage } from "./messages";

interface InitMessagesProps {
  messages: Imessage[];
}

export default function InitMessages({ messages }: InitMessagesProps) {
  const initState = useRef(false);

  useEffect(() => {
    if (!initState.current) {
      useMessage.setState({ messages });
    }

    initState.current = true;
  }, []);

  return <></>;
}
