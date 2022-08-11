import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import chat from "../Assets/Chat.jpg";
import ChatBubbles from "../components/ChatBubbles";

const GroupChat = () => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src={chat} alt="Card image" />
        <Card.ImgOverlay>
          <ChatBubbles />
          <ChatBubbles />
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default GroupChat;
