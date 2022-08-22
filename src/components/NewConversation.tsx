import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AppProps, authStateType, UserType, UserTypes } from "../types";
import * as Yup from "yup";
import { CreateConversation, getUsers } from "../utiles/apis";
import { useSelector } from "react-redux";
import UserBubbles from "./UserBubbles";
import SelectedUsers from "./SelectedUsers";

const NewConversation = ({ show, onHide }: AppProps) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [usersGroupSelected, setUsersGroupSelected] = useState<Set<UserType>>(
    new Set()
  );
  const [userIds, setUserIds] = useState<Set<number>>(new Set(new Set()));
  const token = useSelector((state: authStateType) => state.auth.token);
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title of Conversation is required!"),
    }),
    onSubmit: async (values) => {
      console.log({ ...values, userIds });
      const IDs = Array.from(userIds);
      if (IDs.length > 0) {
        const res = await CreateConversation(
          { ...values, userIds: IDs },
          token
        );
        if (res?.status === 201) {
          alert("Added conversation!");
          setUsersGroupSelected(new Set());
          setUserIds(new Set());
          formik.resetForm();
          onHide && onHide();
        }
      }
    },
  });

  const AddToGroup = (user: UserType) => {
    userIds.add(user.id);
    setUserIds(userIds);
    usersGroupSelected.add(user);
    setUsersGroupSelected(usersGroupSelected);
  };

  const getAllUsers = async () => {
    await getUsers(setUsers, token);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <Modal
      size="sm"
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
        <div className="d-flex gap-3 selectedUsers">
          {Array.from(usersGroupSelected).map((user: UserType) => (
            <SelectedUsers key={user.id} user={user} />
          ))}
        </div>
        <Form>
          <Form.Group className="mb-3" style={{ width: "14rem" }}>
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
