// import React from "react";
// import PropTypes from "prop-types";
// import styled from "styled-components";
// import { Container } from "react-bootstrap";
// import Particle from "./Particle";

// const StyledProjectBox = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid #e2e8f0;
//   border-radius: 0.375rem;
//   margin: 2rem auto;
//   text-decoration: none;
//   border-color: #cd5ff8;
//   height: 200px;
//   width: 850px;
//   box-shadow: 4px 5px 4px 3px rgba(89, 4, 168, 0.137);
//   overflow: hidden;
//   position: relative;
//   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
//   }

//   @media (max-width: 760px) {
//     width: 95%;
//     height: 180px;

//     &:hover {
//       transform: scale(1.08);
//     }
//   }
// `;

// const ImageContainer = styled.div`
//   width: 25%;
//   height: 100%;
//   background-image: url(${props => props.imgUrl});
//   background-size: cover;
//   background-position: center;
// `;

// const TextContainer = styled.div`
//   width: 75%;
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   .project-name {
//     font-size: 1.75rem;
//     color: #cd5ff8;
//     font-weight: bold;
//     margin-bottom: 0.5rem;
//   }

//   .project-url {
//     font-size: 1.5rem;
//     color: #2d3748;
//     margin-bottom: 0.5rem;
//   }
// `;

// const DescriptionOverlay = styled.div`
//   font-size: 1rem;
//   color: #4a5568;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   background: rgba(0, 0, 0, 0.7);
//   color: white;
//   padding: 1.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   opacity: 0;
//   transition: opacity 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
//   backdrop-filter: blur(0px);
//   overflow-y: auto;
//   scrollbar-width: thin;

//   &:hover {
//     opacity: 1;
//     backdrop-filter: blur(8px);
//   }

//   ul {
//     list-style-type: disc;
//     padding-left: 20px;
//     text-align: left;
//   }

//   li {
//     font-size: 1.2rem;
//     margin-bottom: 0.5rem;
//   }

//   @media (max-width: 760px) {
//     font-size: 1.2rem;
//     padding: 1rem;

//     ul {
//       font-size: 1.1rem;
//     }
//   }
// `;

// function ProjectBox({ projectName, url, description, image }) {
//   return (
//     <Container>
//       <Particle /> {/* Optional: Can be removed if not needed */}
//       <StyledProjectBox href={url} target="_blank" rel="noopener noreferrer">
//         <ImageContainer imgUrl={image} />
//         <TextContainer>
//           <div className="project-name">{projectName}</div>
//           <div className="project-url">{url}</div>
//         </TextContainer>
//         <DescriptionOverlay>
//           <ul>
//             {description.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </DescriptionOverlay>
//       </StyledProjectBox>
//     </Container>
//   );
// }

// ProjectBox.propTypes = {
//   projectName: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   description: PropTypes.arrayOf(PropTypes.string).isRequired,
//   image: PropTypes.string.isRequired
// };

// export default ProjectBox;





  // import React from "react";
  // import PropTypes from "prop-types";
  // import styled from "styled-components";
  // import { Container } from "react-bootstrap";
  // import Particle from "./Particle";

  // // Main container for the ProjectBox
  // const StyledProjectBox = styled.a`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   border-radius: 0.375rem;
  //   margin: 2rem; /* Updated margin to ensure no overlap */
  //   text-decoration: none;
  //   border: 2px solid #cd5ff8;
  //   height: 400px;
  //   width: 350px;
  //   box-shadow: 0 4px 30px rgba(205, 95, 248, 0.2), 0 0 100px rgba(89, 4, 168, 0.5);
  //   background: rgba(255, 255, 255, 0.05);
  //   backdrop-filter: blur(10px);
  //   overflow: hidden;
  //   position: relative;
  //   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;
  //   transform: perspective(500px) ; /* 3D effect */

  //   &:hover {
  //     transform: perspective(500px)  scale(1.05); /* Enlarge and bring closer */
  //     border: 2px solid #fffa65; /* Change border color on hover */
  //     box-shadow: 0 4px 50px rgba(255, 250, 101, 0.5), 0 0 150px rgba(205, 95, 248, 0.7);
  //   }

  //   @media (max-width: 760px) {
  //     width: 95%;
  //     height: 400px;

  //     &:hover {
  //       transform: perspective(400px) rotateX(0deg) rotateY(0deg) scale(1.08);
  //     }
  //   }
  // `;

  // // Image container for the project thumbnail
  // const ImageContainer = styled.div`
  //   width: 100%;
  //   height: 50%;
  //   background-image: url(${(props) => props.imgUrl});
  //   background-size: cover;
  //   background-position: center;
  //   border-bottom: 2px solid #cd5ff8; /* Add border between image and text */
  //   transition: transform 0.3s ease-in-out;

  //   ${StyledProjectBox}:hover & {
  //     transform: scale(1.05); /* Slightly enlarge image on hover */
  //   }
  // `;

  // // Container for the text content (Project name and description)
  // const TextContainer = styled.div`
  //   width: 100%;
  //   padding: 1rem;
  //   text-align: center;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;

  //   .project-name {
  //     font-size: 1.75rem;
  //     color: #fffa65; /* Light yellow for project name */
  //     font-weight: bold;
  //     margin-bottom: 0.5rem;
  //   }

  //   .project-url {
  //     font-size: 1rem;
  //     color: #9e9e9e; // Gray for URL text
  //     margin-bottom: 1rem;
  //   }

  //   .project-description {
  //     font-size: 1rem;
  //     color: #ffffff; /* White for description text */
  //     margin-top: 0.5rem; /* Add space between description and other text */
  //     text-align: left; /* Align text to the left */
  //   }
  // `;

  // // Main ProjectBox component
  // function ProjectBox({ projectName, url, description, image }) {
  //   return (
  //     <Container>
  //       <Particle /> {/* Optional: Can be removed if not needed */}
  //       <StyledProjectBox href={url} target="_blank" rel="noopener noreferrer">
  //         <ImageContainer imgUrl={image} />
  //         <TextContainer>
  //           <div className="project-name">{projectName}</div>
  //           <div className="project-url">{url}</div>
  //           <div className="project-description">
  //             <ul>
  //               {description.map((item, index) => (
  //                 <li key={index}>{item}</li>
  //               ))}
  //             </ul>
  //           </div>
  //         </TextContainer>
  //       </StyledProjectBox>
  //     </Container>
  //   );
  // }

  // // Prop types for validation
  // ProjectBox.propTypes = {
  //   projectName: PropTypes.string.isRequired,
  //   url: PropTypes.string.isRequired,
  //   description: PropTypes.arrayOf(PropTypes.string).isRequired,
  //   image: PropTypes.string.isRequired,
  // };

  // export default ProjectBox;


  import React from "react";
  import PropTypes from "prop-types";
  import styled from "styled-components";
  import { Container } from "react-bootstrap";
  import Particle from "./Particle";
  
  // Main container for the ProjectBox with increased width and height
  const StyledProjectBox = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    margin: 2rem;
    text-decoration: none;
    border: 2px solid #cd5ff8;
    height: 400px; /* Increased height */
    width: 350px; /* Increased width */
    box-shadow: 0 4px 30px rgba(205, 95, 248, 0.2), 0 0 100px rgba(89, 4, 168, 0.5);
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;
    transform: perspective(500px);
  
    &:hover {
      transform: perspective(500px) scale(1.05);
      border: 2px solid #fffa65;
      box-shadow: 0 4px 50px rgba(255, 250, 101, 0.5), 0 0 150px rgba(205, 95, 248, 0.7);
      backdrop-filter: none;
    }
  
    @media (max-width: 760px) {
      width: 95%;
      height: 400px;
  
      &:hover {
        transform: perspective(400px) rotateX(0deg) rotateY(0deg) scale(1.08);
      }
    }
  `;
  
  // Image container with adjustments for better fit
  const ImageContainer = styled.div`
    width: 100%;
    height: 45%; /* Increase height ratio for image */
    background-image: url(${(props) => props.imgUrl});
    background-size: contain; /* Make sure image fits inside the box without cutting */
    background-repeat: no-repeat; /* Prevent image from repeating */
    background-position: center;
    border-bottom: 2px solid #cd5ff8;
    transition: transform 0.3s ease-in-out;
  
    ${StyledProjectBox}:hover & {
      transform: scale(1.05);
    }
  `;
  
  // Container for the text content (Project name and description)
  const TextContainer = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    .project-name {
      font-size: 1.6rem; /* Increased font size for project name */
      color: #fffa65;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
  
    .project-description {
      font-size: 1.0rem; /* Adjusted font size for description */
      color: #ffffff;
      margin-top: 1rem;
      text-align: center; /* Align text to the left */
    }
  `;
  
  // Main ProjectBox component with paragraph description
  function ProjectBox({ projectName, url, description, image }) {
    return (
      <Container>
        <Particle /> {/* Optional: Can be removed if not needed */}
        <StyledProjectBox href={url} target="_blank" rel="noopener noreferrer">
          <ImageContainer imgUrl={image} />
          <TextContainer>
            <div className="project-name">{projectName}</div>
            <div className="project-description">{description}</div> {/* Render description as a paragraph */}
          </TextContainer>
        </StyledProjectBox>
      </Container>
    );
  }
  
  // Prop types for validation
  ProjectBox.propTypes = {
    projectName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, /* Changed to a single string for paragraph description */
    image: PropTypes.string.isRequired,
  };
  
  export default ProjectBox;
  