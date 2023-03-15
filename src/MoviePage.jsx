import "bootstrap/dist/css/bootstrap.min.css"

// import necessary hooks from React
import { useState, useEffect } from 'react';

// import our Movie component
import Movie from './Movie';

// rfc to create something like this
//              |
//              v

export default function MoviePage(props) {
  const movies = props.movies;

  return (
    <>
      <h1 className="Title">These are the movies beeing shown</h1>
      {movies.map(({ id, title, description }) => <Movie
        id={id}
        title={title}
        description={description}
      />)}

    </>

  );
}