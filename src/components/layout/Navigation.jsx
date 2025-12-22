import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: relative;
  top: 0;
  width: 100%;
  max-width: 1200px;
  height: 64px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  z-index: 1000;

  border-bottom: 1px solid #444;

    @media (max-width: 768px) {
    position: fixed;
    }
`;

const NavList = styled.ul`
  display: flex;
  /* gap: 40px; */
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 64px;
    left: 0;
    width: 100%;
    height: calc(100vh - 64px);
    background-color: #000;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.35s ease;
  }
`;

const NavItem = styled.li`
    /* display: flex;
    justify-content: center;
    align-items: center;

      &:hover {
    color: #ff2a3a;
    background-color: yellow;
    transform: translateY(-1px);
  } */
    `;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #e00017;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;

      width: 100%;
    height: 100%;

        &:hover {
    color: #ff2a3a;
    background-color: #1a1a1a;
    /* transform: translateY(-1px); */
  }


  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const BurgerLine = styled.span`
  width: 24px;
  height: 2px;
  background-color: #e00017;
  transition: transform 0.3s ease, opacity 0.3s ease;
`;

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <Nav>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <BurgerLine
          style={{
            transform: isOpen ? "rotate(45deg) translateY(8px)" : "none",
          }}
        />
        <BurgerLine style={{ opacity: isOpen ? 0 : 1 }} />
        <BurgerLine
          style={{
            transform: isOpen ? "rotate(-45deg) translateY(-8px)" : "none",
          }}
        />
      </Burger>

      <NavList isOpen={isOpen}>
        <NavItem>
          <NavButton onClick={() => handleClick("about")}>O nas</NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={() => handleClick("gallery")}>Galeria</NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={() => handleClick("recruitment")}>
            Rekrutacja
          </NavButton>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
