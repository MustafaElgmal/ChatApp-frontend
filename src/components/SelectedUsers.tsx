import React from "react";
import { Card, Image } from "react-bootstrap";
import { AppProps } from "../types";
// import { TiDeleteOutline } from "@react-icons/all-files/ti/TiDeleteOutline";

const SelectedUsers = ({ user }: AppProps) => {
  const name = `${user?.firstName[0]}${user?.firstName[1]}${user?.firstName[2]}...`;
  return (
    <div>
      <Image
        className="ms-2"
        roundedCircle
        style={{ width: "40px", height: "40px" }}
        src={user?.ImgUrl}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </div>
  );
};

export default SelectedUsers;
