import React, { useState } from 'react';
import Movie from './movie';

const MovieList = ({ movies }) => {
  return (
    <>
      <div className="row">
        {movies.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </div>
    </>
  );
};
export default MovieList;
