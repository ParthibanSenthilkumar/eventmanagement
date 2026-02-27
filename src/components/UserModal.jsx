import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const UserModal = ({ show, handleClose }) => {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  
  const handleSubmit =  (e) => {
    e.preventDefault();
    handleClose()
  }

  return (

    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form >
          <div className="form_control">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_control">
            <label htmlFor="password">password</label>
            <input
              type="password"
              placeholder="Enter Your password"
              value={userPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserModal;
