import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  const [guys, setGuys] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        // console.log(res);
        setGuys(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  let chars = guys.map(guy => {
    return (
      <div>
        <h1>{guy.name}</h1>
        <p>Species: {guy.species}</p>
        <p>From: {guy.origin.name}</p>
        <p>Status: {guy.status}</p>
        <img src={guy.image}/>
      </div>
    );
  });

  return (
    <section className="character-list">
      <h2>{chars}</h2>
    </section>
  );
}
