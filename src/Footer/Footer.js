import "./Footer.css";
import img1 from "../images/foot-icn.png";
import img2 from "../images/fb.png";
import img3 from "../images/ins.png";
import img4 from "../images/twitt.png";

function Footer() {
  return (
    <div className="foot-container">
      <div className="icon-container">
        <img src={img1} className="icn"></img>
        <div className="icn-c2">
          <img src={img2} className="icn-fb"></img>
          <img src={img3} className="icn-ins"></img>
          <img src={img4} className="icn-twitt"></img>
        </div>
        <p className="copy">© 2022 Metabnb</p>
      </div>
      <div className="link1-container">
        <a className="boss">Community</a>
        <a className="child child1">NFT</a>
        <a className="child">Tokens</a>
        <a className="child">Landlord</a>
        <a className="child">Discord</a>
      </div>
      <div className="link2-container">
        <a className="boss">Places</a>
        <a className="child child1">Castle</a>
        <a className="child">Farms</a>
        <a className="child">Beach</a>
        <a className="child">Learn more</a>
      </div>
      <div className="link3-container">
        <a className="boss">About us</a>
        <a className="child child1">Road map</a>
        <a className="child">Creators</a>
        <a className="child">Career</a>
        <a className="child">Contact</a>
      </div>
    </div>
  );
}

export default Footer;
