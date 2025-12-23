import { AppContentWrapper } from "./styled-components/style.js";
import BannerImg from "./components/layout/BannerImg.jsx";
import AboutSection from "./components/layout/AboutSection.jsx";
import VideoSection from "./components/layout/VideoSection.jsx";
import RecruitmentSection from "./components/layout/RecruitmentSection.jsx";
import Footer from "./components/layout/Footer.jsx";
import Navbar from "./components/layout/Navbar.jsx";

function App() {
  return (
    <AppContentWrapper>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        <BannerImg />
        <AboutSection />
        <VideoSection />
        <RecruitmentSection />
      </main>
      <Footer />
    </AppContentWrapper>
  );
}

export default App;
