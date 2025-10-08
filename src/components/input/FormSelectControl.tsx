import React from "react";
import { Form } from "react-bootstrap";

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  labelName?: string;
  options: Option[];
  placeholder?: string;
  register?: any;
  isInvalid?: boolean;
  message?: string;
  [x: string]: any;
  defaultValue?: any;
  className?: string;
  version?: "default" | "simple";
  style?: any;
}

export default function FormSelectControl({
  labelName,
  options,
  placeholder,
  register,
  isInvalid,
  message,
  defaultValue,
  className = "",
  version = "default",
    style,
  ...rest
}: Props) {
  return (
    <>
      {version === "default" ? (
        <Form.Group className={`${className}`}>
          {labelName && <Form.Label>{labelName}</Form.Label>}
          <Form.Select
            {...register}
            isInvalid={isInvalid}
            {...rest}
            defaultValue={defaultValue}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((opt, idx) => (
              <option key={idx} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {isInvalid && (
            <Form.Control.Feedback type="invalid">
              {message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
      ) : (
        <Form.Group className={`${className}`} style={style}>
          <Form.Select
            {...register}
            isInvalid={isInvalid}
            {...rest}
            defaultValue={defaultValue}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((opt, idx) => (
              <option key={idx} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {isInvalid && (
            <Form.Control.Feedback type="invalid">
              {message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
      )}
    </>
  );
}
