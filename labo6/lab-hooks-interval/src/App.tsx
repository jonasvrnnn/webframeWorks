import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(timer);
  });
  return <> {time}</>;
};
const CurrentTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });
  return <>current time: {dateTime.toLocaleTimeString()}</>;
};
const RandomValue = () => {
  const [randomValue, setRandomValue] = useState(
    Math.floor(Math.random() * 100),
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setRandomValue(Math.floor(Math.random() * 100));
    }, 2000);
    return () => clearInterval(timer);
  });
  return <>random getal tussen 1 en 200: {randomValue}</>;
};

function App() {
  return (
    <>
      <Timer />
      <br />
      <CurrentTime />
      <br />
      <RandomValue />
    </>
  );
}

export default App;
