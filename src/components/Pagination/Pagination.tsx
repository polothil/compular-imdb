import React from 'react';
import './Pagination.css';

type PaginationProps = {
  moviesPerPage: number;
  setMoviesPerPage: (moviesPerPage: number) => void;
  totalMovies: number;
  paginate: (pageNumber: number) => void;
  activePage: number;
};

const Pagination: React.FC<PaginationProps> = ({
  moviesPerPage,
  setMoviesPerPage,
  totalMovies,
  paginate,
  activePage,
}) => {
  const pageNumbers = [];

  for (let idx = 1; idx <= Math.ceil(totalMovies / moviesPerPage); idx++) {
    pageNumbers.push(idx);
  }
  return (
    <div className='pagination'>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <button
              className={`page-link ${activePage === number ? 'active' : ''}`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <div className='selection'>
        <label>Movies per page:</label>
        <select
          value={moviesPerPage}
          onChange={(e) => setMoviesPerPage(Number(e.target.value))}
        >
          <option value={20}>20</option>
          <option value={10}>10</option>
          <option value={5}>5</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
