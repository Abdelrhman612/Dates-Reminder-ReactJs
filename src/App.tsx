import { Container } from "react-bootstrap";
import "./index.css";
import { Person } from "./data/data";
import DatesCount from "./components/DatesCount/DatesCount";
import Rectnagle from "./components/Rectangle/Rectnagle";
import Buttons from "./components/Buttons/Buttons";
function App() {
  return (
    <>
      <div className="font color-body ">
        <Container className="py-5">
          <DatesCount datesCount={Person} />
          <Rectnagle rectangle={Person} />
          <Buttons />
        </Container>
      </div>
    </>
  );
}

export default App;
