import { useState } from "react";
import styles from "./App.module.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <button onClick={() => setCount(count + 1)}>Omhoog</button>
      <p style={count < 0 ? { color: "red" } : { color: "green" }}>
        Count: {count}
      </p>
      <button onClick={() => setCount(count - 1)}>Omlaag</button>
    </div>
  );
};

function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
