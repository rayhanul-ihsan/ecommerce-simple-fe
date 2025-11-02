import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, Card, Col, Form, Nav, Row } from "react-bootstrap";
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
  DFlexJustifyBetween,
  DFlexJustifyEnd,
  DFlexJustifyStart,
} from "../../../styled/flex.styled";
import SelectStaticNonForm from "../../../components/select/SelectStaticNonForm";
import FormSelectControl from "../../../components/input/FormSelectControl";
import styled from "styled-components";
import FormUpload, {
  ImagePreview,
  ImagePreviewCard,
} from "../../../components/input/FormUpload";
import ModalSucces from "../../../components/modal/ModalSucces";
import { omit } from "lodash";
import { StatusBadge } from "../../../styled/productList.styled";
import { data } from "react-router-dom";

interface Props {
  callbackSubmit: (value: any) => void;
  dataSelected?: IProduct;
  onClose: () => void;
  onDetail: boolean;
  onEdit: boolean;
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Title name is required"),
  category: Yup.string().required("Category is required"),
  stok: Yup.number().min(1),
  price: Yup.number().min(1),
});

function ProductsForm({
  callbackSubmit,
  dataSelected,
  onClose,
  onDetail,
  onEdit,
}: Props) {
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
  const [updateStok, setUpdateStok] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"penambahan" | "pengurangan">(
    "penambahan"
  );
  const [alertType, setAlertType] = useState<"success" | "danger">("success");
  const [showAlert, setShowAlert] = useState<boolean>(false);
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
  const handleUpdateStok = () => {
    setShowAlert(true);
    setUpdateStok(false);
  };

  const addProduct = async (product: IProduct) => {
    const params = { ...product, image: result?.image_url };
    try {
      const request = product?._id
        ? await updateProduct(String(product?._id), params)
        : await createProduct(params);
      callbackSubmit(request);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        {dataSelected && onDetail === true && !onEdit ? (
          <Row>
            <Col md={4}>
              <ImagePreviewCard>
                <ImagePreview src={dataSelected?.image} alt="Preview" />
              </ImagePreviewCard>
            </Col>
            <Col md={8}>
              <Row className="g-4">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="text-muted">Nama Produk</Form.Label>
                    <P16High>{dataSelected?.name}</P16High>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="text-muted">
                      Kategori Produk
                    </Form.Label>
                    <P16High>{dataSelected?.category}</P16High>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="text-muted">
                      Deskripsi Produk
                    </Form.Label>
                    <P16High>{dataSelected?.description}</P16High>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="text-muted">Harga Satuan</Form.Label>
                    <P16High>
                      Rp. {(dataSelected?.price).toLocaleString("id-ID")}
                    </P16High>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Card
                    style={{
                      border: "1px solid #F4F7FA",
                      borderRadius: "12px",
                    }}
                  >
                    <Card.Body
                      style={{
                        backgroundColor: "#F4F7FA",
                        padding: "12px 16px",
                        border: "1px solid #F4F7FA",
                        borderRadius: "12px",
                      }}
                    >
                      <Row className="g-2">
                        <Col md={7}>
                          <Form.Group>
                            <Form.Label className="text-muted">
                              Stok Saat ini
                            </Form.Label>
                            <P16High className="m-0">
                              {dataSelected?.stok} {dataSelected?.satuan}
                            </P16High>
                          </Form.Group>
                        </Col>
                        <Col md={5}>
                          <DFlexJustifyEnd
                            onClick={() => setUpdateStok(true)}
                            style={{ cursor: "pointer", marginTop: "1rem" }}
                          >
                            {updateStok === false && (
                              <p className="text-primary mb-0">Perbarui</p>
                            )}
                          </DFlexJustifyEnd>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <DFlexColumn className="gap-2">
                      <Form.Label className="text-muted mb-0">
                        Status Produk
                      </Form.Label>
                      <div>
                        <StatusBadge
                          status={dataSelected.status ? "aktif" : "nonaktif"}
                        >
                          {dataSelected.status ? (
                            <img src="/check.svg" alt="check" />
                          ) : (
                            <img src="/check-abu.svg" alt="check" />
                          )}

                          {dataSelected.status ? "Aktif" : "Nonaktif"}
                        </StatusBadge>
                      </div>
                    </DFlexColumn>
                  </Form.Group>
                </Col>
                {updateStok === true && (
                  <Col md={12}>
                    <Card>
                      <Card.Body>
                        <Row className="g-2">
                          <Col md={6}>
                            {activeTab === "penambahan" && (
                              <FormInputControl
                                labelName="Update Stok"
                                required
                                register={register("stok")}
                                isInvalid={errors.stok}
                                message={errors.stok?.message}
                                type="number"
                                className="mb-0"
                                defaultValue={dataSelected?.stok}
                              />
                            )}
                            {activeTab === "pengurangan" && (
                              <FormInputControl
                                labelName="Update Stok"
                                required
                                register={register("stok")}
                                isInvalid={errors.stok}
                                message={errors.stok?.message}
                                type="number"
                                className="mb-0"
                                defaultValue={dataSelected?.stok}
                              />
                            )}
                          </Col>
                          <Col md={6}>
                            <TabWrapper>
                              <TabsItem
                                className={
                                  activeTab === "penambahan" ? "active" : ""
                                }
                                onClick={() => setActiveTab("penambahan")}
                              >
                                Penambahan
                              </TabsItem>
                              <TabsItem
                                className={
                                  activeTab === "pengurangan" ? "active" : ""
                                }
                                onClick={() => setActiveTab("pengurangan")}
                              >
                                Pengurangan
                              </TabsItem>
                            </TabWrapper>
                          </Col>
                          <Col md={12}>
                            <DFlexJustifyStart>
                              <Button
                                variant="otline-secondary"
                                type="button"
                                onClick={() => setUpdateStok(false)}
                              >
                                Batal
                              </Button>
                              <Button
                                variant="primary"
                                type="button"
                                onClick={handleUpdateStok}
                              >
                                Update
                              </Button>
                            </DFlexJustifyStart>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                )}
                {showAlert && (
                  <Col md={12}>
                    <Alert variant={alertType}>
                      <DFlexJustifyBetween className={`text-${alertType}`}>
                        <DFlex
                          style={{ gap: "0.5333rem" }}
                          className={`text-${alertType}`}
                        >
                          {alertType === "success" ? (
                            <img src="/check.svg" alt="check" />
                          ) : (
                            <img src="/check-abu.svg" alt="check" />
                          )}
                          {alertType === "success"
                            ? "Stok berhasil diperbarui!"
                            : "Gagal memperbarui stok!"}
                        </DFlex>
                        <div
                          onClick={() => setShowAlert(false)}
                          style={{ cursor: "pointer" }}
                        >
                          X
                        </div>
                      </DFlexJustifyBetween>
                    </Alert>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        ) : dataSelected && onEdit === true && !onDetail ? (
          <Row>
            <Col md={4}>
              <FormUpload
                result={result}
                setResult={setResult}
                defaultImage={dataSelected?.image || ""}
              />
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
                    labelName="Deskripsi Produk"
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
                          { label: "Set", value: "set" },
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
        ) : (
          <Row>
            <Col md={4}>
              <FormUpload
                result={result}
                setResult={setResult}
                // defaultImage={dataSelected?.image || ""}
              />
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
                    labelName="Deskripsi Produk"
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
                          { label: "Set", value: "set" },
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
        )}

        <DFlexJustifyEnd className="mt-4 gap-3">
          <Button variant="outline-secondary" type="button" onClick={onClose}>
            Batal
          </Button>
          <Button type="submit">
            {dataSelected?._id ? "Update" : "Add New"} Product
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
const TabWrapper = styled.div`
  width: 100%;
  margin-top: 1.9rem;
  display: flex;
  padding: 0.3rem 0.26667rem;
  align-items: center;
  border-radius: 0.66667rem;
  background: #f5f7fa;
  height: fit-content;
`;

const TabsItem = styled.div`
  display: flex;
  padding: 0.3rem 0.56rem;
  align-items: center;
  border-radius: 0.66667rem;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #5b5d63;
  }
  &.active {
    background: #ffffff;
    color: #5b5d63;
  }
`;
