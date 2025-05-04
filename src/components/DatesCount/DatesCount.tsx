import { Col, Row } from "react-bootstrap";
import { DatesCountProps } from "./interFace";

const DatesCount = ({ datesCount }: DatesCountProps) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="">
        You have {datesCount.length} appointments today
      </Col>
    </Row>
  );
};

export default DatesCount;
