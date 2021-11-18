import React from 'react';

import {
  Card,
  CardBody,
  Badge,
  Col,
  Row,
  Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-darker shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img src={prof.avatar_url} style={{ width: "200px" }} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4" />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">
                Reach Out to me!
              </h2>
              <p className="text-white mt-3">
                {prof.bio}
              </p>
              <h5 className="text-info">
                S Narsimha Reddy (Call me "NA")
              </h5>
              <Badge color="info" className="mr-1">
                Full Stack Developer
              </Badge>
              <p style={{marginTop:'10px'}} className="text-white">snarsimhareddy98@gmail.com</p>
              <p className="text-white">+91 7989412625</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                {prof.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
}

export default GithubProfileCard;