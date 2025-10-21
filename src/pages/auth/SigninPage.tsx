import React from "react";
import { DFlexColumn, DFlexJustifyCenter } from "../../styled/flex.styled";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import LazyImage from "../../components/LazyLoad/LazyImage";
import { P12Regular, P14Regular } from "../../styled/text.styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputControl from "../../components/input/FormInputControl";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/reducers/auth";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export default function SigninPage() {
  const { loginUser } = useSelector((state: any) => state.auth);
  console.log({ loginUser });
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
  const LoginSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          username: username,
          password: password,
        }
      );
      console.log("data login", response.data);
      dispatch(login(response.data));
      if (response?.data?.data?.role === "admin") {
        window.location.href = "/products/list";
      } else {
        window.location.href = "/users";
      }
    } catch (error) {
      console.log(error);
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
                  <FormInputControl
                    labelName="Password"
                    placeholder="Input Password"
                    register={register("password")}
                    type="password"
                    isInvalid={errors.password}
                    message={errors.password?.message}
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
    </>
  );
}
