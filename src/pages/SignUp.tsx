import { useFormik } from "formik";
import React from "react";
import { Image, Button } from "react-bootstrap";
import * as Yup from "yup";
import img from "../assets/priscilla-du-preez-DLuorYRjxJw-unsplash.jpg";
import Header from "../components/Header";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("FirstName is required!"),
      lastName: Yup.string().required("LastName is required!"),
      email: Yup.string()
        .email("Email is not vaild!")
        .required("Email is required!"),
      password: Yup.string().required("Password is required!"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <section className="min-vh-100">
      <Header name={"Sign up"} />
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="div"></div>
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black mt-4"
              style={{ background: "#EEEEEE" }}
            >
              <div>
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <form className="mx-1 mx-md-4" style={{ marginTop: "50%" }}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label style={{ color: "#686868" }}>First Name</label>
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="firstName"
                            value={formik.values.firstName}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                          />
                          <p className="text-danger">
                            {formik.errors.firstName && formik.touched.firstName
                              ? formik.errors.firstName
                              : null}
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label style={{ color: "#686868" }}>last Name</label>
                          <input
                            type="text"
                            id="form3Example2c"
                            className="form-control"
                            name="lastName"
                            value={formik.values.lastName}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                          />
                          <p className="text-danger">
                            {formik.errors.lastName && formik.touched.lastName
                              ? formik.errors.lastName
                              : null}
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label style={{ color: "#686868" }}>Email</label>

                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                          />
                          <p className="text-danger">
                            {formik.errors.email && formik.touched.email
                              ? formik.errors.email
                              : null}
                          </p>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label style={{ color: "#686868" }}>Password</label>
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                          />
                          <p className="text-danger">
                            {formik.errors.password && formik.touched.password
                              ? formik.errors.password
                              : null}
                          </p>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mb-3 mb-lg-4">
                        <Button
                          style={{
                            backgroundColor: "#464646",
                            borderColor: "#464646",
                            width:'100%'
                          }}
                          onClick={() => formik.handleSubmit()}
                        >
                            
                          Sign Up
                        </Button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7">
                    <Image
                      src={img}
                      className="img-fluid"
                      alt="Sample image"
                      style={{ height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
