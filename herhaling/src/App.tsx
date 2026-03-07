import React from "react";

interface Game{
  id: number
  name: string,
  releaseYear: number,
  sales: number
}
const App = () => {
  const games : Game[] = [
    {
      id:0,
      name:"World of Warcraft",
      releaseYear:2004,
      sales:5
    },
    {
    id: 1,
    name: "Valheim",
    releaseYear: 2021,
    sales: 10
  },
  {
    id: 2,
    name: "Minecraft",
    releaseYear: 2011,
    sales: 20
  }
  ];
  return (
    <>
      <h1>Games</h1>
      {games.map(game=>{
        return <React.Fragment key={game.id}>
          <h1>{game.name}({game.releaseYear})</h1>
          <p>Aantal keer verkocht: {game.sales}</p>
        </React.Fragment>
      })}
    </>
  );
}

export default App
