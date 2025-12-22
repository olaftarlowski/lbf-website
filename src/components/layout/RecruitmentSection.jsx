import styled from "styled-components";
import DiscordCard from "./DiscordCard.jsx";
import { bannerTavern1920 } from "../../assets";

import { RiNumber1, RiNumber2, RiNumber3  } from "react-icons/ri";


const Section = styled.section`
  background-color: #000;
  color: #ffffff;
  padding: 60px 24px 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 96px 20px 80px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (max-width: 768px) {
    gap: 48px;
  }
`;

const Header = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: #e00017;
  text-align: left;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.7;
  opacity: 0.9;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RightColumn = styled.div`
  min-height: 200px;
  /* border: 1px dashed rgba(255, 255, 255, 0.15); */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* opacity: 0.4; */
`;

const Step = styled.div`
  display: flex;
  gap: 16px;
`;

const StepNumber = styled.span`
  color: #e00017;
  font-weight: 600;

      @media (max-width: 768px) {
 font-size: 36px;
  }
`;

const StepText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  text-align: left;

    @media (max-width: 768px) {
font-size: 22px;
  }
`;

const RecruitmentSection = () => {
  return (
    <Section id="recruitment">
      <Container>
        <Header>
          <Title>Rekrutacja</Title>
          <Description>
            Wejdź do naszej karczmy! Nie szukamy perfekcyjnych statystyk ani idealnych buildów.
            Szukamy ludzi, którzy chcą grać, próbować i rozwijać się razem z
            gildią.
          </Description>
        </Header>

        <ImageWrapper>
          <Image
            src={bannerTavern1920}
            alt="Rekrutacja do Limit-Breakers Familia"
          />
        </ImageWrapper>

        <ContentGrid>
          <LeftColumn>
            <Step>
              <StepNumber><RiNumber1 /></StepNumber>
              <StepText>
                Dołącz na serwer Discord i wypełnij podanie rekrutacyjne.
              </StepText>
            </Step>

            <Step>
              <StepNumber><RiNumber2 /></StepNumber>
              <StepText>
                Krótka rozmowa z rekruterem – bez przesłuchań, bez presji, po prostu
                chcemy się poznać.
              </StepText>
            </Step>

            <Step>
              <StepNumber><RiNumber3 /></StepNumber>
              <StepText>
                Wspólny wypad w teren i niezapomniane przygody!
              </StepText>
            </Step>
          </LeftColumn>

          <RightColumn>
            <DiscordCard />
          </RightColumn>
        </ContentGrid>
      </Container>
    </Section>
  );
};

export default RecruitmentSection;
