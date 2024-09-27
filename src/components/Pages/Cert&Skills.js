
//--------------------------------------------------------------------------------------NEW CODE TO CHECK IF EVERYTHING IS PERFECT---------------------------------------------------------------------------------

// Cert_Skills.js

import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import styled from "styled-components";
import Techstack from "../TechStack";
import Toolstack from "../ToolStack";
import CertificationBox from "../CertificationBox";
import AWS from "./../../assets/Certifications/AWS.jpeg";
import udemy from "./../../assets/Certifications/Udemy.png";
import Spoken from "./../../assets/Certifications/spokenTutorial.jpeg";
import cisco from "./../../assets/Certifications/cisco.png"; // Ensure the path is correct


// Styled components
const H1 = styled.h1`
  color: white;
  font-size: 35px;
  position: relative;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  &:hover {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 20%;
      height: 5px;
      background: linear-gradient(to right, transparent 50%, #cd5ff8 50%);
      background-size: 200% 100%;
      background-position: right bottom;
      transition: background-position 0.3s ease-in-out;
      border-radius: 10px;
    }
  }
`;

const H2 = styled.h1`
  color: white;
  font-size: 2.1em;
  justify-content: center;
  text-align: center;
  padding-top: 10px !important;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  &:hover {
    color: lightblue;
  }
`;

const Rows = styled(Row)`
  margin-left: 190px;
  margin-block: 40px;
  display: flex;
  flex-direction: column;
  justify-content: left;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-block: 0;
    display: flex;
    flex-direction: column;
  }
`;

const Strongheading = styled.strong`
  margin-left: 5px;
  color: #cd5ff8;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ResponsiveContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  justify-content: center;
  align-items: flex-start; /* Align items at the top */
  gap: 20px; /* Space between boxes */
  margin: 0;
  padding: 1rem;
`;


const CertificationBoxWrapper = styled.div`
  flex: 1 1 calc(33.333% - 20px); /* Each box takes up a third of the row, minus spacing */
  max-width: calc(33.333% - 20px); /* Ensures the boxes don't get too wide */
  margin-bottom: 20px;
  min-width: 250px; /* Minimum width to prevent overlap */

  @media (max-width: 992px) {
    flex: 1 1 calc(50% - 20px); /* On medium screens (e.g., tablets), make the boxes half-width */
    max-width: calc(50% - 20px);
    min-width: 200px; /* Adjust to prevent overlap */
  }

  @media (max-width: 768px) {
    flex: 1 1 100%; /* On smaller screens (e.g., phones), make the boxes full-width */
    max-width: 100%;
    margin-bottom: 20px; /* Ensure space between items */
    min-width: 100%; /* Ensure no overlap */
  }
`;

const Addspace = styled.div`
  margin-bottom: 5px;
`;

function About() {
  return (
    <section>
      <Container>
        <Particle />
        <Container style={{ padding: 90 }}>
          <Rows>
            <H2>
              My
              <Strongheading> Certifications</Strongheading>...
            </H2>

            <ResponsiveContainer>
              <CertificationBoxWrapper>
                <CertificationBox
                  certName="AWS - Cloud Practitioner"
                  imgUrl={AWS}
                  certificateLink="https://drive.google.com/file/d/1HA0k_VA7aKKWEVf1uu6ONDy78GCGgZ80/view?usp=drive_link"
                />
              </CertificationBoxWrapper>
              <CertificationBoxWrapper>
                <CertificationBox
                  certName="AWS - Solution Architect Associate"
                  imgUrl={AWS}
                  certificateLink="https://drive.google.com/file/d/1ReymqnzupIIXiNqVNyRtX_s8V6mSRW1Y/view?usp=drive_link"
                />
              </CertificationBoxWrapper>
              <CertificationBoxWrapper>
                <CertificationBox
                  certName="Data Structures and Algorithms"
                  imgUrl={udemy}
                  certificateLink="https://drive.google.com/file/d/1Pp4yc35w4guUaX9NTNv6d0dzd8m5wPuZ/view?usp=drive_link"
                />
              </CertificationBoxWrapper>
              <CertificationBoxWrapper>
                <CertificationBox
                  certName="Introduction to Packet Tracer"
                  imgUrl={cisco}
                  certificateLink="https://drive.google.com/file/d/1yYG-f6FEp6pclcKJSI4PA6MxlOL95pCp/view?usp=drive_link"
                />
              </CertificationBoxWrapper>
              <CertificationBoxWrapper>
                <CertificationBox
                  certName="C Training"
                  imgUrl={Spoken}
                  certificateLink="https://drive.google.com/file/d/11re5HZZx1ZMpYn0GSVip4eCPIuGEjMPD/view?usp=drive_link"
                />
              </CertificationBoxWrapper>
              <CertificationBoxWrapper>
                <CertificationBox
                  certName="CPP Training"
                  imgUrl={Spoken}
                  certificateLink="https://drive.google.com/file/d/1gIEaw2Lf7rPMN4lRIzhET3b1Y9Zz21gT/view?usp=drive_link"
                />
              </CertificationBoxWrapper>
              <CertificationBoxWrapper>
                <CertificationBox
                  certName="Python Training"
                  imgUrl={Spoken}
                  certificateLink="https://drive.google.com/file/d/1CWzIkhIbr4PLnwI5syDeZNbfv1Hr0kf_/view?usp=drive_link"
                />
              </CertificationBoxWrapper>
            </ResponsiveContainer>
          </Rows>

          

          <Container style={{  padding: 90 }}>
            <H2>
              My
              <Strongheading>Skills</Strongheading>...
            </H2>
            <Container>
              <Toolstack />
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}

export default About;
