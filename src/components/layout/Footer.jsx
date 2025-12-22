import styled from "styled-components";
import { bannerMain720 } from "../../assets";

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #ffffff;
  padding: 80px 0 40px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 40px;

  /* @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  } */
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  img {
    width: 180px;
    height: auto;
  }
`;

const BrandTitle = styled.h3`
  color: #e00017;
  font-size: 20px;
  margin: 0;
`;

const BrandText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.85;
  max-width: 360px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ColumnTitle = styled.h4`
  font-size: 16px;
  margin: 0;
`;

const Link = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #ffffff;
  opacity: 0.75;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 1;
  }
`;

const Bottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  opacity: 0.6;

  @media (max-width: 768px) {
    /* flex-direction: column; */
    gap: 12px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Top>
          <Brand>
          <img src={bannerMain720} alt="Limit-Breakers Familia logo" />
            {/* <BrandTitle>Limit-Breakers Familia</BrandTitle> */}
            {/* <BrandText>
              Gildia zrodzona z porażki, rozwijana przez determinację i
              utrzymywana przez ludzi, którzy nie boją się łamać kolejnych
              limitów.
            </BrandText> */}
          </Brand>

          <Column>
            {/* <ColumnTitle>Nawigacja</ColumnTitle> */}
            <Link onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
              O nas
            </Link>
            <Link onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}>
              Galeria
            </Link>
            <Link onClick={() => document.getElementById("recruitment")?.scrollIntoView({ behavior: "smooth" })}>
              Rekrutacja
            </Link>
          </Column>

          <Column>
            {/* <ColumnTitle>Społeczność</ColumnTitle> */}
            <Link onClick={() => window.open("https://discord.gg/WNQusj9F", "_blank")}>
              Discord
            </Link>
            <Link onClick={() => window.open("https://www.youtube.com/@Limit-BreakersFamilia", "_blank")}>
              YouTube
            </Link>
            {/* <Link disabled style={{ opacity: 0.4, cursor: "default" }}>
              Więcej wkrótce
            </Link> */}
          </Column>
        </Top>

        <Bottom>
          <span>© {new Date().getFullYear()} Limit-Breakers Familia</span>
          <span>Bo limity są po to, żeby je łamać</span>
        </Bottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
