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

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
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
            <Form>
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
                <Link to="/products/list">
                <Button variant="primary" type="submit" className="w-100">Sign In</Button>
                </Link>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </DFlexJustifyCenter>
    </>
  );
}
