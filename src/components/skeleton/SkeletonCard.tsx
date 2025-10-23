import React from "react";
import { Card, Col, Placeholder } from "react-bootstrap";

export default function SkeletonCard() {
  return (
    <Col md={3} className="mb-4">
      <Card>
        <div style={{ height: "200px", backgroundColor: "#e9ecef" }} />
        <Card.Body>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={8} />
          </Placeholder>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={5} />
          </Placeholder>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={6} /> <Placeholder xs={4} />
          </Placeholder>
        </Card.Body>
      </Card>
    </Col>
  );
}
