import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
   

  useEffect(() => { 
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const results = response.data.results.filter(characters =>
          characters.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      })
      .catch(err => {console.log('the data was not returned', err)});
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
     <form>
       <label htmlFor='searchField'>Search:</label> 
       <input 
       type="text" 
       name="searchField"
       placeholder='Search'
       onChange={handleChange}
       value={searchTerm} />
     </form>
     <div>
       <ul>
         {searchResults.map(char => (
           <li key={char.name}>{char.name}</li>
          //  <li key={char.name}>{char}</li>
         ))}
       </ul>
     </div>
    </section>
  );
}
