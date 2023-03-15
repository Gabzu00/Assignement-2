import "bootstrap/dist/css/bootstrap.min.css"

// import necessary hooks from React
import { useState, useEffect } from 'react';

// import our Movie component
import Movie from './Movie';

// rfc to create something like this
//              |
//              v

export default function MoviePage() {

  // A variable that will contain a list of movies
  const [movies, setMovies] = useState([]);

  // Run this function when the component mounts
  useEffect(() => {
    // Self-executing asyncronous anonomyous function
    (async () => {
      // Fetch all the movies from the REST api
      // and store them in the state variable movies
      setMovies(await (await (fetch('/api/movies'))).json());
    })();
  }, []);


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