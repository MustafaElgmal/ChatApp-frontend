import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AppProps, MessageType } from "../types";
import { captilize, getLastMessage } from "../utiles/functions";

const ChatBubbles = ({ conversation, socket }: AppProps) => {
  const [name,setName]=useState<string>()
  const lastMessageBody:string = getLastMessage(conversation?.messages as MessageType[]);
  const navigate = useNavigate();
  const GoToChat = () => {
    navigate(`/Chat/${conversation?.id}`);
  };

  useEffect(() => {
    setName(captilize(conversation?.name!))
    
  }, [socket]);

  return (
    <Card
      className=" buble mb-3 p-2"
      style={{
        width: "17rem",
        backgroundColor: "#EEEEEE",
        cursor: "pointer",
      }}
      onClick={() => GoToChat()}
    >
      <div className="d-flex gap-3">
        <Image
          roundedCircle
          style={{ width: "90px", height: "90px" }}
          src={conversation?.ImgUrl}
        />
        <div className="mt-2">
          <Card.Title className="text-dark">{name}</Card.Title>
          <Card.Text className="text-dark">{lastMessageBody}</Card.Text>
        </div>
      </div>
    </Card>
  );
};

export default ChatBubbles;
