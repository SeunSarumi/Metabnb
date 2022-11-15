import "./Wallet.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import fox from "../images/fox.png";
import wollet from "../images/wollet.png";

function Wallet(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      font-family="Red Rose contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Connect Wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="oomp">
        <div className="wrords">
          <p>Choose your preferred wallet</p>
        </div>
      </Modal.Body>

      <Modal.Footer className="linki-box">
        <div className="linkks">
          <div className="tp-link">
            <img src={fox} alt="..." className="fox" />
            <a href="#" className="loink1">
              Metamask
            </a>
            <a className="arrow1">></a>
          </div>
          <div className="bt-link">
            <img src={wollet} alt="..." className="woll" />
            <a href="#" className="loink2">
              WalletConnect
            </a>
            <a className="arrow2">></a>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default Wallet;

// render(<Wallet />);
