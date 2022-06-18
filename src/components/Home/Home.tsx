import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
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
  const [url, setUrl] = useState('');
  const [movieList, setMovieList] = useState<MovieProps[]>(
    JSON.parse(localStorage.getItem('movies')!) || []
  );
  const [filteredList, setFilteredList] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchStr, setSearchStr] = useState<string>('');

  useEffect(() => {
    const initialDataFetch = async () => {
      try {
        const movies = JSON.parse(localStorage.getItem('movies')!) || [];
        const dbDate = JSON.parse(localStorage.getItem('moviesDate')!) || '';
        const moviesDate: number = new Date().getDate();
        if (movies.length === 0 || dbDate !== moviesDate) {
          setLoading(true);
          const res = await fetch(
            'https://imdb-api.com/API/MostPopularMovies/k_nb0rn98o'
          );
          const data = await res.json();
          console.log(data);
          setMovieList(data.items);
          setLoading(false);
          localStorage.setItem('movies', JSON.stringify(data.items));
          localStorage.setItem('moviesDate', moviesDate.toString());
        }
      } catch (error) {
        console.log(error);
        alert('Error fetching data from server');
      }
    };
    initialDataFetch();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchStr !== '') {
          setLoading(true);
          console.log('API call');
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          setFilteredList(data.results);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        alert('Error fetching data from server');
      }
    };

    fetchData();
  }, [url, searchStr]);

  const handleSearch = (filter: string) => {
    console.log(filter);
    setSearchStr(filter);
    setUrl(`https://imdb-api.com/en/API/Search/k_nb0rn98o/${filter}`);
  };

  return (
    <div>
      <Header filter={handleSearch} />
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
};

export default Home;
