import React from "react";
import { Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import download from "../assets/download.jpg";

const ChatBubbles = () => {
  const navigate = useNavigate();
  const GoToChat = () => {
    navigate("/Chat");
  };
  return (
    <>
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
            <Card.Title className="text-dark">Hamada</Card.Title>
            <Card.Text className="text-dark">I'm Hamada</Card.Text>
          </div>
        </div>
      </Card>
      <Card
        className="ms-5 mb-3 p-2 "
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
            <Card.Title className="text-dark">Hamada</Card.Title>
            <Card.Text className="text-dark">I'm Hamada</Card.Text>
          </div>
        </div>
      </Card>
      <Card
        className="ms-5 mb-3 p-2 "
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
            <Card.Title className="text-dark">Hamada</Card.Title>
            <Card.Text className="text-dark">I'm Hamada</Card.Text>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ChatBubbles;
