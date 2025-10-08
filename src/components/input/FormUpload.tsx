import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import LazyImage from "../LazyLoad/LazyImage";

export default function FormUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Preview gambar
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload ke API
    await uploadImage(file);
  };

  const uploadImage = async (file: File) => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      console.log("Upload success:", data);
      // Jika API mengembalikan URL gambar, gunakan itu
      // setImageUrl(data.imageUrl);
    } catch (error) {
      console.error("Upload error:", error);
      // Handle error (tampilkan notifikasi, dll)
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = () => {
    setImageUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      {imageUrl ? (
        // Tampilan setelah gambar di-upload
        <>
          <ImagePreviewCard>
            <ImagePreview src={imageUrl} alt="Preview" />
          </ImagePreviewCard>
          <ButtonCustom type="button" onClick={handleClickUpload}>
            <LazyImage
              src="/UploadSimple.svg"
              width={16}
              className="me-2"
              style={{ filter: "invert(0.5)" }}
            />
            Ganti Gambar
          </ButtonCustom>
          <DeleteButton type="button" onClick={handleDelete}>
            Hapus
          </DeleteButton>
        </>
      ) : (
        // Tampilan awal sebelum upload
        <>
          <CardCustom onClick={handleClickUpload}>
            <CardBody>
              <LazyImage src="/IconUpload.svg" width={50} />
            </CardBody>
          </CardCustom>
          <ButtonCustom type="button" onClick={handleClickUpload}>
            <LazyImage
              src="/UploadSimple.svg"
              width={16}
              className="me-2"
              style={{ filter: "invert(0.5)" }}
            />
            Unggah Gambar
          </ButtonCustom>
        </>
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
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
  margin-bottom: 0.5rem;
  cursor: pointer;
  
  &:hover {
    background: #f7f8fa !important;
  }
`;

const DeleteButton = styled.button`
  width: 100%;
  background: transparent !important;
  border: none !important;
  color: #dc3545;
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    color: #bb2d3b;
    text-decoration: underline;
  }
`;

const CardCustom = styled(Card)`
  width: 100%;
  border: 1.5px dashed #c5c8cc;
  border-radius: 0.5rem;
  min-height: 160px;
  cursor: pointer;
  margin-bottom: 1rem;
  
  &:hover {
    border-color: #6c757d;
  }
`;

const CardBody = styled(Card.Body)`
  background-color: #f7f8fa;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImagePreviewCard = styled.div`
  width: 100%;
  border: 1.5px solid #c5c8cc;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: #f7f8fa;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  max-height: 300px;
`;