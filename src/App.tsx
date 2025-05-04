import { Container } from "react-bootstrap";
import { Person } from "./data/data";
import DatesCount from "./components/DatesCount/DatesCount";
import Rectnagle from "./components/DatesList/DatesList";
import Buttons from "./components/Buttons/Buttons";
import { useState } from "react";
import "./index.css";

function App() {
  const [personData, setPersonData] = useState(Person);
  const OnDlelete = () => {
    setPersonData([]);
  };
  const OnVewData = () => {
    setPersonData(Person);
  };
  return (
    <>
      <div className="font color-body ">
        <Container className="py-5">
          <DatesCount datesCount={personData} />
          <Rectnagle rectangle={personData} />
          <Buttons deleteData={OnDlelete} onVewData={OnVewData} />
        </Container>
      </div>
    </>
  );
}

export default App;
