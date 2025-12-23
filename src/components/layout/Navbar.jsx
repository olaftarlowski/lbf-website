import { useState } from "react";
import styled from "styled-components";
import { bannerMain720 } from "../../assets";

const Nav = styled.nav`
  position: fixed;
  max-width: 1440px;
  top: 0;
  width: 100%;
  height: 64px;
  /* background-color: #ffffff; */
  background-color: #000;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-bottom: 1px solid #333;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.button`
  display: flex;
  align-items: center;
  background: #000;
  border-radius: 4px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;

  img {
    height: 40px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    position: absolute;
    top: 64px;
    right: 0;
    width: 100%;
    background-color: #000;
    border: 1px solid #333;

    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 100px 0;

    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-120%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #ccc;
  font-weight: 500;
  font-size: 28px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #a1122a;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;

  span {
    width: 24px;
    height: 2px;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    handleNavClick();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo onClick={scrollToTop} aria-label="Scroll to top">
          <img src={bannerMain720} alt="Logo" />
        </Logo>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

        <NavLinks isOpen={isOpen}>
          <NavLink href="#about" onClick={handleNavClick}>
            O nas
          </NavLink>
          <NavLink href="#gallery" onClick={handleNavClick}>
            Galeria
          </NavLink>
          <NavLink href="#recruitment" onClick={handleNavClick}>
            Rekrutacja
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
