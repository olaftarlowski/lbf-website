import {
  bannerMain1920,
  // bannerMain1440,
  bannerMain720,
  // bannerTavern1920,
} from "../assets";
import useMobile from "../components/hooks/useMobile";

const Home = () => {
  const isMobile = useMobile();

  return (
    <div>
      <h1>Limit Breakers Familia</h1>
      <p>UNDER CONSTRUCTION</p>
      {isMobile ? (
        <img
          className="test-img"
          src={bannerMain720}
          alt="fist breaking through the screen"
        />
      ) : (
        <img
          className="test-img"
          src={bannerMain1920}
          alt="fist breaking through the screen"
        />
      )}

      {/* <img className="test-img" src={bannerMain1440} alt="fist breaking through the screen" /> */}

      {/* <img className="test-img" src={bannerTavern1920} alt="fist breaking through the screen" /> */}
    </div>
  );
};

export default Home;
