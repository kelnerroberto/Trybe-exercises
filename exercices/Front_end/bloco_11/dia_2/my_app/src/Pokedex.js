import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {

    const { pokemons } = this.props;

    return (
      <div className='pokemon-cards'>
        {pokemons.map((eachPoke) => <Pokemon key={eachPoke.id} pokes={ eachPoke }/>)}
      </div>
    )
  }
}

export default Pokedex;
