import { useFormik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import Header from "../components/Header";
import { validateUser } from "../utiles/apis";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email is not vaild!")
        .required("Email is required!"),
      password: Yup.string().required("Password is required!"),
    }),
    onSubmit: async (values) => {
      const res = await validateUser(values, dispatch);
      formik.resetForm();
      navigate("/");
    },
  });
  return (
    <div>
      <Header name={`Sign In`} />
      <Row className="bg-light m-0">
        <Col md="6" lg="6" className="imgbackSignIn"></Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          md="6"
          lg="6"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <Form className="w-50">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "#686868" }}>Email</Form.Label>
              <Form.Control
                name="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
              />
              <p className="text-danger">
                {formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : null}
              </p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ color: "#686868" }}>Password</Form.Label>
              <Form.Control
                name="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
              />
              <p className="text-danger">
                {formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : null}
              </p>
            </Form.Group>

            <Button
              variant="secondary"
              onClick={() => formik.handleSubmit()}
              style={{ width: "100%" }}
            >
              Log In
            </Button>
            <p className="text-center mt-3">
              Don't have an account?{" "}
              <a href="/signup" className="link-primary">
                Sign up
              </a>
            </p>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
