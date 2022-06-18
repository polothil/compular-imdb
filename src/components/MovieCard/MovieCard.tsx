import React from 'react';
import { MovieProps } from '../Home/Home';
import './MovieCard.css';

export type MovieCardProps = {
  movie: MovieProps;
  desc?: boolean;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie, desc }) => {
  return (
    <div className='card'>
      <img src={movie.image} alt='' />
      <h3 className='title'>{movie.title}</h3>
      <div className='info-column'>
        <span className='movie-info'>
          {desc ? (
            <>{movie.description}</>
          ) : (
            <>
              <b>Year:</b> {movie.year}
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
