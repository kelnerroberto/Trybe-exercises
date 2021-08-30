import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <a href='https://www.google.com' className='a-header'>Redirecionar</a>
        <p className='p-header'>Exerício de react</p>
        <div className='search-box'>
          <input type='text' className='search-input'></input>
          <button className='search-btn'>Clique aqui</button>
        </div>
      </header>
    )
  }
}

export default Header;
