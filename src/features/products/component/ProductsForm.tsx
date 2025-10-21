import React, { useEffect, useState } from "react";
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
import { omit } from "lodash";

interface Props {
  callbackSubmit: (value: any) => void;
  dataSelected?: IProduct;
  onClose: () => void;
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Title name is required"),
  category: Yup.string().required("Category is required"),
  stok: Yup.number().min(1),
  price: Yup.number().min(1),
});

function ProductsForm({ callbackSubmit, dataSelected, onClose }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IProduct>({
    resolver: yupResolver(validationSchema) as any,
    defaultValues: { name: "", category: "", stok: 0, price: 0 },
  });

  const [result, setResult] = useState<any>();
  const watchStatus = watch("status");
  const watchUnit = watch("satuan");
  console.log({ watchStatus, watchUnit, result });
  useEffect(() => {
    if (dataSelected) reset(dataSelected);
  }, [dataSelected]);

  const handleSubmitForm = (valueForm: IProduct) => {
    console.log(valueForm);
    addProduct(valueForm);
  };

  const addProduct = async (product: IProduct) => {
    const params = { ...product, image: result?.image_url };
    try {
      const request = product?.id
        ? await updateProduct(Number(product?.id), params)
        : await createProduct(params);
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
                  labelName="Nama Produk"
                  placeholder="Masukkan Nama Produk"
                  register={register("name")}
                  type="text"
                  className="mb-0"
                  isInvalid={errors.name}
                  message={errors.name?.message}
                  required
                />
              </Col>
              <Col md={6}>
                <FormSelectControl
                  labelName="Kategori Produk"
                  placeholder="Pilih Kategori"
                  register={register("category")}
                  required
                  options={[
                    { label: "Elektronik", value: "elektronik" },
                    { label: "Fashion", value: "fashion" },
                    { label: "Makanan", value: "makanan" },
                    { label: "Furniture", value: "Furniture" },
                  ]}
                />
              </Col>
              <Col md={12}>
                <FormInputControl
                  labelName="Deskripsi"
                  placeholder="Masukkan Deskripsi Produk"
                  register={register("description")}
                  type="text"
                  as={"textarea"}
                  className="mb-0"
                  isInvalid={errors.description}
                  message={errors.description?.message}
                />
              </Col>
              <Col md={6}>
                <FormInputControl
                  labelName="Harga Satuan"
                  register={register("price")}
                  required
                  prefix="Rp"
                  type="number"
                  className="mb-0"
                  prefixClassName="fw-semibold"
                  defaultValue={0}
                  isInvalid={errors.price}
                  message={errors.price?.message}
                />
              </Col>
              <Col md={6}>
                <Row className="g-2">
                  <Col md={7}>
                    <FormInputControl
                      labelName="Stok Awal"
                      required
                      register={register("stok")}
                      isInvalid={errors.stok}
                      message={errors.stok?.message}
                      type="number"
                      className="mb-0"
                      defaultValue={0}
                    />
                  </Col>
                  <Col md={5}>
                    <FormSelectControl
                      register={register("satuan")}
                      version="simple"
                      style={{ marginTop: "32px" }}
                      defaultValue={{ label: "unit", value: "unit" }}
                      options={[
                        { label: "Unit", value: "unit" },
                        { label: "Box", value: "box" },
                        { label: "Item", value: "item" },
                        { label: "Pcs", value: "pcs" },
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
                      <DFlexJustifyEnd style={{ marginTop: "18px" }}>
                        {watchStatus === true ? (
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
              {watchStatus === true && (
                <Col md={12}>
                  <FormInputControl
                    labelName="Produk Menipis"
                    register={register("stokMenipis")}
                    isInvalid={errors.stokMenipis}
                    message={errors.stokMenipis?.message}
                    type="number"
                    className="mb-0"
                    defaultValue={0}
                    suffixClassName="text-capitalize"
                    suffix={watchUnit}
                  />
                </Col>
              )}
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
