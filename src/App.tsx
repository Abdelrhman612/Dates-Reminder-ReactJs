import { Container } from "react-bootstrap";
import { Person } from "./data/data";
import DatesCount from "./components/DatesCount/DatesCount";
import Buttons from "./components/Buttons/Buttons";
import { useEffect, useState } from "react";
import "./index.css";
import DatesList from "./components/DatesList/DatesList";

function App() {
  // Initialize the state with the Person data
  const [personData, setPersonData] = useState(Person);

  // Function to clear all person data
  const handleDelete = () => {
    setPersonData([]);
  };

  // Function to reset person data to the original Person array
  const handleViewData = () => {
    setPersonData(Person);
  };

  // Clear person data when the component mounts
  useEffect(() => {
    setPersonData([]);
  }, []);

  return (
    <>
      <div className="font color-body">
        <Container className="py-5">
          {/* Display the count of person data */}
          <DatesCount datesCount={personData} />
          {/* Render the list of persons */}
          <DatesList person={personData} />
          {/* Render buttons for delete and reset actions */}
          <Buttons deleteData={handleDelete} onVewData={handleViewData} />
        </Container>
      </div>
    </>
  );
}

export default App;
