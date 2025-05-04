import { Col, Row } from "react-bootstrap";
import { Person } from "./interFace";

// The Rectnagle component receives a 'person' prop, which is an array of Person objects.
const DatesList = ({ person }: { person: Person[] }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle p-2">
          {/* Check if the 'person' array has data */}
          {person.length ? (
            // If the array has data, map through it and render each person's details
            person.map((data) => {
              return (
                <div key={data.id} className="d-flex border-bottom mx-3">
                  {/* Render the person's image */}
                  <img
                    className="img-avatar p-0"
                    src={data.image}
                    alt="Profile"
                  />
                  <div className="px-2">
                    {/* Render the person's name */}
                    <p className="d-inline fs-5 ">{data.name}</p>
                    {/* Render the person's time */}
                    <p className=" fs-6">{data.time}</p>
                  </div>
                </div>
              );
            })
          ) : (
            // If the array is empty, display a message
            <h2 className="P-5 text-center">There are no appointments today</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;
