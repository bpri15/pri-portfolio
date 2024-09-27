


// import React from "react";
// import styled from "styled-components";
// import Particle from "./Particle";

// const BoxContainer = styled.div`
//   width: 320px;
//   height: 370px;
//   perspective: 1000px;
//   margin: 20px;
//   position: relative;
//   border-radius: 20px;
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: translateY(-10px); /* Lift the box */
//     box-shadow: 0 20px 30px rgba(255, 255, 255, 0.2), 0 10px 20px rgba(0, 0, 0, 0.8);
//   }

//   &:hover .background-img {
//     opacity: 0;
//   }

//   &:hover .particle-container {
//     opacity: 1;
//   }

//   &:hover .cert-name {
//     opacity: 1;
//     transform: translate(-50%, -50%) scale(1.1);
//     text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
//   }
// `;

// const InnerBox = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   background-color: transparent;
//   border-radius: 20px;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4); /* 3D shadow */
//   transition: all 0.5s ease;
// `;

// const BackgroundImg = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: url(${(props) => props.imgUrl});
//   background-size: cover;
//   background-position: center;
//   border-radius: 20px;
//   transition: opacity 0.5s ease;
//   opacity: 1;
// `;

// const CertName = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%) scale(1);
//   font-size: 26px;
//   color: #f8f8f8;
//   font-weight: bold;
//   font-family: "Poppins", sans-serif;
//   text-transform: uppercase;
//   opacity: 0;
//   transition: opacity 0.4s ease, transform 0.4s ease;
//   text-align: center;
//   letter-spacing: 1.5px;
// `;

// const ParticleContainer = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   opacity: 0;
//   transition: opacity 0.5s ease;
//   z-index: 0;
//   border-radius: 20px;
// `;

// function CertificationBox({ certName, imgUrl }) {
//   return (
//     <BoxContainer>
//       <InnerBox>
//         <BackgroundImg className="background-img" imgUrl={imgUrl} />
//         <CertName className="cert-name">{certName}</CertName>
//         <ParticleContainer className="particle-container">
//           <Particle />
//         </ParticleContainer>
//       </InnerBox>
//     </BoxContainer>
//   );
// }

// export default CertificationBox;



import React from "react";
import styled from "styled-components";
import Particle from "./Particle";

const BoxContainer = styled.div`
  width: calc(22vw); /* 20% of the viewport width */
  height: calc(15vw); /* Adjusted based on the viewport width */
  display: flex;
  margin: 20px;
  position: relative;
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1000px) {
    width: calc(25vw); /* On smaller screens, make the box wider */
    height: calc(15vw); /* Increase height proportionally */
  }

  @media (max-width: 700px) {
    width: calc(45vw); /* On extra small screens, further increase width */
    height: calc(35vw); /* Further increase height */
  }

  &:hover {
    transform: translateY(-10px); /* Lift the box */
    box-shadow: 0 20px 30px rgba(255, 255, 255, 0.2), 0 10px 20px rgba(0, 0, 0, 0.8);
  }

  &:hover .background-img {
    opacity: 0;
  }

  &:hover .particle-container {
    opacity: 1;
  }

  &:hover .cert-name {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }
`;

const InnerBox = styled.div`
//   position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4); /* 3D shadow */
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const BackgroundImg = styled.div`
//   position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: opacity 0.5s ease;
  opacity: 1;

  @media (max-width: 768px) {
    background-size: contain;
    height: 120px;
  }
`;

const CertName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  font-size: 20px;
  color: #f8f8f8;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.4s ease;
  text-align: center;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ParticleContainer = styled.div`
//   position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
  border-radius: 20px;
`;

const LinkWrapper = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none; /* Prevents the link underline */
`;

function CertificationBox({ certName, imgUrl, certificateLink }) {
  return (
    <BoxContainer>
      <LinkWrapper href={certificateLink} target="_blank" rel="noopener noreferrer">
        <InnerBox>
          <BackgroundImg className="background-img" imgUrl={imgUrl} />
          <CertName className="cert-name">{certName}</CertName>
          <ParticleContainer className="particle-container">
            <Particle />
          </ParticleContainer>
        </InnerBox>
      </LinkWrapper>
    </BoxContainer>
  );
}

export default CertificationBox;
