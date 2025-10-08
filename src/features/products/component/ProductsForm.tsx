import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { createProduct, updateProduct } from "../productsAPI";
import { IProduct } from "../../../interface/products.interface";
import {
  P12Regular,
  P14Medium,
  P16High,
  P18High,
  P18HighBold,
} from "../../../styled/text.styled";
import FormInputControl from "../../../components/input/FormInputControl";
import {
  DFlex,
  DFlexColumn,
  DFlexJustifyEnd,
} from "../../../styled/flex.styled";
import SelectStaticNonForm from "../../../components/select/SelectStaticNonForm";
import FormSelectControl from "../../../components/input/FormSelectControl";
import styled from "styled-components";
import FormUpload from "../../../components/input/FormUpload";
import ModalSucces from "../../../components/modal/ModalSucces";

interface Props {
  callbackSubmit: (value: any) => void;
  dataSelected?: IProduct;
  onClose: () => void;
}

function ProductsForm({ callbackSubmit, dataSelected, onClose }: Props) {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().min(1),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: yupResolver(validationSchema) as any,
    defaultValues: { title: "", description: "", price: 10 },
  });

  useEffect(() => {
    if (dataSelected) reset(dataSelected);
  }, [dataSelected]);

  const handleSubmitForm = (valueForm: IProduct) => {
    console.log(valueForm);
    addProduct(valueForm);
  };

  const addProduct = async (product: IProduct) => {
    try {
      const request = product?.id
        ? await updateProduct(Number(product?.id), product)
        : await createProduct(product);
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
            <FormUpload />
          </Col>
          <Col md={8}>
            <Row className="g-4">
              <Col md={6}>
                <FormInputControl
                  labelName="Nama Produk"
                  placeholder="Masukkan Nama Produk"
                  // register={register("name")}
                  type="text"
                  className="mb-0"
                  // isInvalid={errors.name}
                  // message={errors.name?.message}
                />
              </Col>
              <Col md={6}>
                <FormSelectControl
                  labelName="Kategori Produk"
                  placeholder="Pilih Kategori"
                  // register={register("category")}
                  // isInvalid={errors.category}
                  // message={errors.category?.message}
                  options={[
                    { label: "Elektronik", value: "elektronik" },
                    { label: "Fashion", value: "fashion" },
                    { label: "Makanan", value: "makanan" },
                  ]}
                />
              </Col>
              <Col md={12}>
                <FormInputControl
                  labelName="Deskripsi"
                  placeholder="Masukkan Deskripsi Produk"
                  // register={register("name")}
                  type="text"
                  as={"textarea"}
                  className="mb-0"
                  // isInvalid={errors.name}
                  // message={errors.name?.message}
                />
              </Col>
              <Col md={6}>
                <FormInputControl
                  labelName="Harga Satuan"
                  // register={register("name")}
                  type="number"
                  className="mb-0"
                  defaultValue={0}
                  // isInvalid={errors.name}
                  // message={errors.name?.message}
                />
              </Col>
              <Col md={6}>
                <Row className="g-2">
                  <Col md={7}>
                    <FormInputControl
                      labelName="Stok Awal"
                      // register={register("name")}
                      type="number"
                      className="mb-0"
                      defaultValue={0}
                      // isInvalid={errors.name}
                      // message={errors.name?.message}
                    />
                  </Col>
                  <Col md={5}>
                    <FormSelectControl
                      // register={register("category")}
                      // isInvalid={errors.category}
                      // message={errors.category?.message}
                      version="simple"
                      style={{ marginTop: "32px" }}
                      defaultValue={{ label: "unit", value: "unit" }}
                      options={[
                        { label: "Unit", value: "unit" },
                        { label: "Pcs", value: "pcs" },
                        { label: "Box", value: "box" },
                      ]}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <Card className="p-3">
                  <Row>
                    <Col md={8}>
                      <DFlexColumn className="gap-1">
                        <P16High className="m-0">Status Produk</P16High>
                        <P12Regular className="m-0 text-muted">
                          Sistem akan menandai produk sebagai “Menipis” secara
                          otomatis jika stoknya mendekati habis.
                        </P12Regular>
                      </DFlexColumn>
                    </Col>
                    <Col md={4}>
                      <DFlex style={{ marginTop: "18px" }}>
                        <P14Medium className="m-0">Nonaktif</P14Medium>
                        <SwitchStyled
                          type="switch"
                          id="custom-switch"
                          // {...register("status")}
                          // defaultChecked={dataSelected?.status === "active" ? true : false}
                          className="ms-2"
                        />
                      </DFlex>
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
            {dataSelected?.id ? "Update" : "Add New"} Product
          </Button>
        </DFlexJustifyEnd>
      </Form>
    </>
  );
}

export default ProductsForm;

const SwitchStyled = styled(Form.Check)`
  cursor: pointer;
  .form-check-input {
    width: 3rem !important;
    height: 1.5rem !important;
  }
`;
