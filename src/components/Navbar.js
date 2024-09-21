//----------------------------------------------ORIGINAL VERSION---------------------------------------------------------------------
// import React, { useState,useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { FaBars, FaTimes } from "react-icons/fa";

// const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
//   position: fixed;
//   width: 100%;
//   height: 60px;
//   z-index: 10;
//   top: 0;
//   backdrop-filter: ${({ isScrolled }) => (isScrolled ? "blur(5px)" : "none")};
//   transition: backdrop-filter 0.3s ease-in-out;
// `;

// const LogoContainer = styled(Link)`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   margin: 10px;
// `;

// const Logo = styled.h1`
//   font-size: 2rem;
//   font-weight: bold;
//   color: white;
//   @media (max-width: 760px) {
//   font-size:1.5rem;
// }
// `;

// const NavMenu = styled.ul`
//   display:  none;
//   list-style: none;
//   margin: 0;
//   padding: 0;
  
//   @media screen and (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: ;
//     margin-top: 4rem;
//     align-items: center;
//     width: 100%;
//     height: 100vh;
//     background: black;
//     position: absolute;
//     top: 0;
//     left: ${({ click }) => (click ? "0" : "-100%")};
//     z-index: -3;
//     transition: 0.3s;
//   }
// `;

// const NavItem = styled.li`
//   padding: 0 1rem;
//   color: white;
//   font-size:1.5rem;
//   @media screen and (max-width: 768px) {
//     padding: 1rem 0;
//     font-size: 1.5rem;
//   }
// `;

// const NavLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
//   font-size: 1.2rem;
//   font-weight: 500;

//   &:hover {
//     color: rgb(64, 27, 138);
//   }

//   @media screen and (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Hamburger = styled.div`
//   display: none;
//   color: white;
//   margin: 20px;
//   @media screen and (max-width: 768px) {
//     display: inline;
//     cursor: pointer;
//   }
// `;

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [click, setClick] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   const handleClick = () => setClick(!click);

//   return (
//     <NavbarContainer isScrolled={isScrolled}>
//       <LogoContainer to="/">
//         <Logo>Priyanshu Bansal</Logo>
//       </LogoContainer>

//       <NavMenu click={click}>
//         <NavItem>
//           <NavLink to="/" className="hoverElement" onClick={handleClick}>
//             Home
//           </NavLink>
//         </NavItem>

//         <NavItem>
//           <NavLink to="/about" className="hoverElement" onClick={handleClick}>
//             About
//           </NavLink>
//         </NavItem>

//         <NavItem>
//           <NavLink to="/projects" className="hoverElement" onClick={handleClick}>
//             Projects
//           </NavLink>
//         </NavItem>
//       </NavMenu>

//       <Hamburger onClick={handleClick}>
//         {click ? <FaTimes size={20} /> : <FaBars size={20} />}
//       </Hamburger>
//     </NavbarContainer>
//   );
// };

// export default Navbar;
//------------------------------------------------------------------------------------------------------------------------------------------------------------------



// --------------------------------------WHEN BACKGROUND IS DARK BLACK BUT NAME SIZE CHANGES DYNAMICALLY-----------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { FaBars, FaTimes } from "react-icons/fa";

// const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem;
//   position: fixed;
//   width: 100%;
//   height: 60px;
//   z-index: 10;
//   top: 0;
//   background-color: black; /* Add a solid background color */
//   transition: height 0.3s ease-in-out;
// `;

// const LogoContainer = styled(Link)`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
// `;

// const Logo = styled.h1`
//   font-size: ${({ isScrolled }) => (isScrolled ? "1.5rem" : "3rem")};
//   font-weight: bold;
//   color: white;
//   transition: font-size 0.3s ease-in-out;
// `;

// const NavMenu = styled.ul`
//   display: none;
//   list-style: none;
//   margin: 0;
//   padding: 0;

//   @media screen and (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     margin-top: 4rem;
//     align-items: center;
//     width: 100%;
//     height: 100vh;
//     background: black;
//     position: absolute;
//     top: 0;
//     left: ${({ click }) => (click ? "0" : "-100%")};
//     z-index: -3;
//     transition: 0.3s;
//   }
// `;

// const NavItem = styled.li`
//   padding: 0 1rem;
//   color: white;
//   font-size: 1.5rem;
//   @media screen and (max-width: 768px) {
//     padding: 1rem 0;
//     font-size: 1.5rem;
//   }
// `;

// const NavLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
//   font-size: 1.2rem;
//   font-weight: 500;

//   &:hover {
//     color: rgb(64, 27, 138);
//   }

//   @media screen and (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Hamburger = styled.div`
//   display: none;
//   color: white;
//   margin: 20px;
//   @media screen and (max-width: 768px) {
//     display: inline;
//     cursor: pointer;
//   }
// `;

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleClick = () => setClick(!click);

//   return (
//     <NavbarContainer>
//       <LogoContainer to="/">
//         <Logo isScrolled={isScrolled}>Priyanshu Bansal</Logo>
//       </LogoContainer>

//       <Hamburger onClick={handleClick}>
//         {click ? <FaTimes size={20} /> : <FaBars size={20} />}
//       </Hamburger>

//       <NavMenu click={click}>
//         <NavItem>
//           <NavLink to="/" className="hoverElement" onClick={handleClick}>
//             Home
//           </NavLink>
//         </NavItem>

//         <NavItem>
//           <NavLink to="/about" className="hoverElement" onClick={handleClick}>
//             About
//           </NavLink>
//         </NavItem>

//         <NavItem>
//           <NavLink to="/projects" className="hoverElement" onClick={handleClick}>
//             Projects
//           </NavLink>
//         </NavItem>
//       </NavMenu>
//     </NavbarContainer>
//   );
// };

// export default Navbar;
//------------------------------------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------SAME AS ORIGINAL JUST CENTER THE NAME AND CHANGES NAME SIZE UPON SCROLLING--------------------------------------------
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the logo */
  align-items: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 10;
  top: 0;
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? "blur(5px)" : "none")};
  transition: backdrop-filter 0.3s ease-in-out;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Logo = styled.h1`
  font-size: ${({ isScrolled }) => (isScrolled ? "2rem" : "2.8rem")}; /* Dynamic size change */
  font-weight: bold;
  color: white;
  transition: font-size 0.3s ease-in-out; /* Smooth transition */
  @media (max-width: 760px) {
    font-size: ${({ isScrolled }) => (isScrolled ? "1.2rem" : "1.5rem")}; /* For smaller screens */
  }
`;

const NavMenu = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: black;
    position: absolute;
    top: 0;
    left: ${({ click }) => (click ? "0" : "-100%")};
    z-index: -3;
    transition: 0.3s;
  }
`;

const NavItem = styled.li`
  padding: 0 1rem;
  color: white;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
    font-size: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  font-weight: 500;

  &:hover {
    color: rgb(64, 27, 138);
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  color: white;
  margin: 20px;
  position: absolute;
  right: 20px;
  top: 20px;

  @media screen and (max-width: 768px) {
    display: inline;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => setClick(!click);

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <LogoContainer to="/">
        <Logo isScrolled={isScrolled}>Priyanshu Bansal</Logo>
      </LogoContainer>

      <NavMenu click={click}>
        <NavItem>
          <NavLink to="/" className="hoverElement" onClick={handleClick}>
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/about" className="hoverElement" onClick={handleClick}>
            About
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/projects" className="hoverElement" onClick={handleClick}>
            Projects
          </NavLink>
        </NavItem>
      </NavMenu>

      <Hamburger onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </Hamburger>
    </NavbarContainer>
  );
};

export default Navbar;

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------