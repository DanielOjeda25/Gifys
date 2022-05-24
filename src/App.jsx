import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "wouter";
import GetGifsFromApi from "./Services/GetGifsFromApi";
import Gifs from "./Components/GifComponent/Gifs";
import ListofGifs from "./Components/ListOfGifsComponent/ListofGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    GetGifsFromApi().then((gifs) => setGifs(gifs));
  });
  return (
    <div className="App">
      <section className="App-header">
        <ListofGifs gifs={gifs} />
      </section>
    </div>
  );
}

export default App;
