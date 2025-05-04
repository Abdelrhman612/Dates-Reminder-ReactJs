import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
function App() {
  return (
    <>
      <div className="font color-body ">
        <Container className="py-5">
          <Row className="justify-content-center my-2">
            <Col sm="8" className="">
              You have 4 appointments today
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="8" className="">
              <div className="rectangle">
                <div className="d-flex border-bottom mx-3">
                  <img
                    className="img-avatar p-0"
                    src="src\public\1555754.png"
                    alt="Profile"
                  />
                  <div className="px-2">
                    <p className="d-inline fs-5 ">gamal amin</p>
                    <p className=" fs-6">2pm</p>
                  </div>
                </div>
                <div className="d-flex border-bottom mx-3">
                  <img
                    className="img-avatar p-0"
                    src="src\public\1555754.png"
                    alt="Profile"
                  />
                  <div className="px-2">
                    <p className="d-inline fs-5 ">Abdelrhman samy</p>
                    <p className=" fs-6">4pm</p>
                  </div>
                </div>
                <div className="d-flex border-bottom mx-3">
                  <img
                    className="img-avatar p-0"
                    src="src\public\1555754.png"
                    alt="Profile"
                  />
                  <div className="px-2">
                    <p className="d-inline fs-5 ">Ahmed Ali</p>
                    <p className=" fs-6">7pm</p>
                  </div>
                </div>
                <div className="d-flex border-bottom mx-3">
                  <img
                    className="img-avatar p-0"
                    src="src\public\1555754.png"
                    alt="Profile"
                  />
                  <div className="px-2">
                    <p className="d-inline fs-5 ">samy Ahmed</p>
                    <p className=" fs-6">10Am</p>
                  </div>
                </div>
                <div className="d-flex border-bottom mx-3">
                  <img
                    className="img-avatar p-0"
                    src="src\public\1555754.png"
                    alt="Profile"
                  />
                  <div className="px-2">
                    <p className="d-inline fs-5 ">ramy samih</p>
                    <p className=" fs-6">11Am</p>
                  </div>
                </div>
                <div className="d-flex border-bottom mx-3">
                  <img
                    className="img-avatar p-0"
                    src="src\public\1555754.png"
                    alt="Profile"
                  />
                  <div className="px-2">
                    <p className="d-inline fs-5 ">Karim mohamed</p>
                    <p className=" fs-6">8pm</p>
                  </div>
                </div>
                <div className="d-flex border-bottom mx-3">
                  <img
                    className="img-avatar p-0"
                    src="src\public\1555754.png"
                    alt="Profile"
                  />
                  <div className="px-2">
                    <p className="d-inline fs-5 ">islam samier</p>
                    <p className=" fs-6">9Am</p>
                  </div>
                </div>
                <div className="d-flex border-bottom mx-3">
                  <img
                    className="img-avatar p-0"
                    src="src\public\1555754.png"
                    alt="Profile"
                  />
                  <div className="px-2">
                    <p className="d-inline fs-5 ">sophy adel</p>
                    <p className=" fs-6">12pm</p>
                  </div>
                </div>
              </div>
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
