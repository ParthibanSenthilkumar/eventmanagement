import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const UserModal = ({ show, handleClose, Eventinfo }) => {
  const [userEmail, setEmail] = useState("");
  console.log(Eventinfo?.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://task-668b3-default-rtdb.firebaseio.com/booking.json`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          Eventinfo,
          Email: userEmail,
        }), 
      },
    );
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>EventName:{Eventinfo?.Eventname}</h3>
          <p>Location:{Eventinfo?.location}</p>
          <form>
            <div className="form_control">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={userEmail}
                onChange={(e) => setEmail(e.target.value)}
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
