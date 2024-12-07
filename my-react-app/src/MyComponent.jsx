import React, { useState } from "react";

function MyComponent() {
  const [cars, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCar((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCar(c => c.filter((_,i) => i !== index));
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <>
      <div className="cars-list-container">
        <h1>List of Car Objects</h1>
        <ul className="cars-list">
          {cars.map((car, index) => (
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} />
        <input
          type="text"
          value={carMake}
          placeholder="Enter Car Make"
          onChange={handleMakeChange}
        />
        <input
          type="text"
          value={carModel}
          placeholder="Enter Car Model"
          onChange={handleModelChange}
        />
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </>
  );
}

export default MyComponent;
