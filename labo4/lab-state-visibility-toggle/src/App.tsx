import { useState } from "react";
import styles from "./App.module.css";

function App() {
  // const showDiv = false;
  const [showDiv, setshowDiv] = useState(false);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={(event) => setshowDiv(event.target.checked)}
          checked={showDiv}
        />
        Show/Hide
      </label>
      {showDiv && <div className={styles.gif}></div>}
    </div>
  );
}

export default App;
