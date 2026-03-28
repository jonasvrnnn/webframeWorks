import React, { type JSX } from "react";

interface Game{
  id: number
  name: string,
  releaseYear: number,
  sales: number
}
interface ColorSquareProp{
  backgroundColor:string
}


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
const ColorSquare = (prop: ColorSquareProp)=>{
  return <div style={{width:100,height:100,backgroundColor:prop.backgroundColor}}></div>
}
const List = ():JSX.Element => {
  return (
    <div>
    {games.map((game: Game) => {
        return <React.Fragment key={game.id}>
              <h2>{game.name} ({game.releaseYear})</h2>
              <p>Aantal keer verkocht: {game.sales}</p>
            </React.Fragment>
      })}
    </div>
  );
}


function App() {
  return (
    <div>
      <h1>Welcome to the H20 Game shop</h1>
      <List/>
      <ColorSquare backgroundColor="blue"/>
    </div>
  )
}

export default App
