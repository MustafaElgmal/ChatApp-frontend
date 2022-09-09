import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AppProps, UserType } from "../types";
import * as Yup from "yup";
import { CreateConversation, getUsers } from "../utiles/apis";
import UserBubbles from "./UserBubbles";
import { useAppSelector } from "../redux/app/hookes";
import SelectedUsers from "./SelectedUsers";
import { useDispatch } from "react-redux";

const NewConversation = ({ show, onHide }: AppProps) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const dispatch=useDispatch()
  const [usersGroupSelected, setUsersGroupSelected] = useState<Set<UserType>>(
    new Set()
  );
  const [userIds, setUserIds] = useState<Set<number>>(new Set(new Set()));
  const token = useAppSelector((state) => state.auth.token);

  const AddToGroup = (user: UserType) => {
    setUserIds((prevIds)=>new Set([...prevIds,user.id]));
    setUsersGroupSelected((prevUsers)=>new Set([...prevUsers,user]));
  };

  const getAllUsers = async () => {
    await getUsers(setUsers, token);
  };
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Conversation name is required!"),
    }),
    onSubmit: async (values) => {
      const IDs = Array.from(userIds);
      if (IDs.length > 0) {
        const res = await CreateConversation(
          { ...values, userIds: IDs },
          token,
          dispatch
        );
        if (res?.status === 201) {
          alert("Added conversation!");
          setUsersGroupSelected(new Set());
          setUserIds(new Set());
          formik.resetForm();
          onHide && onHide();
        }
      } else {
        alert("Please select User!");
      }
    },
  });

  
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <Modal
      show={show}
      onHide={() => {
        formik.resetForm();
        onHide && onHide();
        setUsersGroupSelected(new Set());
        setUserIds(new Set());
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
        {Array.from(usersGroupSelected).length > 0 ? (
          <div className="d-flex gap-3 selectedUsers">
            {Array.from(usersGroupSelected).map((user: UserType) => (
              <SelectedUsers key={user.id} user={user} />
            ))}
          </div>
        ) : null}
        <Form>
          <Form.Group className="my-3" style={{ width: "14rem" }}>
            <Form.Control
              name="title"
              value={formik.values.title}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Conversation name"
            />
            <p className="text-danger">
              {formik.errors.title && formik.touched.title
                ? formik.errors.title
                : null}
            </p>
          </Form.Group>
          <div className="userGroup">
            {users.map((user) => (
              <UserBubbles key={user.id} user={user} AddToGroup={AddToGroup} />
            ))}
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
