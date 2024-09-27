import React,{useState} from 'react';
import styled from 'styled-components';
import { Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  } from "react-icons/ai";
  import Nav from "react-bootstrap/Nav";
  import {
    AiOutlineGithub,
    AiOutlineTwitter,
    AiOutlineInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import { SiGmail } from "react-icons/si";
  const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin-left: 30px;
  transform: translateY(50%);
  height: 20%;
  border-radius: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Buttoncontainer = styled.div`
opacity:30% ;
  border-radius: 40px;
  opacity: 30%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`
const IconTextContainer = styled.button`
  display: flex;
  background: none;
  border: none;
  align-items: center;
  padding: 20px 20px;
  height: auto;
  width: 200px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #cd5ff8;
  }
`;

const SidebarIcon = styled.span`
  color: #FFF;
  margin-right: 10px;
  &:hover {
    color: #cd5ff8;
  }
`;

const TextIcon = styled.span`
  color: #FFF;
  font-weight: bolder;
  font-size: 20px;
//   text-transform: uppercase;
&:hover {
  color: #cd5ff8;
}
`;
const Li = styled.li`
//   margin-bottom: 10px;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    p {
      margin-left: 10px;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

const Hr =styled.div`
display: flex;
align-items: center;
`
const Line =styled.div`
background  : #cd5ff8;
height: 5px;
flex: 1;
border-radius: 10px;
`
function Sidebar() {
    const [expand, updateExpanded] = useState(false);
  return (

    <SidebarWrapper>
        <Buttoncontainer>
      <IconTextContainer>
      <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} style={{ textDecoration: "none" }}>
        <SidebarIcon><AiOutlineHome style={{height: '20px', width: '20px'}}/></SidebarIcon>
        <TextIcon>Home</TextIcon>
      </Nav.Link>
      </IconTextContainer>

      <IconTextContainer>
      <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)} style={{ textDecoration: "none" }}>
        <SidebarIcon><AiOutlineUser style={{height: '20px', width: '20px'}}/></SidebarIcon>
        <TextIcon>About</TextIcon>
      </Nav.Link>
      </IconTextContainer>

      <IconTextContainer>
      <Nav.Link as={Link} to="/experience" onClick={() => updateExpanded(false)} style={{ textDecoration: "none" }}>
        <SidebarIcon><AiOutlineUser style={{height: '20px', width: '20px'}}/></SidebarIcon>
        <TextIcon>Experience</TextIcon>
      </Nav.Link>
      </IconTextContainer>

      <IconTextContainer>
      <Nav.Link as={Link} to="/Cert&Skills" onClick={() => updateExpanded(false)} style={{ textDecoration: "none" }}>
        <SidebarIcon><AiOutlineUser style={{height: '20px', width: '20px'}}/></SidebarIcon>
        <TextIcon>Cert & Skills</TextIcon>
      </Nav.Link>
      </IconTextContainer>

      <IconTextContainer>
      <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)} style={{ textDecoration: "none" }}>
        <SidebarIcon><AiOutlineFundProjectionScreen style={{height: '20px', width: '20px'}}/></SidebarIcon>
        <TextIcon>Projects</TextIcon>
        </Nav.Link>
      </IconTextContainer>
      </Buttoncontainer> 
      <Hr>
            <Line
            />

            <p
              style={{ margin: "10px 10px", fontSize: "14px", fontWeight: "bold" ,color:"white"}}
            >
              Socials
            </p>

            <Line
            />
          </Hr>
          <Col md="4">
          <ul>
            <Li> 
              <a
                href="https://github.com/bpri15"
                style={{ color:"#2a9d8f" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineGithub style={{height: '25px', width: '25px'}}/>
                <p>Github</p>
              </a>
            </Li>
            
            <Li>
              <a
                href="https://www.linkedin.com/in/bpri1504"
                style={{ color:"#0277b5"}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn style={{height: '25px', width: '25px'}}/>
                <p>LinkedIn</p>
              </a>
            </Li>
            <Li >
              <a
                href="https://www.instagram.com/bpri1504/"
                style={{ color:"#b5179e" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram style={{height: '25px', width: '25px'}}/>
                <p>instagram</p>
              </a>
            </Li>
            <Li >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=priyanshubansal2003@gmail.com"
                style={{ color:"#b5179e" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGmail style={{height: '25px', width: '25px'}}/>
                <p>Mail</p>
              </a>
            </Li>
          </ul>
        </Col>
    </SidebarWrapper>
  );
}

export default Sidebar;
