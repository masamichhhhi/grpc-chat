import { MessageForm } from "../../components/MessageForm";
import { Messages } from "../../components/Messages";
import { GRPCClient } from "../../gRPCClient";
import { useMessageForm } from "./hooks/useMessageForm";
import { useMessages } from "./hooks/useMessages";

type Props = {
  clients: GRPCClient;
};

export const MessagesContainer: React.FC<Props> = ({ clients }) => {
  const messengerClient = clients.messengerClient;
  const messagesState = useMessages(messengerClient);
  const messageFormState = useMessageForm(messengerClient);
  return (
    <div>
      <MessageForm {...messageFormState} />
      <Messages {...messagesState} />
    </div>
  );
};
