import Home from "./pages/Home";
// import './App.css'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import useMobile from './components/hooks/useMobile'
import { AppContentWrapper } from "./styled-components/style.js";
import BannerImg from "./components/layout/BannerImg.jsx";
import Navigation from "./components/layout/Navigation.jsx";
import AboutSection from "./components/layout/AboutSection.jsx";
import VideoSection from "./components/layout/VideoSection.jsx";
import RecruitmentSection from "./components/layout/RecruitmentSection.jsx";
import Footer from "./components/layout/Footer.jsx";
import Navbar from "./components/layout/Navbar.jsx";

function App() {
  // const [count, setCount] = useState(0)
  //  const isMobile = useMobile();

  return (
    <AppContentWrapper>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        <BannerImg />
        {/* <Navigation /> */}
        <AboutSection />
        <VideoSection />
        <RecruitmentSection />
      </main>
      <Footer />
    </AppContentWrapper>
  );
}

export default App;
