import styled from "styled-components";
import { limitImg } from "../../assets/index.js";
import { SlFire } from "react-icons/sl";
import { LuSword } from "react-icons/lu";
import { GiBroadsword } from "react-icons/gi";
import { css } from "styled-components";

const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const Section = styled.section`
  background-color: #000;
  color: #ffffff;
  padding: 120px 24px 80px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 20px 40px;
  }

  hr {
    border: none;
    height: 1px;
    background-color: #444;
    margin: 16px 0;
  }
`;

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .two-articles {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    article {
      width: 48%;
    }
  }

  @media (max-width: 768px) {
    gap: 48px;

    .two-articles {
      flex-direction: column;

      article {
        width: 100%;
      }
    }
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    margin: 0;
  }
`;

const Title = styled.h2`
  color: #a1122a;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  /* text-align: left; */

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.7;
  opacity: 0.9;

  strong {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 22px;

    strong {
      font-size: 26px;
    }
  }
`;

const Quote = styled.blockquote`
  border-left: 3px solid #a1122a;
  padding-left: 20px;
  font-style: italic;
  opacity: 0.95;
  text-align: left;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 20px;
  opacity: 0.9;

  &::before {
    content: "-";
    position: absolute;
    left: 0;
    color: #a1122a;
  }
`;

const AboutSection = () => {
  const HiddenH1 = styled.h1`
    ${visuallyHidden}
  `;

  return (
    <Section id="about">
      <HiddenH1>Limit Breakers Familia</HiddenH1>
      <Container>
        <Article>
          <Paragraph>
            Pewnego dnia, na dalekich ziemiach starego świata Albionu - jeszcze
            zanim portale zaprowadziły wszystkich na nowe serwery - dwóch obcych
            sobie ludzi spotkało się przypadkiem.
          </Paragraph>

          <Paragraph>
            Nie połączyła ich strategia. Nie połączyły ich buildy.
          </Paragraph>

          <Paragraph>
            Połączyła ich porażka tak spektakularna, że zamiast rage-quita padło
            jedno, brzemienne w skutkach zdanie:
          </Paragraph>

          <Quote>„Dobra… jeszcze raz. Ale tym razem bez limitów.”</Quote>
        </Article>
        <hr />
        <Article>
          <Paragraph>
            Tym człowiekiem był <strong>PanFausT</strong> - wizjoner, który
            zamiast szukać idealnych warunków, wolał stworzyć własne.
          </Paragraph>

          <Paragraph>
            U jego boku od samego początku stał <strong>Kacper17</strong> -
            prawa ręka, głos rozsądku (czasem), dowódca, który potrafił zamienić
            chaos w plan… albo przynajmniej w kontrolowany chaos.
          </Paragraph>

          <Paragraph>
            Tak właśnie narodziła się <strong>Limit-Breakers Familia</strong>.
          </Paragraph>
        </Article>
        <img src={limitImg} alt="Limit Breakers Familia squad" />
        <div className="two-articles">
          <Article>
            <Title> Początki bez granic</Title>

            <Paragraph>
              Gildia powstała na amerykańskim serwerze, w czasach, gdy wszystko
              było nowe, niepewne i brutalne. Nie było zalecza. Nie było sławy.
              <br />
              Były tylko tanie mounty, dziwne buildy i przekonanie, że każdy
              limit istnieje tylko do pierwszego starcia
            </Paragraph>

            <Paragraph>
              Do Familii zaczęli dołączać wojownicy, rzemieślnicy oraz tacy,
              którzy przyszli „na chwilę”… i zostali na długo.
            </Paragraph>
          </Article>

          <Article>
            <Title>Nowy świat, ta sama Familia</Title>

            <Paragraph>
              Gdy Albion otworzył nowe serwery, wielu zawahało się przed
              kolejnym początkiem.
            </Paragraph>

            <Paragraph>
              Zebraliśmy doświadczenie, blizny i stare historie - i ruszyliśmy
              dalej.
            </Paragraph>

            <Paragraph>
              Zmienił się serwer. Zmieniły się mapy. Ale duch gildii pozostał
              ten sam.
            </Paragraph>
          </Article>
        </div>
        <hr />
        <Article>
          <Title>
            <GiBroadsword color="white" /> Kim jesteśmy dzisiaj?{" "}
            <LuSword color="white" />
          </Title>

          <Paragraph>
            Wolimy wyjść w teren niż stać w mieście. <br /> Wolimy przegrać
            razem niż wygrać solo. <br />
            Wiemy, że najlepsze legendy zaczynają się od słów „to nie powinno
            się udać…”
            <br />
            Walczymy. Farmimy. Testujemy. Czasem zwyciężamy, czasem uczymy się
            na błędach - ale nigdy nie cofamy się przed kolejnym limitem do
            złamania.
          </Paragraph>
        </Article>
        <hr />
        <Article>
          <Title>
            <SlFire color="gold" /> Zasada Familii <SlFire color="gold" />
          </Title>

          <Paragraph>Nie liczy się gear. Nie liczy się fame.</Paragraph>

          <Paragraph>
            Bo limity są po to, żeby je łamać. A <br />{" "}
            <strong>Limit-Breakers Familia</strong> <br /> - po to, żeby zawsze
            mieć do kogo wrócić po respawnie.
          </Paragraph>

          <Quote>Liczy się to, czy masz odwagę spróbować.</Quote>
        </Article>
      </Container>
    </Section>
  );
};

export default AboutSection;
