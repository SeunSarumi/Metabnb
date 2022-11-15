import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";
import nlogo from "../images/nlogo.jpg";
import Wallet from "../Modal/Wallet";

function Navbar() {
  const [modalShow, setModalShow] = React.useState(false);

  // `function openModal() {
  //   setShowModal((prev) => !prev);
  // }`

  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="house" className="hlogo"></img>
        <img src={nlogo} className="nlogo" alt="words"></img>
      </div>
      <div className="links">
        <Link className="lin" to="/">
          Home
        </Link>
        <Link className="lin" to="/Pts">
          Place to stay
        </Link>
        <Link className="lin">NFTS</Link>
        <Link className="lin">Community</Link>
      </div>

      <button onClick={() => setModalShow(true)} className="wallet-btn">
        Connect Wallet
      </button>

      <Wallet show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Navbar;
