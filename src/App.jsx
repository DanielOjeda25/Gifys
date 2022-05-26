import { useEffect, useState } from "react";
import "./App.css";
import GetGifsFromApi from "./Services/GetGifsFromApi";
import ListofGifs from "./Components/ListOfGifsComponent";


function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    GetGifsFromApi().then((gifs) => setGifs(gifs));
  });
  return (
    <div >
      <section>
        <ListofGifs gifs={gifs} />
      </section>
    </div>
  );
}

export default App;
