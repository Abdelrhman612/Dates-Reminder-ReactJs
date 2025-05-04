import { Col, Row } from "react-bootstrap";

const Buttons = () => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button className="btn-style p-2">Delete All </button>
        <button className="btn-style p-2">Display data</button>
      </Col>
    </Row>
  );
};

export default Buttons;
