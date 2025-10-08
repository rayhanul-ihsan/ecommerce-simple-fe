import React, { useRef } from "react";
import { Button, Card } from "react-bootstrap";
import styled from "styled-components";
import LazyImage from "../LazyLoad/LazyImage";

export default function FormUpload() {
  const fileInputRef: any = useRef(null);

  return (
    <>
      <CardCustom className="p-0" onClick={() => fileInputRef.current.click()}>
        <CardBody>
          <LazyImage src="/IconUpload.svg" width={50} />
        </CardBody>
      </CardCustom>
      <ButtonCustom type="button" onClick={() => fileInputRef.current.click()}>
        <LazyImage
          src="/UploadSimple.svg"
          width={16}
          className="me-2"
          style={{ filter: "invert(0.5)" }}
        />
        Unggah Gambar
      </ButtonCustom>
      <input type="file" ref={fileInputRef} style={{ display: "none" }} />
    </>
  );
}
const ButtonCustom = styled.button`
  width: 100%;
  background: transparent !important;
  border: 1.5px solid #c5c8cc !important;
  border-radius: 0.5rem !important;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const CardCustom = styled(Card)`
  width: 100%;
  border: 1.5px dashed #f7f8fa;
  border-radius: 0.5rem;
  min-height: 160px;
  cursor: pointer;
  margin-bottom: 1rem;
`;
const CardBody = styled(Card.Body)`
  background-color: #f7f8fa;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
