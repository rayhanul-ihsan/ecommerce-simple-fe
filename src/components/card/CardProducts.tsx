import React from "react";
import { Card, Col } from "react-bootstrap";
import { P14Regular, P16High, P18High } from "../../styled/text.styled";
import { DFlex } from "../../styled/flex.styled";
interface Props {
  item: any;
}

export default function CardProducts({ item }: Props) {
  return (
    <Col md={3} key={item?._id}>
      <Card>
        <Card.Img variant="top" src={item?.image} />
        <Card.Body>
          <P16High>{item?.name}</P16High>
          <P18High>{item?.price}</P18High>
          <DFlex>
            <img src="/Star.svg" alt="star" />
            <P14Regular>4.7</P14Regular>
            <div className="w-1 h-1 bg-Border-Primary rounded-full" />
            <P14Regular>100 Terjual</P14Regular>
          </DFlex>
        </Card.Body>
      </Card>
    </Col>
  );
}
