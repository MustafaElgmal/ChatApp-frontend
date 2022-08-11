import React from "react";
import { AppProps } from "../types";
import { captilize, getTime } from "../utiles/functions";

const Message = ({ message }: AppProps) => {
  const name = captilize(message?.name as string);
  const time = getTime(message?.createdAt as Date);
  return (
    <div className={`${message?.type==='reply'? "d-flex justify-content-end me-3":"d-flex justify-content-start" }`}>
      <div style={{ color: "black", background: "white",width:'55%' }}>
        <div className="m-3">
          <p className="">{name}</p>
          <p>{message?.body}</p>
        </div>
        <div className="d-flex justify-content-end me-2">
          <p>{time}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Message;
