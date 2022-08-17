import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AppProps, authStateType, UserTypes } from "../types";
import * as Yup from "yup";
import { CreateConversation, getUsers } from "../utiles/apis";
import { useSelector } from "react-redux";

const NewConversation = ({ show, onHide }: AppProps) => {
  const [users,setUsers]=useState<UserTypes[]>([])
  const token=useSelector((state:authStateType)=>state.auth.token)
  const formik = useFormik({
    initialValues: {
      title: "",
      userIds: [],
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title of Conversation is required!"),
    }),
    onSubmit: async (values) => {
      await CreateConversation(values,token)
      formik.resetForm()
      onHide && onHide();
    },
  });
  const getAllUsers=async()=>{
    await getUsers(setUsers,token)
  }
  useEffect(()=>{
    getAllUsers()

  },[])
  return (
    <Modal
      size="sm"
      show={show}
      onHide={() => {
        onHide && onHide();
      }}
      aria-labelledby="example-modal-sizes-title-sm"
      className="mmg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          New Conversation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Title:</Form.Label>
            <Form.Control
              name="title"
              value={formik.values.title}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <p className="text-danger">
              {formik.errors.title && formik.touched.title
                ? formik.errors.title
                : null}
            </p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Select participant(s):</Form.Label>
            <Form.Select
              multiple
              name="userIds"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userIds}
            >
              {users.map((user)=>(<option key={user.id} value={user.id}>{user.email}</option>))}
            </Form.Select>
          </Form.Group>
          <Button variant="dark" onClick={() => formik.handleSubmit()}>
            Add conversation
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewConversation;
