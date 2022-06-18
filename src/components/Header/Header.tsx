import React from 'react';
import './Header.css';

type HeaderProps = {
  filter(arg: string): void;
};

const Header: React.FC<HeaderProps> = ({ filter }) => {
  const handleChange = (e: { target: { value: string } }) => {
    filter(e.target.value);
  };

  return (
    <header className='header'>
      <h1>Movie App</h1>
      <div className='filter'>
        <img src='/icons/search.svg' alt='' />
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search Movie here'
          onChange={handleChange}
        />
      </div>
    </header>
  );
};

export default Header;
