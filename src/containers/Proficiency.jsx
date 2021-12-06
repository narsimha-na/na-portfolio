import React, { Fragment } from 'react';
import build from "../assets/lottie/build";

import { SkillBars } from "../portfolio";
import {
    Container,
    Row,
    UncontrolledTooltip,
    Col
} from "reactstrap";

import { Fade } from 'react-reveal';
import { skillsSection } from "../portfolio";
import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
    return (
        <Container className="section section-lg">
            <Fade bottom duration={1000} distance="40px">
                <Row>
                    <Col lg="6">
                        <h1 className="h1">Worked With</h1>
                        <div>
                            {
                                skillsSection.works.map(skill => {
                                    return <p key={skill}>{skill}</p>
                                })
                            }
                        </div>
                    </Col>
                    <Col lg="6">
                        <GreetingLottie animationData={build} />
                    </Col>
                </Row>
            </Fade>
        </Container>
    );
}

export default Proficiency;