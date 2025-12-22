import {
  bannerMain1920,
  // bannerMain1440,
  bannerMain720,
  // bannerTavern1920,
} from "../../assets/index.js";
import useMobile from "../hooks/useMobile.jsx";
import { BannerWrapper } from "../../styled-components/style.js";

const BannerImg = () => {
  const isMobile = useMobile();

  return (
    <BannerWrapper>
      {isMobile ? (
        <img
          className="banner-img"
          src={bannerMain720}
          alt="fist breaking through the screen"
        />
      ) : (
        <img
          className="banner-img"
          src={bannerMain1920}
          alt="fist breaking through the screen"
        />
      )}
    </BannerWrapper>
  );
};

export default BannerImg;
