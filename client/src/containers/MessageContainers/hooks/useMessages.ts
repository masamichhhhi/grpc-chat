import { useEffect, useState } from "react";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { MessengerClient } from "../../../messenger/MessengerServiceClientPb";

export const useMessages = (client: MessengerClient) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const stream$ = client.getMessages(new Empty());
    stream$.on("data", (m: any) => {
      setMessages((state) => [...state, m.getMessages()]);
    });
  }, [client]);

  return {
    messages,
  };
};
