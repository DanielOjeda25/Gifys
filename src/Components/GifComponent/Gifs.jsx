import React from "react";
import { Link } from "wouter";

export default function Gifs({ title, url, id }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={url} alt={title} />
    </div>
  );
}
