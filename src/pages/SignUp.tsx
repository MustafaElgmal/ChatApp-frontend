import { useFormik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import Header from "../components/Header";
import { createUser } from "../utiles/apis";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      ImgUrl: "https://review2020.s3.amazonaws.com/1651037192205moo.jpg",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("FirstName is required!"),
      lastName: Yup.string().required("LastName is required!"),
      email: Yup.string()
        .email("Email is not vaild!")
        .required("Email is required!"),
      password: Yup.string().required("Password is required!"),
      ImgUrl: Yup.string().url("Please Enter Url!"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const res = await createUser(values, dispatch);

      if (res?.status === 201) {
        formik.resetForm();
        navigate("/");
      }
    },
  });
  return (
    <section>
      <Header name={"Sign up"} />
      <div
        className="row m-0"
        style={{ background: "#F8F9FA", height: "calc(100vh - 60px)" }}
      >
        <div className="col-md-6 col-lg-6 order-2 order-lg-1 d-flex  justify-content-center align-items-center">
          <form className=" w-50 mt-3">
            <div>
              <div className="form-outline mb-0">
                <label style={{ color: "#686868" }}>First Name</label>
                <input
                  type="text"
                  id="form3Example1c"
                  className="form-control w-100"
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

            <div className="">
              <div className="form-outline  mb-0">
                <label style={{ color: "#686868" }}>last Name</label>
                <input
                  type="text"
                  id="form3Example2c"
                  className="form-control w-100"
                  name="lastName"
                  value={formik.values.lastName}
                  style={{ width: "50%" }}
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

            <div className="">
              <div className="form-outline  mb-0">
                <label style={{ color: "#686868" }}>Email</label>

                <input
                  type="email"
                  id="form3Example3c"
                  className="form-control w-100"
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

            <div className="mb-4">
              <div className="form-outline  mb-0">
                <label style={{ color: "#686868" }}>Password</label>
                <input
                  type="password"
                  id="form3Example4c"
                  className="form-control w-100"
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

            <div className="mb-4">
              <div className="form-outline  mb-0">
                <label style={{ color: "#686868" }}>ImgUrl</label>
                <input
                  type="ImgUrl"
                  id="form3Example5c"
                  className="form-control w-100"
                  name="ImgUrl"
                  value={formik.values.ImgUrl}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <p className="text-danger">
                  {formik.errors.ImgUrl && formik.touched.ImgUrl
                    ? formik.errors.ImgUrl
                    : null}
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-center mb-3 mb-lg-4">
              <Button
                style={{
                  backgroundColor: "#464646",
                  borderColor: "#464646",
                  width: "100%",
                }}
                onClick={() => formik.handleSubmit()}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
        <div className="col-md-6 col-lg-6 imgback"></div>
      </div>
    </section>
  );
};

export default SignUp;
