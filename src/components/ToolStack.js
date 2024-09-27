
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import styled from "styled-components";
// import { FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

// const TechIconsWrapper = styled(Container)`
//   justify-content: center;
//   padding-bottom: 50px;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
// `;

// const Rows = styled(Row)`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   margin: 3rem;
// `;

// const TechIconCol = styled(Col)`
//   font-size: 4.5em;
//   margin: 15px;
//   padding: 10px;
//   color: #ffffff; /* White color for icons */
//   opacity: 0.75;
//   background: rgba(255, 255, 255, 0.1); /* Light transparent background */
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0 5px 20px rgba(255, 255, 255, 0.9); /* Enhanced shadow for 3D effect */
//   transition: transform 0.3s ease, background 0.3s ease;

//   &:hover {
//     transform: translateY(-5px) scale(1.1); /* Move up slightly on hover */
//     background: rgba(255, 255, 255, 0.1); /* Slightly darker on hover */
//     box-shadow: 0 10px 30px rgba(255, 255, 255, 0.6); /* Increase shadow on hover */
//   }

//   @media (max-width: 767px) {
//     margin: 10px;
//   }
// `;

// function Toolstack() {
//   const icons = [
//     <FaJsSquare />,
//     <FaReact />,
//     <FaNodeJs />,
//     <FaHtml5 />,
//     <FaCss3Alt />
//   ];
  
//   return (
//     <TechIconsWrapper>
//       <Rows>
//         {icons.map((icon, index) => (
//           <TechIconCol key={index}>
//             {icon}
//           </TechIconCol>
//         ))}
//       </Rows>
//     </TechIconsWrapper>
//   );
// }

// export default Toolstack;




import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {
  FaAws,
  FaBootstrap,
  FaCuttlefish,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaLinux,
  FaPython,
  FaReact,
  FaUbuntu

} from "react-icons/fa";
import { 
  SiTensorflow,
  SiFlutter,
  SiMysql,
  SiOpencv,
  SiMongodb,
  SiPowershell,
  SiPycharm,
  SiScikitlearn,
  SiUnity,
  SiVercel,
  SiKeras

 } from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";


// Styled component for tool icons container
const TechIconsWrapper = styled(Container)`
  justify-content: center;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adds space between items */
  padding-left: 200px;
  position: center;
  padding-right: 50px;

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
    gap: 10px; /* Reduce space between items for smaller screens */
  }
`;

// Styled component for the row containing icons
const Rows = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem 0; /* Add vertical space */
  gap: 20px; /* Adds space between rows */

  @media (max-width: 767px) {
    gap: 10px; /* Reduce space between rows for smaller screens */
  }
`;

// Styled component for each tech icon
const TechIconCol = styled(Col)`
  flex: 1 1 calc(10% - 20px); /* 10% width minus the gap */
  max-width: 100px; /* Ensure maximum width */
  margin: 10px;
  padding: 10px;
  font-size: 3em;
  color: #ffffff; /* White color for icons */
  opacity: 0.75;
  background: rgba(255, 255, 255, 0.1); /* Light transparent background */
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.9); /* Enhanced shadow for 3D effect */
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.1); /* Move up slightly on hover */
    background: rgba(255, 255, 255, 0.1); /* Slightly darker on hover */
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.6); /* Increase shadow on hover */
  }

  @media (max-width: 1200px) {
    flex: 1 1 calc(15% - 20px); /* For medium screens, 15% width */
  }

  @media (max-width: 992px) {
    flex: 1 1 calc(20% - 20px); /* For smaller screens, 20% width */
    font-size: 2.5em;
  }

  @media (max-width: 767px) {
    flex: 1 1 calc(25% - 20px); /* For phones, 25% width */
    font-size: 2em; /* Smaller font size for icons */
  }

  @media (max-width: 576px) {
    flex: 1 1 calc(33.333% - 20px); /* For very small screens, 33% width */
  }
`;

function Toolstack() {
  const icons = [
    <FaAws />,
    <FaBootstrap />,
    <FaCuttlefish />,
    <FaCss3Alt />,
    <FaHtml5 />,
    <FaGitAlt />,
    <SiTensorflow />,
    <SiFlutter />,
    <FaJava />,
    <FaLinux />,
    <SiMysql />,
    <SiMongodb />,
    <SiOpencv />,
    <SiPowershell />,
    <SiPycharm />,
    <FaPython />,
    <FaReact />,
    <SiScikitlearn />,
    <FaUbuntu />,
    <SiUnity />,
    <SiVercel />,
    <SiKeras />,
    <TbBrandCpp />,
    <TbBrandCSharp />


  ];
 

  return (
    <TechIconsWrapper>
      <Rows>
        {icons.map((icon, index) => (
          <TechIconCol key={index}>{icon}</TechIconCol>
        ))}
      </Rows>
    </TechIconsWrapper>
  );
}

export default Toolstack;
