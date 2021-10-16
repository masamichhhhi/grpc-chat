import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MessagesContainer } from "./containers/MessageContainers";
import { gRPCClients } from "./gRPCClient";

function App() {
  return <MessagesContainer clients={gRPCClients} />;
}

export default App;
