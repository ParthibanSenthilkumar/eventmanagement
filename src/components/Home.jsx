import React, { useEffect, useState } from "react";
import Header from "./Header";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import UserModal from "./UserModal";
import Loader from "./Loader";
import { errorToast } from "./Toaster";
import eventImg from "../assets/images/event_img.jpg";

const Home = () => {
  const [EventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [CurrentEvent, setEvent] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (eventData) => {
    setEvent(eventData);
    setShow(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let responseData = await axios.get(
          "https://task-668b3-default-rtdb.firebaseio.com/event.json",
        );
        console.log(responseData.data);
        let resarry = [];
        for (let key in responseData.data) {
          resarry.push({
            id: key,
            ...responseData.data[key],
          });
        }
        setEventList(resarry);
        console.log(resarry);
      } catch (error) {
        errorToast(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row className="mt-5">
          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "70vh" }}
            >
              <Loader />
            </div>
          ) : (
            EventList.map((eventsdata) => (
              <Col lg={12} key={eventsdata.id}>
                <Card className="mb-3">
                  <Card.Img variant="left" src={eventImg} />
                  <Card.Body>
                    <h2>{eventsdata.Eventname}</h2>
                    <Card.Text>
                      <i className="fa-solid fa-map-pin"></i>{" "}
                      {eventsdata.location}
                    </Card.Text>
                    <Card.Text>
                      <i className="fa-solid fa-layer-group"></i>{" "}
                      {eventsdata.category}
                    </Card.Text>
                    <Card.Text>
                      <i className="fa-solid fa-align-center"></i>{" "}
                      {eventsdata.description}
                    </Card.Text>
                  </Card.Body>
                  <Button
                    onClick={() => handleShow(eventsdata)}
                    className="but cta-but"
                  >
                    Book
                  </Button>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
      <UserModal
        show={show}
        handleClose={handleClose}
        Eventinfo={CurrentEvent}
      />
    </>
  );
};

export default Home;
