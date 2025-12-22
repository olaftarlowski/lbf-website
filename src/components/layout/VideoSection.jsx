import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  background-color: #000;
  padding: 60px 0;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 */
  overflow: hidden;
  border-radius: 8px;
`;

const Iframe = styled.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const VideoSection = () => {
  return (
    <Section id="gallery">
      <VideoWrapper>
        <VideoContainer>
          <Iframe
            src="https://www.youtube.com/embed/1C1bFgVU_NA"
            title="Limit-Breakers Familia Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </VideoWrapper>
    </Section>
  );
};

export default VideoSection;
