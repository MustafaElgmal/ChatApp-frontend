import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import download from "../assets/download.jpg";
import { AppProps } from "../types";

const ChatBubbles = ({conversation}:AppProps) => {
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
          src={download}
        />
        <div className="mt-2">
          <Card.Title className="text-dark">{conversation?.title}</Card.Title>
          <Card.Text className="text-dark">I'm Hamada</Card.Text>
        </div>
      </div>
    </Card>
  );
};

export default ChatBubbles;
