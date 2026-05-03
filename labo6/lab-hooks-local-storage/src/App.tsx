import { useEffect, useState } from "react";
import "./style.css";
interface joke {
  id: string;
  joke: string;
  status: number;
}
const DadJoke = () => {
  const [dadJoke, setDadJoke] = useState("");
  const [favoriteJoke, setFavoriteJoke] = useState(
    localStorage.getItem("favoriteJoke") ?? "",
  );
  const loadJoke = async () => {
    let result = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });

    let json: joke = await result.json();
    setDadJoke(json.joke);
  };
  const setFavorite = () => {
    setFavoriteJoke(dadJoke);
  };
  useEffect(() => {
    localStorage.setItem("favoriteJoke", favoriteJoke);
  }, [favoriteJoke]);
  useEffect(() => {
    loadJoke();
  }, []);
  return (
    <>
      <div className="card">
        <h1>Dad joke</h1>
        <p>{dadJoke}</p>
        <div>
          <button onClick={setFavorite}>Set favorite</button>
          <button onClick={loadJoke}>new joke</button>
        </div>
      </div>
      {favoriteJoke && (
        <div className="card">
          <h2>favoriete Joke</h2>
          <p>{favoriteJoke}</p>
        </div>
      )}
    </>
  );
};
function App() {
  return <DadJoke />;
}

export default App;
