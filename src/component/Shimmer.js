import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Shimmer = () => {
  const RenderShimmerCards = () => {
    const shimmerCards = [];
    for (let i = 0; i < 12; i++) {
      shimmerCards.push(
        <Col className="p-3" key={i}>
          <div className="shimmer-cards">
            <div className="shimmer_immer"></div>
            <div className="shimmer-container"></div>
          </div>
        </Col>
      );
    }
    return shimmerCards;
  };
  return (
    <Container className="p-0" fluid={true}>
      <Row xs={1} sm={2} md={3} lg={4}>
        <RenderShimmerCards />
      </Row>
    </Container>
  );
};

export default Shimmer;
