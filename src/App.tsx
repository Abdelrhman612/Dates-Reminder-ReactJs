import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
function App() {
  return (
    <>
      <div className="font color-body ">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col sm="8" className="">
              You have 4 appointments today
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="8" className="">
              <div className="rectangle"></div>
            </Col>
          </Row>
          <Row className="justify-content-center my-2">
            <Col sm="8" className="d-flex justify-content-between">
              <button className="btn-style p-2">Delete All </button>
              <button className="btn-style p-2">Display data</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
