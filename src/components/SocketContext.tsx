import React, { createContext, useContext } from "react";
import { Socket } from "socket.io-client";

const SocketContext = createContext<Socket | null>(null);

export const UseContext = () => {
  const context = useContext(SocketContext);
  if (context === null) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

export default UseContext;
