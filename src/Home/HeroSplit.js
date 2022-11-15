import "./HeroSplit.css";
import img1 from "../images/sp1.png";
import img2 from "../images/sp2.png";
import img3 from "../images/sp3.png";

function HeroSplit() {
  return (
    <div className="split-container">
      <div className="logo-container1">
        <img className="imgg" src={img1}></img>
      </div>
      <div className="logo-container2">
        <img className="imgg" src={img2}></img>
      </div>
      <div className="logo-container3">
        <img className="imgg" src={img3}></img>
      </div>
    </div>
  );
}

export default HeroSplit;
