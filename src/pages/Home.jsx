import HeroSection from "../components/HeroSection";
import "./Home.css";
import SpotSection from "../components/SpotSection";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <SpotSection />
    </div>
  );
};

export default Home;
