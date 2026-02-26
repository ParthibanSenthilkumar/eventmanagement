import React, { useEffect, useState } from "react";
import Header from "./Header";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import UserModal from "./UserModal";

const Home = () => {
  const [EventList, setEventList] = useState([]);
  const [isError, setError] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
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
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
        <Container>
          {isError}
          <Row className="mt-5">
            {EventList.map((eventsdata) => (
              <Col lg={4} md={6} sm={12} key={eventsdata.id}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title><strong>Eventname:</strong> {eventsdata.Eventname}</Card.Title>
                    <Card.Text>
                      <strong>description:</strong> {eventsdata.description}
                    </Card.Text>
                    <Card.Text>
                      <strong>category:</strong> {eventsdata.category}
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                      Book
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      <UserModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Home;
