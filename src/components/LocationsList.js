import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from './SearchForm';
import styled from 'styled-components'

export default function LocationsList() {
    const SearchPlace = styled.div`
    display: flex;
    justify-content: center;
    margin: 3%;
  `;

    const [api] = useState("https://rickandmortyapi.com/api/location/?name=");
    const [search, setSearch] = useState('');

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios
          .get(`${api}${search}`)
          .then(res => {
            // console.log(res);
            setPlaces(res.data.results);
          })
          .catch(err => {
            console.log(err);
          });
      }, [search]);

      let spots = places.map(place => {
        return (
            <div>
              <h1>{place.name}</h1>
            </div>
        );
      });

      return (
        <div>
          <SearchPlace>
            <SearchForm guys={places} setGuys={setPlaces}  search={search} setSearch={setSearch}/>
          </SearchPlace>
    
          <section className="character-list">
      <h2>{spots}</h2>
          </section>
        </div>
      );

}
