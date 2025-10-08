import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  IParamsGetProduct,
  IProduct,
} from "../../../interface/products.interface";
import { deleteProduct, getProducts } from "../productsAPI";
import styled from "styled-components";
import {
  DFlex,
  DFlexALignCenter,
  DFlexColumn,
  DFlexJustifyBetween,
} from "../../../styled/flex.styled";
import { P14Regular, P18High, TitleNews } from "../../../styled/text.styled";
import ProductsForm from "./ProductsForm";

function ProductsList() {
  const navigate = useNavigate();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [show, setShow] = useState(false);
  const [dataSelected, setDataSelected] = useState<IProduct>();
  const triggerGet = useRef<number>(0);

  const [modalDelete, setModalDelete] = useState<any>({
    show: false,
    data: null,
  });

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setDataSelected({ title: "", description: "", price: 10 });
    setShow(true);
  };

  useEffect(() => {
    const params: IParamsGetProduct = {
      skip: 0,
      limit: 10,
      sortBy: "id",
      order: "asc",
    };
    getProductData(params);

    return () => {
      console.log("clean");
    };
  }, [triggerGet]);

  const getProductData = async (params: IParamsGetProduct) => {
    try {
      const request: any = await getProducts({ params: params });
      setProducts(request.products);
    } catch (error) {
      console.log(error);
    }
  };

  const callbackSubmit = (values: IProduct) => {
    triggerGet.current = Date.now();
    handleClose();
  };

  const onClickEdit = (item: IProduct) => {
    setDataSelected(item);
    setShow(true);
  };

  const handleCloseModalDelete = () => {
    setModalDelete((prevState: any) => ({ ...prevState, show: false }));
  };

  const handleApplyConfirm = (type: "x" | "y") => {
    if (type === "x") {
      handleCloseModalDelete();
    } else {
      deleteProductById();
    }
  };

  const deleteProductById = async () => {
    try {
      const resp = await deleteProduct(modalDelete?.data?.id);
      console.log(resp);
      handleCloseModalDelete();
    } catch (error) {}
  };

  return (
    <>
      <Container className="mt-5">
        <div className="d-flex justify-content-between">
          <DFlexColumn className="mb-4">
            <P18High className="m-0 fw-bold">Daftar Product</P18High>
            <P14Regular className="m-0 text-muted">
              Lihat semua produk yang tersedia di inventaris.
            </P14Regular>
          </DFlexColumn>
          <DFlex className="gap-4">
            <Button onClick={handleShow}>Tambah Product</Button>
          </DFlex>
        </div>
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index: number) => (
              <React.Fragment key={product.id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>$ {product.price}</td>
                  <td className="d-flex gap-2">
                    <Button
                      variant="warning"
                      onClick={() => navigate(String(product?.id))}
                    >
                      Detail
                    </Button>
                    <Button variant="info" onClick={() => onClickEdit(product)}>
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() =>
                        setModalDelete({ show: true, data: product })
                      }
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <DFlexColumn className="w-100 gap-1">
            <DFlexJustifyBetween>
              <Modal.Title className="mb-0">Form Product</Modal.Title>
              <DFlexALignCenter
                className="px-2"
                onClick={handleClose}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-bold">X</span>
              </DFlexALignCenter>
            </DFlexJustifyBetween>
            <P14Regular className="m-0 text-muted text-start text-ellipsis">
              Masukkan detail produk untuk menambahkannya ke inventaris.
            </P14Regular>
          </DFlexColumn>
        </Modal.Header>
        <Modal.Body>
          <ProductsForm
            onClose={handleClose}
            callbackSubmit={callbackSubmit}
            dataSelected={dataSelected}
          />
        </Modal.Body>
      </Modal>
      <Modal show={modalDelete?.show} size="sm">
        <Modal.Header>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Apakah anda yakin?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleApplyConfirm("x")}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleApplyConfirm("y")}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductsList;

export const ContainerStyled = styled(Container)`
  width: 100%;
  background: transparent !important;
  padding: 32px 64px !important;
  margin: 0;
`;
