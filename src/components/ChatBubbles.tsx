import React from "react";
import { Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AppProps, MessageType } from "../types";
import { getLastMessage } from "../utiles/functions";

const ChatBubbles = ({conversation}:AppProps) => {
  const lastMessage:MessageType=getLastMessage(conversation?.messages!)
  const navigate = useNavigate();
  const GoToChat = () => {
    navigate(`/Chat/${conversation?.id}`);
  };
  return (
    <Card
      className="ms-5 mb-3 p-2"
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
          src={conversation?.users[1].ImgUrl}
        />
        <div className="mt-2">
          <Card.Title className="text-dark">{conversation?.title}</Card.Title>
          <Card.Text className="text-dark">{lastMessage?.body}</Card.Text>
        </div>
      </div>
    </Card>
  );
};

export default ChatBubbles;
