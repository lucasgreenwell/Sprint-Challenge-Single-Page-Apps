import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from './SearchForm';
import styled from 'styled-components'

export default function CharacterList() {
  const CharList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  `;


  const [guys, setGuys] = useState([]);
  const [folks, setFolks] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        // console.log(res);
        setGuys(res.data.results);
        setFolks(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  let chars = guys.map(guy => {
    return (
      <div>
        <div>
          <h1>{guy.name}</h1>
          <p>Species: {guy.species}</p>
          <p>From: {guy.origin.name}</p>
          <p>Status: {guy.status}</p>
        </div>
        <img alt={guy.name} src={guy.image}/>
      </div>
    );
  });

  return (
    <CharList>
      <SearchForm guys={guys} setGuys={setGuys} folks={folks}/>
      <section className="character-list">
        <h2>{chars}</h2>
      </section>
    </CharList>
  );
}
