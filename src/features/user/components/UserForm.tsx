import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { P12Regular, P14Medium, P16High } from "../../../styled/text.styled";
import FormInputControl from "../../../components/input/FormInputControl";
import { DFlexColumn, DFlexJustifyEnd } from "../../../styled/flex.styled";
import styled from "styled-components";
import FormUpload from "../../../components/input/FormUpload";
import { IUser } from "../../../interface/user.interface";
import { createUser, updateUser } from "../UserAPI";
import { omit } from "lodash";
import FormSelectControl from "../../../components/input/FormSelectControl";

interface Props {
  callbackSubmit: (value: any) => void;
  dataSelected?: IUser;
  onClose: () => void;
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username wajib diisi"),
  email: Yup.string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),
  password: Yup.string()
    .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Konfirmasi password tidak cocok")
    .required("Konfirmasi password wajib diisi"),
  role: Yup.string().required("Role wajib diisi"),
});

function UserForm({ callbackSubmit, dataSelected, onClose }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IUser & { confirmPassword?: string }>({
    resolver: yupResolver(validationSchema) as any,
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
  });

  const [result, setResult] = useState<any>();

  const watchStatus = watch("status");

  useEffect(() => {
    if (dataSelected) reset(dataSelected);
  }, [dataSelected]);

  const handleSubmitForm = (valueForm: IUser) => {
    console.log(valueForm);
    addUser(valueForm);
  };

  const addUser = async (user: IUser) => {
    const params = { ...user, image: result?.image_url };
    const finalParams = omit(params, ["confirmPassword"]);
    try {
      const request = finalParams?._id
        ? await updateUser(Number(finalParams?._id), finalParams as IUser)
        : await createUser(finalParams as IUser);
      callbackSubmit(request);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Row>
          <Col md={4}>
            <FormUpload result={result} setResult={setResult} />
          </Col>
          <Col md={8}>
            <Row className="g-4">
              <Col md={6}>
                <FormInputControl
                  labelName="Nama User"
                  placeholder="Masukkan Nama User"
                  register={register("username")}
                  isInvalid={!!errors.username}
                  message={errors.username?.message}
                  type="text"
                  required
                />
              </Col>
              <Col md={6}>
                <FormInputControl
                  labelName="No Telepon"
                  placeholder="Masukkan No Telepon"
                  register={register("phone")}
                  isInvalid={!!errors.phone}
                  message={errors.phone?.message}
                  type="number"
                />
              </Col>
              <Col md={6}>
                <FormInputControl
                  labelName="Email"
                  placeholder="Masukkan Email"
                  register={register("email")}
                  isInvalid={!!errors.email}
                  message={errors.email?.message}
                  type="text"
                  required
                />
              </Col>
              <Col md={6}>
                <FormSelectControl
                  labelName="Role"
                  placeholder="Pilih Role"
                  register={register("role")}
                  required
                  options={[
                    { label: "Admin", value: "admin" },
                    { label: "User", value: "user" },
                  ]}
                />
              </Col>
              <Col md={6}>
                <FormInputControl
                  labelName="Password"
                  placeholder="Masukkan Password"
                  register={register("password")}
                  isInvalid={!!errors.password}
                  message={errors.password?.message}
                  type="password"
                  required
                />
              </Col>
              <Col md={6}>
                <FormInputControl
                  labelName="Konfirmasi Password"
                  placeholder="Masukkan Ulang Password"
                  register={register("confirmPassword")}
                  isInvalid={!!errors.confirmPassword}
                  message={errors.confirmPassword?.message}
                  type="password"
                  required
                />
              </Col>

              <Col md={12}>
                <Card className="p-3">
                  <Row>
                    <Col md={8}>
                      <DFlexColumn className="gap-1">
                        <P16High className="m-0">Status User</P16High>
                        <P12Regular className="m-0 text-muted">
                          Jika user telah lama tidak aktif anda bisa
                          menonaktifkan status user secara manual
                        </P12Regular>
                      </DFlexColumn>
                    </Col>
                    <Col md={4}>
                      <DFlexJustifyEnd style={{ marginTop: "18px" }}>
                        {watchStatus ? (
                          <P14Medium className="m-0">Aktif</P14Medium>
                        ) : (
                          <P14Medium className="m-0">Nonaktif</P14Medium>
                        )}
                        <SwitchStyled
                          type="switch"
                          id="custom-switch"
                          {...register("status")}
                          className="ms-2"
                        />
                      </DFlexJustifyEnd>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <DFlexJustifyEnd className="mt-4 gap-3">
          <Button variant="outline-secondary" type="button" onClick={onClose}>
            Batal
          </Button>
          <Button type="submit">
            {dataSelected?._id ? "Update" : "Add New"} User
          </Button>
        </DFlexJustifyEnd>
      </Form>
    </>
  );
}

export default UserForm;

const SwitchStyled = styled(Form.Check)`
  cursor: pointer;
  .form-check-input {
    width: 3rem !important;
    height: 1.5rem !important;
  }
`;
