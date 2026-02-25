import React, { useState } from "react";
import Header from "./Header";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Container } from "react-bootstrap";

const Home = () => {
  const [EventList, setEventList] = useState([]);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={4}>
            {EventList.map((eventsdata) => {
              <Card key={eventsdata.id}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
