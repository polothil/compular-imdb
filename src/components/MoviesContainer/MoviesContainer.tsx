import React from 'react';
import { MovieProps } from '../Home/Home';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css';

type MoviesContainerProps = {
  movies: MovieProps[];

  desc?: boolean;
};

const MoviesContainer: React.FC<MoviesContainerProps> = ({ movies, desc }) => {
  return (
    <main className='container'>
      {movies &&
        movies.length > 0 &&
        movies?.map((movie) => <MovieCard key={movie.id} movie={movie} desc={desc} />)}
    </main>
  );
};

export default MoviesContainer;
