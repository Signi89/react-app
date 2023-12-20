import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

function ListGroup() {
  let cities = ["New York", "Paris", "San-Francisco", "Tokyo", "London"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {cities.map((cities, index) => (
          <li
            className={
              selectedIndex === index 
              ? "list-group-cities active"
            :"list-group-item" }
            key={cities}
            onClick ={() => { setSelectedIndex(index) }}
          >
            {cities}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
