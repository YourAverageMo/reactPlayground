import React, { useEffect, useState } from "react";

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener(`resize`, handleResize);

    return () => {
      window.removeEventListener(`resize`, handleResize);
    };
  });

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>window width: {width}px</p>
      <p>window height: {height}px</p>
    </>
  );
}

export default MyComponent;
