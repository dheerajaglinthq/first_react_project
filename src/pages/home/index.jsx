import Navbar from "../../components/common/Navbar";
import HeroSection from "../../components/HeroSection";
import OurServices from "../../components/OurServices";
import WhySection from "../../components/WhySection";
import AboutSection from "../../components/AboutSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <OurServices/>
      <WhySection/>
      <AboutSection/>

    </div>
  );
};

export default HomePage;


