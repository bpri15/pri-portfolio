
//----------------------------------------------------------------------------------------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Particle from "./Particle";

const StyledExperienceBox = styled.a` /* Changed Link to <a> to use external links */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  margin: 2rem auto; /* Center the box */
  text-decoration: none;
  border-color: #cd5ff8;
  height: 200px; /* Slightly larger height */
  width: 850px; /* Slightly larger width */
  box-shadow: 4px 5px 4px 3px rgba(89, 4, 168, 0.137);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Enlarge on hover */
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 760px) {
    width: 95%; /* Responsive for mobile */
    height: 180px;

    &:hover {
      transform: scale(1.08); /* Larger scaling on mobile */
    }
  }
`;

const ImageContainer = styled.div`
  width: 25%;
  height: 100%;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
`;

const TextContainer = styled.div`
  width: 75%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .company-name {
    font-size: 1.75rem; /* Slightly larger */
    color: #cd5ff8;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .role {
    font-size: 1.5rem; /* Larger font */
    color: #2d3748; // Dark gray
    margin-bottom: 0.5rem;
  }

  .timeline {
    font-size: 1rem;
    color: #718096; // Light gray
  }
`;

const Description = styled.div`
  font-size: 1rem;
  color: #4a5568; // Gray
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7); /* Dark overlay */
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
  backdrop-filter: blur(0px); /* Initially no blur */
  overflow-y: auto; /* Allow vertical scrolling */
  scrollbar-width: thin; /* Narrow scrollbar for better appearance */

  &:hover {
    opacity: 1;
    backdrop-filter: blur(8px); /* Blur on hover */
  }

  ul {
    list-style-type: disc; /* Bullet points for description */
    padding-left: 20px;
    text-align: left; /* Align list items to the left */
  }

  li {
    font-size: 1.2rem; /* Slightly larger font for readability */
    margin-bottom: 0.5rem;
  }

  @media (max-width: 760px) {
    font-size: 1.2rem; /* Larger font on mobile */
    padding: 1rem;

    ul {
      font-size: 1.1rem; /* Adjust size for mobile */
    }
  }
`;

function WorkExperienceBox({ company, role, timeline, description, imageUrl, certificateLink }) {
  return (
    <Container>
      <Particle />
      <StyledExperienceBox href={certificateLink} target="_blank" rel="noopener noreferrer">
        <ImageContainer imgUrl={imageUrl} />
        <TextContainer>
          <div className="company-name">{company}</div>
          <div className="role">{role}</div>
          <div className="timeline">{timeline}</div>
        </TextContainer>
        <Description>
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Description>
      </StyledExperienceBox>
    </Container>
  );
}

WorkExperienceBox.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageUrl: PropTypes.string.isRequired,
  certificateLink: PropTypes.string.isRequired, // Added prop validation for certificateLink
};

export default WorkExperienceBox;
