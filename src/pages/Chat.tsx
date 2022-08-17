import React, { useEffect, useState } from "react";
import { Button, InputGroup, Row } from "react-bootstrap";
import Header from "../components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import Message from "../components/Message";
import { authStateType, MessageType } from "../types";
import ScrollToBottom from "react-scroll-to-bottom";
import { createMessage, getMessagesByConversationId } from "../utiles/apis";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Chat = () => {
  const {id}=useParams()
  const [messages, setMassage] = useState<MessageType[]>([]);
  const token=useSelector((state:authStateType)=>state.auth.token)
  const formik = useFormik({
    initialValues: {
      body: "",
    },
    validationSchema: Yup.object({
      body: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      await createMessage(token,parseInt(id!),values)
      formik.resetForm()
    },
  });
  const getAllMessagesInConv=async()=>{
    await getMessagesByConversationId(token,parseInt(id!),setMassage)
  }
  useEffect(()=>{
    getAllMessagesInConv()

  },[])
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
