import React from "react";
import { useState } from "react";
import Pokemon from "../Pokemon";
import Axios from "axios";
import "./styles.css";

function Search() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function searchPokemon() {
    setLoading(true);
    Axios.get("https://pokeapi.co/api/v2/pokemon/" + search)
      .then(response => { setPokemon(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Not found!");
      });
  }

  return (
    <div class="input">
      <h1>POKEDEX 2.0 </h1>
      <input
        type="text"
        onChange={event => {
          setSearch(event.target.value);
        }}
      />
      <button onClick={() => searchPokemon()}>Search Pokedex</button>

      {<p>Results:</p>}
      {loading === true ? (
        <p>{error}</p>
      ) : (
        <div>
          <Pokemon
            sprites={pokemon.sprites.front_default}
            name={pokemon.name}
            id={pokemon.id}
          />
        </div>
      )}
    </div>
  );
}

export default Search;