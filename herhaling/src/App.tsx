import React, { useRef } from "react";

const App = () => {
  const myRef = useRef(0);

  const handleClick = () => {
    myRef.current += 1;
    console.log(myRef.current);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>{myRef.current}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default App;
