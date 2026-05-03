import { useState } from "react";
import Counter from "./Counter";

const CounterList = () => {
  const [counters, setCounters] = useState<number[]>([]);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  const increaseCounter = (index: number) => {
    setCounters((counterCpy) =>
      counterCpy.map((counter, i) => (i === index ? counter + 1 : counter)),
    );
  };

  const decreaseCounter = (index: number) => {
    setCounters((counterCpy) =>
      counterCpy.map((counter, i) => (i === index ? counter - 1 : counter)),
    );
  };

  return (
    <>
      {counters.map((counter, index) => {
        return (
          <Counter
            value={counter}
            onDecrease={decreaseCounter}
            onIncrease={increaseCounter}
            index={index}
          />
        );
      })}
      <p>
        Som van de tellers: {counters.reduce((prev, curr) => prev + curr, 0)}
      </p>
      <button onClick={addCounter}>Voeg teller toe</button>
    </>
  );
};

function App() {
  return (
    <>
      <CounterList />
    </>
  );
}

export default App;
