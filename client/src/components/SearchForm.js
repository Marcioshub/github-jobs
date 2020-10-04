import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import usa from "../us_states/usa.json";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import NoJobs from "./NoJobs";

export default function SearchForm() {
  const [states, setStates] = useState([]);
  const [description, setDescription] = useState("");
  const [fulltime, setFulltime] = useState(false);
  const [location, setLocation] = useState("");
  const { jobs, empty, getJobs } = useFetchJobs();

  useEffect(() => {
    setStates(usa);
  }, []);

  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control
              placeholder="Keyword"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              as="select"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select state</option>
              {states.map((s) => (
                <option key={s.abbreviation} value={s.abbreviation}>
                  {s.name}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mt-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Full time position?"
                onChange={(e) => setFulltime(e.target.checked)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="primary"
              onClick={() => getJobs(description, location, fulltime)}
            >
              Search
            </Button>
          </Col>
        </Row>
        <Row>
          <Job jobs={jobs} />
          {empty ? <NoJobs /> : null}
        </Row>
      </Form>
    </div>
  );
}
