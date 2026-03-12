import { useState } from "react";

function App() {
  let [name, setName] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <p>You typed: {name}</p>
    </>
  );
}
export default App;
