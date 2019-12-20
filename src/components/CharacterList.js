import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from './SearchForm';
import styled from 'styled-components'

export default function CharacterList() {
  const CharList = styled.div`
    display: flex;
  `;

  const [api] = useState("https://rickandmortyapi.com/api/character/?name=");
  const [search, setSearch] = useState('');

  const [guys, setGuys] = useState([]);
  const [folks, setFolks] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${api}${search}`)
      .then(res => {
        // console.log(res);
        setGuys(res.data.results);
        setFolks(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [search]);

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
    <div>
      <SearchForm guys={guys} setGuys={setGuys} folks={folks} search={search} setSearch={setSearch}/>

      <section className="character-list">
        <CharList>
          <h2>{chars}</h2>
        </CharList>
      </section>
    </div>
  );
}
