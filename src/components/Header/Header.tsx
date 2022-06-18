import React, { useState } from 'react';
import './Header.css';

type HeaderProps = {
  filter(arg: string): void;
  setSearchStr(arg: string): void;
};

const Header: React.FC<HeaderProps> = ({ filter, setSearchStr }) => {
  const [timeOutId, setTimeOutId] = useState<ReturnType<typeof setTimeout>>();
  const [str, setStr] = useState('');

  const handleChange = (e: { target: { value: string } }) => {
    // Debouncing implementation
    setStr(e.target.value);
    clearTimeout(timeOutId);
    const timeOut = setTimeout(() => {
      filter(e.target.value);
    }, 500);
    setTimeOutId(timeOut);
  };

  const handleClick = () => {
    setStr('');
    setSearchStr('');
  };

  return (
    <header className='header'>
      <h1>Movie App</h1>
      <div className='filter'>
        <div className='search'>
          <img src='/icons/search.svg' alt='' />
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search Movie here'
            onChange={handleChange}
            value={str}
          />
        </div>
        {str && <span onClick={handleClick}>X</span>}
      </div>
    </header>
  );
};

export default Header;
