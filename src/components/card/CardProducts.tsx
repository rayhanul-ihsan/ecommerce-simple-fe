import React from "react";
import { Card, Col } from "react-bootstrap";
import { P14Regular, P16High, P18High } from "../../styled/text.styled";
import { DFlex } from "../../styled/flex.styled";
interface Props {
  item: any;
  onclick?: any;
}

export default function CardProducts({ item, onclick }: Props) {
  return (
    <Col md={3} key={item?._id}>
      <Card onClick={onclick} style={{ cursor: "pointer" }}>
        <Card.Img
          variant="top"
          src={item?.image}
          width={"304px"}
          height={"180px"}
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <P16High>{item?.name}</P16High>
          <P18High style={{ color: "var(--primary)" }}>
            Rp. {(item?.price).toLocaleString("id-ID")}
          </P18High>
          <DFlex>
            <img src="/Star.svg" alt="star" />
            <P14Regular className="m-0">4.7</P14Regular>
            <div>•</div>
            <P14Regular className="m-0">100 Terjual</P14Regular>
          </DFlex>
        </Card.Body>
      </Card>
    </Col>
  );
}
