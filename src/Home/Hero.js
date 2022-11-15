import "./Hero.css";
import img1 from "../images/hero1.png";
import img2 from "../images/hero2.png";
import img3 from "../images/hero3.png";
import img4 from "../images/hero4.png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <div className="text-1">
          <p>
            Rent a <l>Place</l> away from <l>Home</l> in the <l>Metaverse</l>
          </p>
        </div>
        <div className="text-2">
          <p>
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="location-btn">
            <input className="loc"></input>
            <button className="search-btn">Search</button>
            <div className="hero-img">
              <img className="img1" src={img1} alt="stuff1"></img>
              <img className="img2" src={img2} alt="stuff2"></img>
              <img className="img3" src={img3} alt="stuff3"></img>
              <img className="img4" src={img4} alt="stuff3"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
