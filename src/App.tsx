import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
function App() {
  const Person = [
    {
      id: 1,
      name: "gamal amin",
      time: "2pm",
      image: "src/public/1555754.png",
    },
    {
      id: 2,
      name: "Abdelrhman samy",
      time: "4pm",
      image: "src/public/1555754.png",
    },
    {
      id: 3,
      name: "Ahmed Ali",
      time: "7pm",
      image: "src/public/1555754.png",
    },
    {
      id: 4,
      name: "samy Ahmed",
      time: "10Am",
      image: "src/public/1555754.png",
    },
    {
      id: 5,
      name: "ramy samih",
      time: "11Am",
      image: "src/public/1555754.png",
    },
    {
      id: 6,
      name: "Karim mohamed",
      time: "8pm",
      image: "src/public/1555754.png",
    },
    {
      id: 7,
      name: "islam samier",
      time: "9Am",
      image: "src/public/1555754.png",
    },
    {
      id: 8,
      name: "sophy adel",
      time: "12pm",
      image: "src/public/1555754.png",
    },
  ];
  return (
    <>
      <div className="font color-body ">
        <Container className="py-5">
          <Row className="justify-content-center my-2">
            <Col sm="8" className="">
              You have {Person.length} appointments today
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="8" className="">
              <div className="rectangle p-2">
                {Person.length ? (
                  Person.map((data) => {
                    return (
                      <div className="d-flex border-bottom mx-3" key={data.id}>
                        <img
                          className="img-avatar p-0"
                          src={data.image}
                          alt="Profile"
                        />
                        <div className="px-2">
                          <p className="d-inline fs-5 ">{data.name}</p>
                          <p className=" fs-6">{data.time}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h2 className="P-5 text-center">
                    There are no appointments today
                  </h2>
                )}
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
