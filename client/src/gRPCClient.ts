import { MessengerClient } from "./messenger/MessengerServiceClientPb";

export type GRPCClient = {
  messengerClient: MessengerClient;
};

export const gRPCClients = {
  messengerClient: new MessengerClient("http://localhost:8080"),
};
