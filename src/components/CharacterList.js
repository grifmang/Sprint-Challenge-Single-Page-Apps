import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results);
      setCharacter(response.data.results);
    })
    .catch(err => {console.log('the data was not returned', err)});
  }, []);

  return (
    <section className="character-list">
      <h2>Character Data</h2>
      {character.map(char => {
        return (
          <SearchForm />
          <CharacterCard
            key={char.id}
            name={char.name}
            img={char.image}
            gender={char.gender}
            species={char.species}
            status={char.status} />
        );
      })}
    </section>
  );
}
