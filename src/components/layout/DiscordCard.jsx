import styled from "styled-components";
import { FaDiscord } from "react-icons/fa";

const Card = styled.div`
  background-color: #5865f2;
  color: #ffffff;
  padding: 24px 28px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  max-width: 520px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Icon = styled.div`
  font-size: 40px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;

    @media (max-width: 768px) {
   font-size: 24px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  margin: 0;
  opacity: 0.9;

      @media (max-width: 768px) {
   font-size: 20px;
  }
`;

const Button = styled.a`
  padding: 10px 18px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.25s ease, color 0.25s ease;

  &:hover {
    background-color: #ffffff;
    color: #5865f2;
  }

      @media (max-width: 768px) {
   font-size: 24px;
  }
`;

const DiscordCard = () => {
  return (
    <Card>
      <Content>
        <Icon>
          <FaDiscord />
        </Icon>

        <TextWrapper>
          <Title>Dołącz do naszej społeczności</Title>
          <Subtitle>Limit-Breakers Familia na Discordzie</Subtitle>
        </TextWrapper>
      </Content>

      <Button
        href="https://discord.gg/WNQusj9F"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dołącz już dziś
      </Button>
    </Card>
  );
};

export default DiscordCard;
