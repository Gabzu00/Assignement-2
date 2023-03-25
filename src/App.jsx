import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import MainMenu from './MainMenu';
import MoviePage from './MoviePage';
import Screenings from './Screenings'
import BookingPage from './BookingPage';
import Ticket from './Ticket';

export default function App() {

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

  // A variable that will contain a list of movies
  const [screenings, Screening] = useState([]);

  // Run this function when the component mounts
  useEffect(() => {
    // Self-executing asyncronous anonomyous function
    (async () => {
      // Fetch all the movies from the REST api
      // and store them in the state variable movies
      Screening(await (await (fetch('/api/screenings'))).json());
    })();
  }, []);

  return <>
    <header>
      <MainMenu />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<MoviePage movies={movies} />} />
        <Route path="/Screenings" element={<Screenings movies={movies} screenings={screenings} />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/Ticket" element={<Ticket />} />
      </Routes>
    </main>

  </>
}
