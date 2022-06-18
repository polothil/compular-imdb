import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

import './MoviePage.css';

type MoviePageProps = {
  image: string;
  type: string;
  title: string;
  imDbRating: string;
  imDbRatingVotes: string;
  year: string;
  languages: string;
  releaseDate: string;
  runtimeStr: string;
  genres: string;
  directors: string;
  stars: string;
  plot: string;
};

const MoviePage: React.FC = () => {
  const history = useNavigate();
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState<MoviePageProps>();

  console.log(movieId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_API_KEY1}/${movieId}`
        );
        const data = await res.json();
        setMovieData(data);
      } catch (error) {
        console.log(error);
        // alert('Error fetching data from server');
        setMovieData(undefined);
      }
    };
    fetchData();
  }, [movieId]);

  const renderMovie = () => {
    if (movieData === undefined) {
      return <Loader />;
    } else if (movieData) {
      return (
        <>
          <img src={movieData.image} alt='' />
          <div className='info-column'>
            <span className='movie-name'>
              {movieData.type}: {movieData.title}
            </span>
            <span className='movie-info'>
              IMDB Rating:{' '}
              <span>
                {movieData.imDbRating} ({movieData.imDbRatingVotes} votes)
              </span>
            </span>
            <span className='movie-info'>
              Year: <span>{movieData.year}</span>
            </span>
            <span className='movie-info'>
              Languages: <span>{movieData.languages}</span>
            </span>
            <span className='movie-info'>
              Released on: <span>{movieData.releaseDate}</span>
            </span>
            <span className='movie-info'>
              Runtime: <span>{movieData.runtimeStr}</span>
            </span>
            <span className='movie-info'>
              Genre: <span>{movieData.genres}</span>
            </span>
            <span className='movie-info'>
              Director(s): <span>{movieData.directors}</span>
            </span>
            <span className='movie-info'>
              Stars: <span>{movieData.stars}</span>
            </span>
            <span className='movie-info'>
              Plot: <span>{movieData.plot}</span>
            </span>
          </div>
        </>
      );
    } else {
      return <h2>Pokemon not found</h2>;
    }
  };

  return (
    <main className='movie-container'>
      {renderMovie()}
      {movieData !== undefined && (
        <>
          <button className='btn' onClick={() => history(`/`)}>
            Back to home
          </button>
        </>
      )}
    </main>
  );
};

export default MoviePage;
