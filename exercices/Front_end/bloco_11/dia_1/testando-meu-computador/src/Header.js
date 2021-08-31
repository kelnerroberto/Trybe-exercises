import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <a href='https://www.google.com' target='_blank' className='a-header' rel="noreferrer">Go to GoOgle</a>
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
