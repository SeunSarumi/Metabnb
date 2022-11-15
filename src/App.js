import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Pts from "./Plave to Stay/Pts";
import Home from "./Home/Home";
import Wallet from "./Modal/Wallet";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} render={<Home />} />
          <Route path="/pts" element={<Pts />} render={<Pts />} />
          {/* <Route path="/wallet" element={<Wallet />} render={<Wallet />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
