import React, { useState } from "react";
import { Form } from "react-bootstrap";
import FormInputControl from "./FormInputControl";
import { InputIcon } from "../../features/user/components/UserForm";
import EyeIcon from "../../assets/icons/EyeIcon";
import EyeOffIcon from "../../assets/icons/EyeOffIcon";
import RequiredInfo from "../Info/RequiredInfo";

interface Props {
  register: any;
  isInvalid?: any;
  message?: any;
  labelName?: any;
  placeholder?: any;
  readonly?: any;
  required?: any;
}

export default function FormInputPassword({
  required = false,
  readonly,
  labelName,
  placeholder,
  register,
  isInvalid,
  message,
}: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Form.Group className="mb-3 w-100">
      <Form.Label>
        {labelName} {required && <RequiredInfo />}
      </Form.Label>
      <div className="mb-3 position-relative">
        <FormInputControl
          className="fw-light w-100"
          type={showPassword ? "text" : "password"}
          register={register}
          isInvalid={isInvalid}
          formGroup={false}
          message={message}
          placeholder={placeholder}
          readOnly={readonly}
        />
        <InputIcon
          className="cursor-pointer pt-1 fw-light"
          style={{ right: "0", cursor: "pointer" }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </InputIcon>
      </div>
    </Form.Group>
  );
}
