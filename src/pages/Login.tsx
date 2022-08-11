import { useFormik } from "formik";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import loginP from "../Assets/loginP.jpg";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: Yup.object({
      Email: Yup.string().required("Email is required!"),
      Password: Yup.string().required("Password is required!"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <Row className="bg-light vh-100">
      <Col
        md="6"
        lg="6"
        style={{
          backgroundImage: `url(${loginP})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Col>
      <Col
        className="d-flex justify-content-center align-items-center"
        md="6"
        lg="6"
      >
        <Form className="w-50">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="Email"
              value={formik.values.Email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              placeholder="Email address"
            />
            <p className="text-danger">
              {formik.errors.Email && formik.touched.Email
                ? formik.errors.Email
                : null}
            </p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="Password"
              value={formik.values.Password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              placeholder="Password"
            />
            <p className="text-danger">
              {formik.errors.Password && formik.touched.Password
                ? formik.errors.Password
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
  );
};

export default Login;
