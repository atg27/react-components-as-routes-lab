import React from 'react';
import { directors, movies } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h3>Name: {director.name}</h3>
          <ul>Movies:
            {director.movies.map((movie, index)=>(
              <li key={index}>
                  {movie}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
