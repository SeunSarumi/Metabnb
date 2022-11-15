import "./Cards.css";

import img1 from "../images/ad1.png";
import img2 from "../images/cd.png";
import img3 from "../images/cdf.png";
import img4 from "../images/cdd.png";
import img5 from "../images/cdd1.png";
import img6 from "../images/cdd2.png";
import img7 from "../images/cdd3.png";
import img8 from "../images/cdd4.png";

function Cards() {
  return (
    <div className="display">
      <img className="d-img" src={img1} alt="img"></img>
      <img className="d-img" src={img2} alt="img"></img>
      <img className="d-img" src={img3} alt="img"></img>
      <img className="d-img" src={img4} alt="img"></img>
      <img className="d-img" src={img5} alt="img"></img>
      <img className="d-img" src={img6} alt="img"></img>
      <img className="d-img" src={img7} alt="img"></img>
      <img className="d-img" src={img8} alt="img"></img>
    </div>
  );
}

export default Cards;
