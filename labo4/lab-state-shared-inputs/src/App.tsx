import { useState } from "react";

type InputFieldsProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
const InputFields = ({ value, onChange }: InputFieldsProps) => {
  return <input type="text" value={value} onChange={onChange} />;
};

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <InputFields value={inputValue} onChange={handleChange} />
      <InputFields value={inputValue} onChange={handleChange} />
      <InputFields value={inputValue} onChange={handleChange} />
      <InputFields value={inputValue} onChange={handleChange} />
      <InputFields value={inputValue} onChange={handleChange} />
    </>
  );
}

export default App;
