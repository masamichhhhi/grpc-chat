import { useEffect, useState } from "react";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { MessengerClient } from "../../../messenger/MessengerServiceClientPb";

export const useMessages = (client: MessengerClient) => {
  const [messages, setMessages] = useState<string[]>(["test"]);

  useEffect(() => {
    const stream$ = client.getMessages(new Empty());
    stream$.on("data", (res) => {
      console.log("aaa");
      setMessages((state) => [...state, res.getMessage()]);
    });

    stream$.on("status", (err) => console.log(err));
  }, [client]);

  return {
    messages,
  };
};
