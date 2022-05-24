import React from "react";
import Gifs from "../GifComponent/Gifs";


export default function ListofGifs({ gifs }) {
  return gifs.map((gif) => (
    <Gifs title={gif.title} url={gif.url} key={gif.id} />
  ));
}
