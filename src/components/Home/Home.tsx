import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './Home.css';

export type MovieProps = {
  id: string;
  image: string;
  title: string;
  description?: string;
  year: string;
};

const Home: React.FC = () => {
  const [url, setUrl] = useState('https://imdb-api.com/API/MostPopularMovies/k_nb0rn98o');
  const [movieList, setMovieList] = useState<MovieProps[]>([]);
  const [filteredList, setFilteredList] = useState<MovieProps[]>([]);
  const [searchStr, setSearchStr] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (searchStr === '') setMovieList(data.items);
      else setFilteredList(data.results);
    };

    fetchData();
  }, [url, searchStr]);

  const handleSearch = (filter: string) => {
    if (filter.length > 2) {
      console.log(filter);
      setSearchStr(filter);
      console.log('API call');
      setUrl(`https://imdb-api.com/en/API/Search/k_nb0rn98o/${filter}`);
    } else {
      setSearchStr('');
      setUrl('https://imdb-api.com/API/MostPopularMovies/k_nb0rn98o');
    }
  };

  return (
    <div>
      <Header filter={handleSearch} />
      <>
        {searchStr === '' ? (
          <>
            <h1>Most Popular Movies</h1>
            <MoviesContainer movies={movieList} />
          </>
        ) : (
          <>
            <h1>Search Results</h1>
            <MoviesContainer movies={filteredList} desc={true} />
          </>
        )}
      </>
    </div>
  );
};

export default Home;
