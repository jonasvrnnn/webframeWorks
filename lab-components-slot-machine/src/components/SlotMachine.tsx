import type { JSX } from "react";
import type { slotsProp } from "../types";
import Slot from "./Slot";

const SlotMachine = ({ numberOfslots }: slotsProp): JSX.Element => {
  const slots: number[] = Array.from({ length: numberOfslots }, () =>
    Math.floor(Math.random() * 5),
  );
  const gewonnen = slots.every((slot) => slot === slots[0]);
  return (
    <>
      <h1>Slots</h1>
      <p>
        {slots.map((slot, index) => (
          <Slot key={index} value={slot} />
        ))}
      </p>
      {gewonnen ? <p>Je hebt gewonnen</p> : <p>Je hebt verloren</p>}
    </>
  );
};
export default SlotMachine;
