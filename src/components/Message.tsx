import React from "react";
import { Row, Col } from "react-bootstrap";
import { AppProps } from "../types";
import { captilize, getTime } from "../utiles/functions";

const Message = ({ message }: AppProps) => {
  const name = captilize(message?.name as string);
  const time = getTime(message?.createdAt as Date);
  return (
    <Col lg={6} md={5} style={{ color: "black", background: "white" }}>
      <div>
        <p className="fs-5">{name}</p>
        <p>{message?.body}</p>
        <span style={{ float: "right" }}>{time}</span>
      </div>
    </Col>
  );
};

export default Message;
