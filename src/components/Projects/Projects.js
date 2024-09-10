import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import eeg from "../../Assets/Projects/eeg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="SustEarn"
              description=" E-commerece Sustainable App, an API solution, for accurate carbon footprint calculations for the company's e-commerce product leveraging advanced LLMs and Chain-of-Thought prompt engineering strategies."
              ghLink="https://github.com/Lakshyasandhu/SustEarn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="Emotion Detection System using EEG"
              description="Created an innovative real-time emotion detection framework using EEG headgear, processing 500+ brainwave signals per session; the resulting algorithms provided actionable data for user engagement strategies, enhancing overall product effectiveness"
              ghLink="https://github.com/Lakshyasandhu/EEG_EMOTION_DETECTION"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Krishi seva"
              description="Developed a backend algorithm that identified and connected farmers with profitable marketplaces, leading to an 60% increase in average farm revenue. Implemented disease identification tools using ML"
              ghLink="https://github.com/Lakshyasandhu/Krishi_seva-"
            />
          </Col>

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
