import { Col, Row } from "react-bootstrap";
import { RectnagleProps } from "./interFace";

const Rectnagle = ({ rectangle }: RectnagleProps) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle p-2">
          {rectangle.length ? (
            rectangle.map((data) => {
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
            <h2 className="P-5 text-center">There are no appointments today</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Rectnagle;
