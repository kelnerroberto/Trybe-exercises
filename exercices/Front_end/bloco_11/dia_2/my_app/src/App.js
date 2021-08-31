// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className='poke-title'>Pokédex</h1>
        <div className='cards-div'>
          <Pokedex pokemons={ pokemons } />
        </div>
      </div>
    );
  }
}

export default App;
