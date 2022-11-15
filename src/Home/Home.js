import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Adventure from "./Adventure";
import Hero from "./Hero";
import HeroSplit from "./HeroSplit";
import "./Home.css";
import LearnMore from "./LearnMore";

function Home() {
  return (
    <div>
      <div className="home">
        <Navbar></Navbar>
        <Hero />
      </div>
      <HeroSplit />
      <div className="home home2">
        <Adventure />
      </div>
      <LearnMore />
      <Footer />
    </div>
  );
}

export default Home;
