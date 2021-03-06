import './App.css';
import Search from "./components/Search";
import React from 'react';
import FavoritePokemon from './components/FavoritePokemon'

function App () {
  return (
    <div>
      <Search/> <FavoritePokemon class="inventory"/>
    </div>
  );
}

export default App;
