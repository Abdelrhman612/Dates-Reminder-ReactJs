import { Col, Row } from "react-bootstrap";
import { ButtonsProps } from "./interFace";

const Buttons = ({ deleteData, onVewData }: ButtonsProps) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button onClick={deleteData} className="btn-style p-2">
          Delete All{" "}
        </button>
        <button onClick={onVewData} className="btn-style p-2">
          Display data
        </button>
      </Col>
    </Row>
  );
};

export default Buttons;
