import React, { useState } from "react";
import { DFlexColumn, DFlexJustifyCenter } from "../../styled/flex.styled";
import {
  Button,
  Card,
  Col,
  Form,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import LazyImage from "../../components/LazyLoad/LazyImage";
import { P14Regular } from "../../styled/text.styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputControl from "../../components/input/FormInputControl";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/reducers/auth";
import FormInputPassword from "../../components/input/FormInputPassword";
import axios from "axios";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export default function SigninPage() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const username = watch("username");
  const password = watch("password");

  // 🔹 State untuk Toast
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState<"success" | "danger">(
    "danger"
  );

  const LoginSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          username,
          password,
        }
      );

      console.log("data login", response.data);
      dispatch(login(response.data));

      if (response.data?.status === true) {
        // setToastVariant("success");
        // setToastMessage(response.data?.message || "Login berhasil!");
        // setShowToast(true);
        // setTimeout(() => {
        // }, 1500);

        if (response?.data?.data?.role === "admin") {
          window.location.href = "/products";
        } else {
          window.location.href = "/products/list";
        }
      } else {
        setToastVariant("danger");
        setToastMessage(response.data?.message || "Login gagal!");
        setShowToast(true);
      }
    } catch (error: any) {
      console.log(error);
      setToastVariant("danger");
      setToastMessage(
        error.response?.data?.message || "Terjadi kesalahan pada server."
      );
      setShowToast(true);
    }
  };

  return (
    <>
      <DFlexJustifyCenter className="vh-100">
        <Card>
          <Card.Body className="text-start p-4" style={{ minWidth: 414 }}>
            <DFlexColumn className="d-flex flex-column gap-2 mb-8">
              <LazyImage src="/logo.svg" width={100} />
              <P14Regular className="text-muted">
                Enter your username and password correctly
              </P14Regular>
            </DFlexColumn>

            <Form onSubmit={handleSubmit(LoginSubmit)}>
              <Row className="g-4">
                <Col md={12}>
                  <FormInputControl
                    labelName="Username"
                    placeholder="Input Username"
                    register={register("username")}
                    type="text"
                    className="mb-0"
                    isInvalid={errors.username}
                    message={errors.username?.message}
                  />
                </Col>
                <Col md={12}>
                  <FormInputPassword
                    labelName="Password"
                    register={register("password")}
                    isInvalid={errors?.password as boolean | undefined}
                    message={errors?.password?.message}
                    placeholder="Input Password"
                    required={true}
                  />
                </Col>
                <Col md={12}>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign In
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </DFlexJustifyCenter>

      {/* 🔹 Toast Bootstrap */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          bg={toastVariant}
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
        >
          <Toast.Header style={{ backgroundColor: "#c3c7ca" }}>
            <strong className="me-auto">
              {toastVariant === "success" ? "Success" : "Error"}
            </strong>
          </Toast.Header>
          <Toast.Body
            className="text-white text-center fw-bold d-flex align-items-center justify-content-center text-italic"
            style={{ height: "4rem" }}
          >
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
