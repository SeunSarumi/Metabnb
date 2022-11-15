import "./Navbar2.css";
import { Link } from "react-router-dom";
import img1 from "../images/set-btn.png";

function Navbar2() {
  return (
    <div className="link-container">
      <Link className="lin2" to="#">
        Restaurant
      </Link>
      <Link className="lin2" to="#">
        Cottage
      </Link>
      <Link className="lin2" to="#">
        Castle
      </Link>
      <Link className="lin2" to="#">
        fantast city
      </Link>
      <Link className="lin2" to="#">
        beach
      </Link>
      <Link className="lin2" to="#">
        Carbins
      </Link>
      <Link className="lin2" to="#">
        Off-grid
      </Link>
      <Link className="lin2" to="#">
        Farm
      </Link>
      <img className="btn-img" src={img1}></img>
    </div>
  );
}

export default Navbar2;
