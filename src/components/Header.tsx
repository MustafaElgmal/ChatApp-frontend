import React, { useState } from "react";
import { Navbar, Button, Container, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authStateType } from "../types";
import { handelLogout } from "../redux/features/authSlice";
import img from "../assets/icons8-arrow-pointing-left-24.png";
import { useNavigate } from "react-router";
import { PlusSquareFill } from "react-bootstrap-icons";
import NewConversation from "./NewConversation";


const Header = ({ name }: { name: string }) => {
  const [show, setShow] = useState(false);
  const isLoggedIn = useSelector(
    (state: authStateType) => state.auth.isLoggedIn
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Logout = () => {
    dispatch(handelLogout());
    localStorage.removeItem("user");
    navigate("/");
  };
  const GoToConversation = () => {
    navigate("/");
  };
  return (
    <Navbar style={{ color: "#F8F5F5", height: "60px" }}>
      <Container>
        <Navbar.Brand className="h1 fw-bold fs-4" style={{ color: "#595959" }}>
          {name === "Chat" ? (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              src={img}
              style={{ cursor: "pointer" }}
              onClick={() => GoToConversation()}
            />
          ) : null}
          <Navbar.Text>{name}</Navbar.Text>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end gap-3">
          {isLoggedIn ? (
            <>
              <Dropdown>
                <Dropdown.Toggle
                  variant="dark"
                  id="dropdown-basic"
                ></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setShow(true)}>
                    New conversation
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => Logout()}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <NewConversation show={show} onHide={() => setShow(false)} />
            </>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
