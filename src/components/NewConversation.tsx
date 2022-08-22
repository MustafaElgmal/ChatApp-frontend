import { useFormik, validateYupSchema } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AppProps, UserType } from "../types";
import * as Yup from "yup";
import { CreateConversation, getUsers } from "../utiles/apis";
import UserBubbles from "./UserBubbles";
import { useAppSelector } from "../utiles/hookes";

const NewConversation = ({ show, onHide }: AppProps) => {
  const [users,setUsers]=useState<UserType[]>([])
  const [usersGroupSelected,setUsersGroupSelected]=useState<UserType[]>([])
  const [userIds,setUserIds]=useState<number[]>([])
  const token=useAppSelector((state)=>state.auth.token)
  const formik = useFormik({
    initialValues:{
      title: ""
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title of Conversation is required!"),
    }),
    onSubmit: async (values) => {
      console.log({...values,userIds})
      const res=await CreateConversation({...values,userIds},token)
      if(res?.status===201){
        alert('Added conversation!')
        setUsersGroupSelected([])
        setUserIds([])
        formik.resetForm()
        onHide && onHide();
      }
      
    },
  });
  const AddToGroup=(user:any)=>{
    userIds.push(user.id)
    setUserIds(userIds)
    setUsersGroupSelected((prevUsers)=>[...prevUsers,{...user}])
  }
  const getAllUsers=async()=>{
    await getUsers(setUsers,token)
  }
  useEffect(()=>{
    getAllUsers()
  },[])
  return (
    <Modal
       size='sm'
      show={show}
      onHide={() => {
        formik.resetForm()
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
          <Form.Group className="mb-3" style={{width:'14rem'}}>
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
          <div className="userGroup">
            {users.map((user)=>(<UserBubbles key={user.id} user={user} AddToGroup={AddToGroup} />))}
          </div>
          <Button variant="dark" onClick={() => formik.handleSubmit()}>
            Add conversation
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewConversation;
