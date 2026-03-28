import SlotMachine from "./components/SlotMachine";
import style from "./App.module.css";
function App() {
  return (
    <>
      <SlotMachine numberOfslots={3} />
      <SlotMachine numberOfslots={5} />
      <SlotMachine numberOfslots={4} />
    </>
  );
}

export default App;
