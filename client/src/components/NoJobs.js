import React from "react";
import { Card } from "react-bootstrap";
import sorry from "../images/sorry.jpg";

export default function NoJobs() {
  return (
    <Card className="my-4 p-5" style={{ width: "100%" }}>
      <Card.Img variant="top" src={sorry} height={500} />
      <Card.Body>
        <Card.Title>No Jobs Found</Card.Title>
        <Card.Text>
          Sorry, no jobs are available with the requirements you have entered.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
