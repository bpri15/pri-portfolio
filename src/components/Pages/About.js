// import React from "react";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import Particle from "../Particle";
// import styled from "styled-components";
// import Techstack from "../TechStack";
// import Toolstack from "../ToolStack";

// const H1 = styled.h1`
//   color: white;
//   font-size: 30px;
//   position: relative;

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
//       border-radius: 10px; /* Adjust the radius as needed */
//     }
//   }
// `;
// const H2 = styled.h1`
// color: white;
//   font-size: 2.1em;
//   justify-content: center;
//   text-align: center;
//   padding-top: 10px !important;
//   &:hover {
//       color: lightblue;
//   }
// `
// const Rows = styled(Row)`
//   margin-left: 190px;
//   margin-block: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (max-width: 760px) {
//     margin-left: 0;
//     margin-block: 0;
//     display: flex;
//     flex-direction: column;
//   }
// `;

// const Strongheading = styled.strong`
//   margin-left: 5px;
//   color: #cd5ff8;
//   font-size: 25px;
// `;
// const Pinktext = styled.strong`
//   color: #b5179e;
//   margin-left: 5px;
//   font-size: 25px;
// `;
// const Bluetext = styled.strong`
//   color: lightblue;
//   margin-left: 5px;
//   font-size: 25px;
// `;
// const Addspace=styled.div`
// margin-bottom: 5px;
// `
// function About() {
//   return (
//     <section>
//       <Container>
//         <Particle />
//         <Container style={{ padding: 150 }}>
//           <Rows>
//             <H1>
//               About  
//               <Strongheading>ME</Strongheading> ...
//             </H1>
//             <Col>
//             <Card>
//                 <Card.Body >
//                     <p style={{color: "white",textAlign: "justify",fontSize: "20px"}}>
//                     <Pinktext>Hello</Pinktext> Everyone, I am <Strongheading>Priyanshu Bansal</Strongheading>From <Bluetext>Uttar Pradesh, INDIA</Bluetext>
//                     <Addspace/>
//                     <br />I'm a final year <Pinktext>Btech Computer Science and Engineering</Pinktext> student with specilization in <Pinktext>Artificial Intelligence & Machine Learning.</Pinktext> I have a strong foundation in languages like <Bluetext>Python</Bluetext>, <Bluetext>C++</Bluetext>, and <Bluetext>Java</Bluetext>, along with experience in frameworks like <Bluetext>TensorFlow</Bluetext> and <Bluetext>Keras</Bluetext>. My expertise spans building machine learning models, developing deep learning applications, and working with cloud platforms like <Bluetext>AWS</Bluetext>.
//                     <Addspace/>
//                     <br/>With a focus on solving real-world problems using AI, I enjoy experimenting with neural networks, data science, and computer vision techniques. In addition to my AI pursuits, I have a creative flair for game programming in <Bluetext>Unity</Bluetext>, where I’ve developed projects that combine my technical skills with innovative gameplay.
//                     <Addspace/>
//                     <br/>When I’m not immersed in tech, you can find me strategizing over a game of <Bluetext>Chess</Bluetext> or solving <Bluetext>Sudoku</Bluetext> puzzles. I’m always eager to take on new challenges and continue honing my skills in the rapidly evolving world of technology.
//                     </p>
//                 </Card.Body>
//             </Card>
//             </Col>
//           </Rows>
//           <Container style={{justifyContent: "center"}}> 
//           </Container>
//         </Container>
//       </Container>
//     </section>
//   );
// }

// export default About;




//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import styled from "styled-components";
import ayush from "../../assets/Priyanshu1.jpg"; // Import your image
import Techstack from "../TechStack";
import Toolstack from "../ToolStack";

const H1 = styled.h1`
  color: white;
  font-size: 30px;
  position: relative;

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
      border-radius: 10px; /* Adjust the radius as needed */
    }
  }
`;

const Img = styled.img`
  // width: 8rem; /* Smaller size for About page */
  // height: 8rem;
  // border-radius: 50%; /* Circular image */
  // position: absolute; /* Position it in the corner */
  // top: 20px; /* Adjust to desired top positioning */
  // right: 20px; /* Adjust to desired right positioning */
  // transition: all 0.3s ease-in-out; /* Smooth transition for size */
  
  // @media (max-width: 760px) {
  //   width: 6rem;
  //   height: 6rem;
  // }
  width: 8rem; /* Default small size for larger screens */
  height: 8rem;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: all 0.3s ease-in-out; /* Smooth transition on size change */

  /* For mobile screens */
  @media (max-width: 760px) {
    position: relative;
    width: 6rem;
    height: 6rem;
    margin: 0 auto; /* Center horizontally */
    display: block;
    top: unset; /* Reset the top positioning */
    right: unset; /* Reset the right positioning */
    margin-top: 60px; /* Push it below the navbar */
  }
`;

const About = () => {
  return (
    <section>
      <Container>
        <Particle />
        <Container style={{ padding: 150 }}>
          <Rows>
            <H1>
              About  
              <Strongheading>ME</Strongheading> ...
            </H1>
            <Col>
              <Card>
              <Card.Body >
                     <p style={{color: "white",textAlign: "justify",fontSize: "20px"}}>
                     <Pinktext>Hello</Pinktext> Everyone, I am <Strongheading>Priyanshu Bansal</Strongheading>From <Bluetext>Uttar Pradesh, INDIA</Bluetext>
                     <Addspace/>
                     <br />I'm a final year <Pinktext>Btech Computer Science and Engineering</Pinktext> student with specilization in <Pinktext>Artificial Intelligence & Machine Learning.</Pinktext> I have a strong foundation in languages like <Bluetext>Python</Bluetext>, <Bluetext>C++</Bluetext>, and <Bluetext>Java</Bluetext>, along with experience in frameworks like <Bluetext>TensorFlow</Bluetext> and <Bluetext>Keras</Bluetext>. My expertise spans building machine learning models, developing deep learning applications, and working with cloud platforms like <Bluetext>AWS</Bluetext>.
                     <Addspace/>
                     <br/>With a focus on solving real-world problems using AI, I enjoy experimenting with neural networks, data science, and computer vision techniques. In addition to my AI pursuits, I have a creative flair for game programming in <Bluetext>Unity</Bluetext>, where I’ve developed projects that combine my technical skills with innovative gameplay.
                     <Addspace/>
                     <br/>When I’m not immersed in tech, you can find me strategizing over a game of <Bluetext>Chess</Bluetext> or solving <Bluetext>Sudoku</Bluetext> puzzles. I’m always eager to take on new challenges and continue honing my skills in the rapidly evolving world of technology.
                     </p>
                 </Card.Body>
              </Card>
            </Col>
          </Rows>
          <Img src={ayush} alt="Priyanshu" /> {/* Add image to About */}
        </Container>
      </Container>
    </section>
  );
};

const Rows = styled(Row)`
  margin-left: 190px;
  margin-block: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 760px) {
    margin-left: 0;
    margin-block: 0;
    display: flex;
    flex-direction: column;
  }
`;

const Strongheading = styled.strong`
  margin-left: 5px;
  color: #cd5ff8;
  font-size: 25px;
`;

const Pinktext = styled.strong`
  color: #b5179e;
  margin-left: 5px;
  font-size: 25px;
`;

const Bluetext = styled.strong`
  color: lightblue;
  margin-left: 5px;
  font-size: 25px;
`;

const Addspace = styled.div`
  margin-bottom: 5px;
`;

export default About;
