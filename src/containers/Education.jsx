import React from "react";
import EdutionCard from "../components/EdutionCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";

const Edution = () => {
  return (
    <section className="section pb-0 shape shape-style-1 bg-gradient-dark my-5">
      <Container className="">
        <div className="d-flex px-3">
          <div>
            <div className="icon icon-lg icon-shape  shadow rounded-circle text-info">
              <i className="ni ni-books text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-4 text-info mt-2">Education</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          {educationInfo.map((info) => {
            return (
              <Col className="order-lg-1" lg="6">
                <EdutionCard education={info} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        ></svg>
      </div>
    </section>
  );
};

export default Edution;
