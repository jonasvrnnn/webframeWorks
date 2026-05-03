import { useEffect, useState } from "react";
import type { LimitProp, PokedexResponse, Pokemon } from "./types";
import { Atom } from "react-loading-indicators";

const Pokedex = ({ limit }: LimitProp) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    let value = event.target.value.toLowerCase();
    setPokemons(
      allPokemons.filter((pokemon) =>
        pokemon.name.toLocaleLowerCase().startsWith(value),
      ),
    );
  };
  const fetchPokemons = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
    );
    const pokeJson: PokedexResponse = await data.json();
    setPokemons(pokeJson.results);
    setAllPokemons(pokeJson.results);
  };
  useEffect(() => {
    fetchPokemons();
  }, [limit]);
  return (
    <>
      <input type="text" onChange={handleChange} />
      {pokemons ? (
        pokemons.map((pokemon, index) => <div key={index}>{pokemon.name}</div>)
      ) : (
        <Atom color="#080908" size="medium" text="" textColor="" />
      )}
    </>
  );
};

function App() {
  const [limit, setLimit] = useState(151);
  const [inputValue, setInputValue] = useState("");
  const handleLimit = () => {
    setLimit(Number(inputValue));
  };
  return (
    <>
      <Pokedex limit={limit} />
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleLimit}>Set limit</button>
    </>
  );
}

export default App;
