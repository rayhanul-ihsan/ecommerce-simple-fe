import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Form,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import LazyImage from "../../../components/LazyLoad/LazyImage";

export default function DetailProduct() {
  const { product: item } = useSelector((state: any) => state.product);
  const [quantity, setQuantity] = useState(item?.stok || 1);
  const [selectedImage, setSelectedImage] = useState(item?.image.split(",")[0]);

  const handleQuantity = (type: "plus" | "minus") => {
    if (type === "plus") setQuantity((prev: any) => prev + 1);
    if (type === "minus" && quantity > 1) setQuantity((prev: any) => prev - 1);
  };

  return (
    <Container className="py-4">
      <Row>
        {/* LEFT SIDE - Image & Gallery */}
        <Col md={5}>
          <Card className="border-0">
            <Card.Body>
              <LazyImage
                src={selectedImage}
                alt="Meja Makan"
                className="w-100 mb-3"
              />
              <div className="d-flex gap-2">
                {item?.image > 1 ? (
                  item?.images.map((img: string, i: number) => (
                    <Image
                      key={i}
                      src={img}
                      alt={`Thumbnail ${i}`}
                      thumbnail
                      onClick={() => setSelectedImage(img)}
                      className={`rounded cursor-pointer ${
                        selectedImage === img ? "border border-warning" : ""
                      }`}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                      }}
                    />
                  ))
                ) : (
                  <Image
                    src={item?.image}
                    alt="Thumbnail"
                    thumbnail
                    onClick={() => setSelectedImage(item?.image)}
                    className={`rounded cursor-pointer ${
                      selectedImage === item?.image
                        ? "border border-warning"
                        : ""
                    }`}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* RIGHT SIDE - Detail Product */}
        <Col md={7}>
          <Card className="">
            <Card.Body>
              <h4 className="fw-bold">{item?.name}</h4>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐☆ 4.5 • 30 Terjual
              </div>
              <h3 className="text-danger fw-bold mb-2">
                Rp {(item?.price).toLocaleString("id-ID")}
              </h3>
              <small className="text-muted d-block mb-3">
                Garansi Tiba: 4 - 6 September
              </small>

              {/* Quantity */}
              <div className="d-flex align-items-center mb-3">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => handleQuantity("minus")}
                >
                  -
                </Button>
                <Form.Control
                  value={quantity}
                  readOnly
                  className="mx-2 text-center"
                  style={{ width: "60px" }}
                />
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => handleQuantity("plus")}
                >
                  +
                </Button>
              </div>

              <Button variant="warning" className="w-100 fw-semibold">
                Beli Produk
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* DESKRIPSI PRODUK */}
      <Row className="mt-5">
        <Col md={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h5 className="fw-bold mb-3">Deskripsi Produk</h5>
              <p>{item?.description}</p>

              <p>
                Dengan ukuran ekstra besar 100m², meja ini sangat ideal untuk
                ruang makan keluarga besar, acara gathering, atau restoran yang
                ingin memberikan kesan eksklusif kepada tamunya. Permukaan meja
                yang luas memungkinkan penataan hidangan lebih leluasa,
                sementara finishing halusnya memberikan sentuhan elegan
                sekaligus mudah dibersihkan.
              </p>

              <h6 className="fw-bold mt-4">Spesifikasi Produk:</h6>
              <ul>
                <li>Material: 100% Kayu Jati Solid</li>
                <li>Ukuran: 100m² (custom ukuran dapat dipesan)</li>
                <li>Warna: Natural kayu jati dengan finishing glossy/matte</li>
                <li>Kapasitas: Hingga 12–16 orang</li>
                <li>Kelebihan: Tahan rayap, kuat, dan berkarakter alami</li>
              </ul>

              <h6 className="fw-bold mt-4">Kelebihan Produk:</h6>
              <ul>
                <li>Material premium, awet hingga puluhan tahun</li>
                <li>Desain elegan dan mewah</li>
                <li>Cocok untuk rumah, vila, atau restoran besar</li>
                <li>Permukaan meja luas dan mudah dibersihkan</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
