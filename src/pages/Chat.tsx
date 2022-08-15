import React, { useState } from "react";
import { Button, InputGroup, Row } from "react-bootstrap";
import Header from "../components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import Message from "../components/Message";
import { MessageType } from "../types";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = () => {
  const [messages, setMassage] = useState<MessageType[]>([
    {
      id: 1,
      name: "mostafa",
      body: "How is it going?",
      type: "message",
      createdAt: new Date(moment().format()),
    },
    {
      id: 2,
      name: "Ahmed",
      body: "I am very good!",
      type: "reply",
      createdAt: new Date(moment().format()),
    },
    {
      id: 3,
      name: "mostafa",
      body: "What about Tawwr bootCamp ?",
      type: "message",
      createdAt: new Date(moment().format()),
    },
    {
      id: 4,
      name: "Ahmed",
      body: "It is very good.We do a lot of tasks and learn a lot of new things like React js.Realy, I recomended this for you.",
      type: "reply",
      createdAt: new Date(moment().format()),
    },
    {
      id: 5,
      name: "mostafa",
      body: "I do that After this batch.Thank You",
      type: "message",
      createdAt: new Date(moment().format()),
    },
  ]);
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });
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
                  message?.type === "reply" ? "end my-3" : "start my-3"
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
                name="message"
                value={formik.values.message}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                rows={1}
                cols={150}
              ></textarea>
              <Button variant="dark" onClick={() => formik.handleSubmit()}>
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
