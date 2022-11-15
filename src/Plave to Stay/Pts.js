import Navbar from "../Navbar/Navbar";
import Navbar2 from "./Navbar2";
import "./Pts.css";
import PtsCard from "./PtsCard";
import Footer from "../Footer/Footer";

function Pts() {
  return (
    <div>
      <div className="pts">
        <Navbar></Navbar>
      </div>
      <div className="pts2">
        <Navbar2></Navbar2>
      </div>
      <PtsCard />
      <Footer />
    </div>
  );
}

export default Pts;
