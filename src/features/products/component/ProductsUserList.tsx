import React, { useEffect, useMemo, useState } from "react";
import { IProduct } from "../../../interface/products.interface";
import { getProducts } from "../productsAPI";
import { Col, Navbar, Row } from "react-bootstrap";
import Header from "../../../modules/AppLayout/header/Header";
import CardProducts from "../../../components/card/CardProducts";
import SkeletonCard from "../../../components/skeleton/SkeletonCard";
import { ContainerStyled } from "../../../styled/productList.styled";
import {
  DFlexColumn,
  DFlexJustifyBetween,
  DFlexJustifyEnd,
} from "../../../styled/flex.styled";
import { P12Regular, P18HighBold } from "../../../styled/text.styled";
import FiSearchIcon from "../../../assets/icons/FiSearchIcon";
import styled from "styled-components";
import LazyImage from "../../../components/LazyLoad/LazyImage";
import DropdownAvatar from "../../../components/dropdown/DropdownAvatar";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { setProduct } from "../../../store/reducers/product";
import { useNavigate } from "react-router-dom";

export default function ProductsUserList() {
  const navigate = useNavigate();
  const [dataProducts, setDataProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();
  const [params, setParams] = useState({
    search: "",
    search_by: ["name"],
    operrator: "and",
    orderBy: "createdAt",
    order: "desc",
    page: 1,
    size: 8,
  });

  const debouncedSearch = useMemo(
    () =>
      _.debounce((query) => {
        setParams((prev: any) => ({
          ...prev,
          search: query,
          page: 1,
        }));
      }, 500),
    []
  );

  const handleDetail = (item: IProduct) => {
    dispatch(setProduct(item));
    navigate("/products/detail/" + item?._id);
    console.log({ item });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const getDataProducts = async () => {
    setLoading(true);
    try {
      const response: any = await getProducts({ params });
      setDataProducts(response?.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataProducts();
  }, [params]);

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HeaderWrapper>
          <DFlexJustifyBetween className="w-100">
            <Navbar.Brand href="products/list">
              <LazyImage src="/logo.svg" width={100} />
            </Navbar.Brand>

            <DropdownAvatar />
          </DFlexJustifyBetween>
        </HeaderWrapper>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              marginBottom: "8px",
            }}
          >
            Cari Furnitur Impian
          </h1>
          <p style={{ fontSize: "16px", marginBottom: "32px", opacity: 0.9 }}>
            Kami menyediakan berbagai furnitur yang bagus dan elegan untuk rumah
            anda
          </p>

          {/* Search Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "white",
              borderRadius: "50px",
              padding: "4px 4px 4px 24px",
              width: "600px",
              maxWidth: "90vw",
            }}
          >
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "16px",
                color: "#333",
              }}
            />
            <button
              style={{
                background: "#ff6b35",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <FiSearchIcon color="white" />
            </button>
          </div>
        </div>
      </div>
      <ContainerStyled className="mt-2">
        <Row className="mb-3">
          <Col md={6}>
            <DFlexColumn>
              <P18HighBold className="m-0">Rekomendasi</P18HighBold>
              <P12Regular className="m-0">
                Produk - produk pilihan terbaik dari kami
              </P12Regular>
            </DFlexColumn>
          </Col>
          <Col md={6}>
            <DFlexJustifyEnd>
              <div
                style={{
                  border: "1px solid #dfdfdf",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Lihat semua produk
              </div>
            </DFlexJustifyEnd>
          </Col>
        </Row>

        <Row>
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : dataProducts?.map((item: IProduct) => (
                <CardProducts
                  key={item._id}
                  item={item}
                  onclick={() => handleDetail(item)}
                />
              ))}
        </Row>
      </ContainerStyled>
    </>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  background: transparent !important;
  /* border-bottom: 1px solid #f1f1f1; */
  padding: 0 64px;
  top: 0;
  min-height: 64px;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 10;
`;
