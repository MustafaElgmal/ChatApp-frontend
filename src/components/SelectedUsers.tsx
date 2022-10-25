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
        src={`${
          user?.ImgUrl
            ? user.ImgUrl
            : "https://qidebzlwdtrdeqcmpbgl.supabase.co/storage/v1/object/sign/images/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvMzYwX0ZfMzQ2ODM5NjgzXzZuQVB6YmhwU2tJcGI4cG1Bd3Vma0M3YzVlRDd3WXdzLmpwZyIsImlhdCI6MTY2NjYzOTMxOSwiZXhwIjoxOTgxOTk5MzE5fQ.G8ugKaEVwz41Gcri6TpC_tUHgYom63QY1KWmuNk5vd4"
        }`}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </div>
  );
};

export default SelectedUsers;
