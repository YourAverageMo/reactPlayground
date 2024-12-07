import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button id="Decrement" onClick={decreaseCount}>
        Decrement
      </button>
      <button id="reset" onClick={resetCount}>
        reset
      </button>
      <button id="increment" onClick={increaseCount}>
        increment
      </button>
    </div>
  );

  // const [name, setName] = useState("guest");
  // const [age, setAge] = useState(0);
  // const [isEmployed, setIsEmployed] = useState(false);

  // const updateName = () => {
  //   setName("spongebob");
  // };

  // const incrementAge = () => {
  //   setAge(age + 1);
  // };

  // const toggleEmployedStatus = () => {
  //   setIsEmployed(!isEmployed);
  // };

  // return (
  //   <div>
  //     <p>Name: {name}</p>
  //     <button onClick={updateName}>Set Name</button>

  //     <p>age: {age}</p>
  //     <button onClick={incrementAge}>Increment Age</button>

  //     <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
  //     <button onClick={toggleEmployedStatus}>Toggle Status</button>
  //   </div>
  // );
}

export default MyComponent;
