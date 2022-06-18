import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Pagination from '../Pagination/Pagination';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(10);

  useEffect(() => {
    const initialDataFetch = async () => {
      try {
        const movies = JSON.parse(localStorage.getItem('movies')!) || [];
        const dbDate = JSON.parse(localStorage.getItem('moviesDate')!) || '';
        const moviesDate: number = new Date().getDate();
        if (movies.length === 0 || dbDate !== moviesDate) {
          setLoading(true);
          const res = await fetch(
            `https://imdb-api.com/API/MostPopularMovies/${process.env.REACT_APP_API_KEY1}`
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
    setUrl(
      `https://imdb-api.com/en/API/Search/${process.env.REACT_APP_API_KEY1}/${filter}`
    );
  };

  // Pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstPost = indexOfLastMovie - moviesPerPage;
  const currentMovies = movieList.slice(indexOfFirstPost, indexOfLastMovie);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header filter={handleSearch} setSearchStr={setSearchStr} />
      {loading ? (
        <Loader />
      ) : (
        <>
          {searchStr === '' ? (
            <>
              <h1>Most Popular Movies</h1>
              <MoviesContainer movies={currentMovies} />
              <Pagination
                moviesPerPage={moviesPerPage}
                setMoviesPerPage={setMoviesPerPage}
                totalMovies={movieList.length}
                activePage={currentPage}
                paginate={handlePagination}
              />
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
