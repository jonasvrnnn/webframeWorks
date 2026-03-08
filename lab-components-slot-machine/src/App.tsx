import SlotMachine from "./components/SlotMachine";

function App() {
  return (
    <>
      <SlotMachine numberOfslots={3} />
      <SlotMachine numberOfslots={5} />
      <SlotMachine numberOfslots={15} />
    </>
  );
}

export default App;
