import React from "react";
import "./Home.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = ({Title,price,image}) => {
  return (
    <div className="caa">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{Title}</Card.Title>
            <Card.Text>$ {price}</Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
    </div>
  );
};

export default Home;
