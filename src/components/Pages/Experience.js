

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// import React from "react";
// import { Container, Row } from "react-bootstrap";
// import Particle from "../Particle";
// import styled from "styled-components";
// import WorkExperienceBox from "../WorkExperienceBox";
// import daburLogo from "./../../assets/Dabur1.png"; // Add your Dabur logo here

// const Rows = styled(Row)`
//   margin-left: 11rem;
//   margin-block: 3rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (max-width: 760px) {
//     margin-left: 0;
//     margin-block: 0;
//   }
// `;

// const H1 = styled.h1`
//   color: white;
//   font-size: 35px;
//   text-align: left;
//   margin-bottom: 30px;
//   position: relative;
//   margin-left: 100px;

//   &:hover {
//     &:before {
//       content: "";
//       position: absolute;
//       left: 0;
//       bottom: 0;
//       width: 20%;
//       height: 5px;
//       background: linear-gradient(to right, transparent 50%, #cd5ff8 50%);
//       background-size: 200% 100%;
//       background-position: right bottom;
//       transition: background-position 0.3s ease-in-out;
//       border-radius: 10px;
//     }
//   }
// `;

// const Strongheading = styled.strong`
//   margin-left: 5px;
//   color: #cd5ff8;
//   font-size: 30px;
// `;

// function Experience() {
//   return (
//     <>
//       <Container>
//         <Particle />
//         <Container style={{ padding: '60px 20px' }}>
//           <Rows>
//             <H1>
//               My 
//               <Strongheading> Experience</Strongheading>,
//             </H1>

//             <Row className="justify-content-center">
//               <WorkExperienceBox
//                 company="Dabur India Ltd."
//                 role="Intern"
//                 timeline="December 2023 - February 2024"
//                 description={[
//                   "Developed a basic ML-based model for Dabur product.",
//                   "Conducted sentiment analysis on customer reviews using Support Vector Machines (SVM).",
//                   "Provided actionable insights to the marketing team based on sentiment trends."
//                 ]}
//                 imageUrl={daburLogo} // Update with the correct logo path
//                 certificateLink="https://drive.google.com/file/d/1xUGdlls2XXf896BluLHGpHxLxAcr60HN/view?usp=drive_link" // Add certificate link here
//               />
              
//             </Row>
//           </Rows>
//         </Container>
//       </Container>
//     </>
//   );
// }

// export default Experience;


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import styled from "styled-components";
import WorkExperienceBox from "../WorkExperienceBox";
import daburLogo from "./../../assets/Dabur1.png";
import VITLogo from "./../../assets/VIT.jpeg"
import Passwordd from "./../../assets/password.png"
import EstateHub from "./../../assets/Technoverse.jpeg"; // Add your Dabur logo here

// Card Flip styling
const CardWrapper = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
  transform: ${(props) => (props.flip ? "rotateY(180deg)" : "rotateY(0)")};
`;

const Front = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const Back = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

// Title Styling
const H1 = styled.h1`
  color: white;
  font-size: 35px;
  text-align: left;
  margin-bottom: 30px;
  position: relative;
  margin-left: 100px;

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

const Strongheading = styled.strong`
  margin-left: 5px;
  color: #cd5ff8;
  font-size: 30px;
`;

const FlipButton = styled.button`
  background-color: #cd5ff8;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8c3fbf;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

// Rows styling to ensure sidebar isn't affected
const Rows = styled(Row)`
  margin-left: 11rem;
  margin-block: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 760px) {
    margin-left: 0;
    margin-block: 0;
  }
`;

function Experience() {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <section>
      <Container>
        <Particle /> {/* Particle effect is here but will not interfere */}
        <Container style={{ padding: '60px'}}>
          <CardWrapper>
            <Card flip={flip}>
              {/* Professional Experience (Front of the Card) */}
              <Front>
                <Rows>
                  <H1>
                    My 
                    <Strongheading> Experience</Strongheading>
                  </H1>

                  <Row className="justify-content-center">
                  <WorkExperienceBox
                      company="Vellore Institute of Technology"
                      role="Teaching Assistant"
                      timeline="Current"
                      description={[
                        "Collaborated with the course instructor to enhance the learning experience for students.",
                        "Conducted weekly tutoring sessions to support students in understanding deep learning concepts.",
                      ]}
                      imageUrl={VITLogo}
                      certificateLink="https://example.com/volunteer-certificate"
                    />
                    <WorkExperienceBox
                      company="Dabur India Ltd."
                      role="Intern"
                      timeline="December 2023 - February 2024"
                      description={[
                        "Developed a basic ML-based model for Dabur product.",
                        "Conducted sentiment analysis on customer reviews using Support Vector Machines (SVM).",
                        "Provided actionable insights to the marketing team based on sentiment trends."
                      ]}
                      imageUrl={daburLogo} // Update with the correct logo path
                      certificateLink="https://drive.google.com/file/d/1xUGdlls2XXf896BluLHGpHxLxAcr60HN/view?usp=drive_link" // Add certificate link here
                    />
                  </Row>

                  {/* Flip to Extracurricular Button */}
                  <ButtonContainer>
                    <FlipButton onClick={handleFlip}>
                      See Extracurricular Experience
                    </FlipButton>
                  </ButtonContainer>
                </Rows>
              </Front>

              {/* Extracurricular Experience (Back of the Card) */}
              <Back>
                <Rows>
                  <H1>
                    My 
                    <Strongheading> Extracurricular Experience</Strongheading>
                  </H1>

                  <Row className="justify-content-center">
                    <WorkExperienceBox
                      company="TechnoVerse - Hackathon"
                      role="Participant"
                      timeline="June 2023"
                      description={[
                        "EstateHUB Connects renters directly with property owners for transparent, broker-free transactions.",
                        "Allows both renters and property owners to rate each other, fostering trust and informed decisions.",
                        "Provides a hassle-free rental process, ensuring satisfaction for all parties involved"
                      ]}
                      imageUrl={EstateHub}
                      certificateLink="https://drive.google.com/file/d/1wNshDSeBLIQVfk2NlTaY0VQC78RF3O6w/view?usp=drive_link"
                    />
                    <WorkExperienceBox
                      company="Password - CTF X Escape Room"
                      role="Participant"
                      timeline="June 2023"
                      description={[
                        "Captured the Hidden Flags using various Linux commands",
                        "Used various techniques like Docker, Wireshark, etc.",
                        "Ranked 22 out of 150 teams"
                      ]}
                      imageUrl={Passwordd}
                      certificateLink="https://drive.google.com/file/d/1-C3D31mQn3mW8IIxJ3g4IBWLJ32gI26y/view?usp=drive_link"
                    />
                  </Row>

                  {/* Flip back to Professional Button */}
                  <ButtonContainer>
                    <FlipButton onClick={handleFlip}>
                      Back to Professional Experience
                    </FlipButton>
                  </ButtonContainer>
                </Rows>
              </Back>
            </Card>
          </CardWrapper>
        </Container>
      </Container>
     </section>
  );
}

export default Experience;
