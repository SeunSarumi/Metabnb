import "./Adventure.css";
import img1 from "../images/ad1.png";
import img2 from "../images/ad2.png";
import Cards from "./Cards";

function Adventure() {
  return (
    <div className="add-container">
      <div className="add">
        <h1>Inspiration for your next adventure</h1>
      </div>
      <Cards />
    </div>
  );
}

export default Adventure;
