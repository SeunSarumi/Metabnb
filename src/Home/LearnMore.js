import "./LearnMore.css";
import img from "../images/slant.png";

function LearnMore() {
  return (
    <div className="lm-container">
      <div className="words">
        <p className="head-text">Metabnb NFTs</p>
        <p className="text">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services
        </p>
        <a className="learn-btn">Learn more</a>
        <div className="img-container">
          <img className="lm-img" src={img} alt="img"></img>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
