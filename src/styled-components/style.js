import styled from "styled-components";

export const AppContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #fff;

  @media (max-width: 768px) {
    margin-top: 64px;
    padding: 0 16px;
  }

  /* border: 2px solid red; */
`;

export const BannerWrapper = styled.div`
  .banner-img {
    width: 70%;
  }
`;
