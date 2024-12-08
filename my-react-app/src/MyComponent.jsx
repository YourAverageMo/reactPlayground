import React, { useEffect, useRef, useState } from "react";

function MyComponent() {
  let [number, setNumber] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDER!");
  });

  function handleClick() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>click me!</button>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default MyComponent;
