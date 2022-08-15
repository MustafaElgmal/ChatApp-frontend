import React from "react";
import { Card } from "react-bootstrap";
import chat from "../assets/Chat.jpg";
import ChatBubbles from "../components/ChatBubbles";
import Header from "../components/Header";

const GroupChat = () => {
  return (
    <div>
      <Header name={`Conversation`} />
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
