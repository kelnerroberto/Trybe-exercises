import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokes;
    return(
      <div className='pokemon-card-div'>
        <div className='text-div'>
          <p>Name: {name}</p>
          <p>Type: {type}</p>
          <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src= { image } alt={`${name} picture`} className='poke-img'></img>
      </div>
    )
  }
}

export default Pokemon;
