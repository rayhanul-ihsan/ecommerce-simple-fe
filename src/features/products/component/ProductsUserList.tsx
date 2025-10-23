import React, { useEffect, useState } from "react";
import { IProduct } from "../../../interface/products.interface";
import { getProducts } from "../productsAPI";
import { Button, Col, Row } from "react-bootstrap";
import Header from "../../../modules/AppLayout/header/Header";
import CardProducts from "../../../components/card/CardProducts";
import { ContainerStyled } from "../../../styled/productList.styled";
import {
  DFlex,
  DFlexColumn,
  DFlexJustifyEnd,
} from "../../../styled/flex.styled";
import { P12Regular, P18HighBold } from "../../../styled/text.styled";

export default function ProductsUserList() {
  const [dataProducts, setDataProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [params, setParams] = useState({
    search: "",
    search_by: [],
    operrator: "and",
    orderBy: "createdAt",
    order: "desc",
    page: 1,
    size: 10,
  });

  const getDataProducts = async () => {
    setLoading(true);
    try {
      const response: any = getProducts({ params: params });
      setDataProducts(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDataProducts();
  }, [params]);

  return (
    <>
      <Header />
      <ContainerStyled className="mt-5">
        sss
        <Row>
          <Col md={6}>
            <DFlexColumn>
              <P18HighBold>Rekomendasi</P18HighBold>
              <P12Regular>Produk - produk pilihan terbaik dari kami</P12Regular>
            </DFlexColumn>
          </Col>
          <Col md={6}>
            <DFlexJustifyEnd>
              <div
                style={{
                  border: "1px solid #dfdfdff",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Lihat semua produk
              </div>
            </DFlexJustifyEnd>
          </Col>
          {dataProducts?.map((item: IProduct) => (
            <CardProducts item={item} />
          ))}
        </Row>
      </ContainerStyled>
    </>
  );
}
