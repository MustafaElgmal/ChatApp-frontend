import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import download from "../assets/download.jpg";

const ChatBubbles = () => {
  return (
    <>
      <Card className="ms-5 mb-3 p-2" style={{ width: "17rem", backgroundColor: "#EEEEEE" }}>
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
      <Card className="ms-5 mb-3 p-2 " style={{ width: "17rem", backgroundColor: "#EEEEEE" }}>
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
      <Card className="ms-5 mb-3 p-2 " style={{ width: "17rem", backgroundColor: "#EEEEEE" }}>
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
