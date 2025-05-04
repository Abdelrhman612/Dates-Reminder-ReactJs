import { Col, Row } from "react-bootstrap";
import { ButtonsProps } from "./interFace";

// The Buttons component receives two props: deleteData and onVewData
// - deleteData: A function to clear all data
// - onVewData: A function to reset and display the original data
const Buttons = ({ deleteData, onVewData }: ButtonsProps) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        {/* Button to trigger the deleteData function */}
        <button onClick={deleteData} className="btn-style p-2">
          Delete All{" "}
        </button>
        {/* Button to trigger the onVewData function */}
        <button onClick={onVewData} className="btn-style p-2">
          Display data
        </button>
      </Col>
    </Row>
  );
};

export default Buttons;
