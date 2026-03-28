//hide-start
import { useState } from "react";
//hide-end
const App = () => {
  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4]);

  return (
    <>
      <table>
        <tbody>
          {numbers.map((number, index) => (
            <tr key={index}>
              <td>{number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
//hide-start
export default App;
//hide-end
