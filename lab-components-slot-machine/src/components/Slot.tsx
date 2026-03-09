import type { JSX } from "react";
import { SlotsImages } from "../data";
import type { slotProp } from "../types";
import styles from "../App.module.css"

const Slot = ({ value }: slotProp): JSX.Element => {
  return (
    <>
      <img
        style={{ width: 100 }}
        src={SlotsImages[value]}
        alt={SlotsImages[value]}
        className={styles.slot}
      />
    </>
  );
};

export default Slot;
