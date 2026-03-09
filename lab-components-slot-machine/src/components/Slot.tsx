import type { JSX } from "react";
import { SlotsImages } from "../data";
import type { slotProp } from "../types";

const Slot = ({ value }: slotProp): JSX.Element => {
  return (
    <>
      <img
        style={{ width: 100 }}
        src={SlotsImages[value]}
        alt={SlotsImages[value]}
      />
    </>
  );
};

export default Slot;
