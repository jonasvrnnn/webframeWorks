import React from "react";

interface Student {
  id: number;
  naam: string;
  leeftijd: number;
}
const students: Student[] = [
  {
    id: 1,
    naam: "Maddie",
    leeftijd: 23,
  },
  {
    id: 2,
    naam: "Jonas",
    leeftijd: 24,
  },
  {
    id: 3,
    naam: "Pedro",
    leeftijd: 44,
  },
  {
    id: 4,
    naam: "Lowie",
    leeftijd: 20,
  },
  {
    id: 5,
    naam: "Karen",
    leeftijd: 42,
  },
];
function App() {
  const getallen: number[] = [8, 4, 3, 7, 1, 8, 4, 6, 5, 9];
  return (
    <>
      <h1>Labo 1: lijsten</h1>
      <h2>Getallenlijst</h2>
      <ul>
        {getallen.map((getal, index) => (
          <li key={index}>{getal}</li>
        ))}
      </ul>
      <h2>Studentenlijst</h2>
      <ol>
        {students.map((student) => (
          <li key={student.id}>{student.naam}</li>
        ))}
      </ol>
      <h2>Studentenlijst met J</h2>
      <ol>
        {students
          .filter((student) => student.naam.startsWith("J"))
          .map((student) => (
            <li key={student.id}>{student.naam}</li>
          ))}
      </ol>
      <h2>Select</h2>
      <select name="" id="">
        {students.map((student) => (
          <option value={student.naam}>{student.naam}</option>
        ))}
      </select>
      <h2>Table</h2>
      <table>
        <tr>
          <th>Naam</th>
          <th>Leeftijd</th>
        </tr>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.naam}</td>
            <td>{student.leeftijd}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
