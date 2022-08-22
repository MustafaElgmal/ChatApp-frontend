import React, { useEffect, useState } from "react";
import { Button, InputGroup, Row } from "react-bootstrap";
import Header from "../components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import Message from "../components/Message";
import { AppProps,MessageType } from "../types";
import ScrollToBottom from "react-scroll-to-bottom";
import { createMessage, getMessagesByConversationId } from "../utiles/apis";
import { useParams } from "react-router";
import { useAppSelector } from "../utiles/hookes";

const Chat = ({ socket }: AppProps) => {
  const { id } = useParams();
  const [messages, setMessages] = useState<MessageType[]>([]);
  const token=useAppSelector((state)=>state.auth.token)
  const formik = useFormik({
    initialValues: {
      body: "",
    },
    validationSchema: Yup.object({
      body: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      const res = await createMessage(token, parseInt(id!), values);
      if (res?.status === 201) {
        socket?.emit("send_message", res.data.message);
      }
      formik.resetForm();
    },
  });
  const getAllMessagesInConv = async () => {
    await getMessagesByConversationId(token, parseInt(id!), setMessages);
  };
  useEffect(() => {
    socket?.on("recieve_message", (message) => {
      if (message.socketId === socket.id) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { ...message.message, type: "create" },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { ...message.message, type: "replay" },
        ]);
      }
    });
    getAllMessagesInConv();
  }, []);

  return (
    <section>
      <Header name={"Chat"} />
      <div className="bgg pt-5">
        <ScrollToBottom className="mt-5 box">
          <div className="ms-5 mt-3">
            {messages.map((message) => (
              <Row
                key={message?.id}
                className={`${
                  message?.type === "create" ? "end my-3" : "start my-3"
                }`}
              >
                <Message message={message} /> <br />
              </Row>
            ))}
          </div>
          <Row className="bttn">
            <InputGroup>
              <textarea
                id="form3Example1c"
                className="form-control"
                name="body"
                value={formik.values.body}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                rows={1}
                cols={150}
              ></textarea>
              <Button
                style={{ background: "#0CA47E", borderColor: "#0CA47E" }}
                onClick={() => formik.handleSubmit()}
              >
                Send
              </Button>
            </InputGroup>
          </Row>
        </ScrollToBottom>
      </div>
    </section>
  );
};

export default Chat;
