import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function Screenings(props) {
  const movies = props.movies;
  const screenings = props.screenings;

  let movieDates = [...new Set(screenings.map(screenings => screenings.time))]
  let datesOnly = movieDates.map(date => new Date(date).toLocaleString('sv-SE', { weekday: "long", year: "numeric", month: "numeric", day: "numeric" }))
  let noDuplicateDates = [...new Set(datesOnly)]

  let categories = [...new Set(movies.flatMap(movie => movie.description.categories))];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredMovies = selectedCategory ?
    movies.filter(movie => movie.description.categories.includes(selectedCategory)) :
    movies;


  return (
    <div>
      <h1 className="Instructions">Hello</h1>
      <h4 className="Instructions">These are the screenings</h4>
      <h4 className="Instructions">To book a movie press the poster or anywere on the table</h4>
      <div className="filterDiv">
        <label><span>Filter by categories: </span>
          <select className="option" onChange={handleCategoryChange}>
            <option value="">All categories</option>
            {categories.map(categorie => (
              <option key={categorie} value={categorie}>{categorie}</option>
            ))}
          </select>
        </label>
      </div>

      {noDuplicateDates
        .map((date, index) => {
          const moviesForDate = filteredMovies.filter((movie) => {
            const screeningsForMovie = screenings.filter((screening) => screening.movieId === movie.id);
            const screeningsForDate = screeningsForMovie.filter((screening) => new Date(screening.time).toLocaleDateString() === new Date(date).toLocaleDateString());
            return screeningsForDate.length > 0;
          });

          if (moviesForDate.length === 0) {
            return null;
          }

          return (
            <Card className="card" style={{ width: '50rem' }} key={index}>
              <Card.Body>
                <Card.Title>{new Date(date).toLocaleString('sv-SE', { year: "numeric", month: "numeric", day: "numeric", weekday: "long" })}</Card.Title>
                {screenings
                  .filter((screening) => new Date(screening.time).toLocaleDateString() === new Date(date).toLocaleDateString())
                  .map((screening) => {
                    const movie = filteredMovies.find((movie) => movie.id === screening.movieId);

                    if (!movie) {
                      return null;
                    }

                    return (
                      <div key={screening.id}>
                        <Link
                          to={{
                            pathname: "/BookingPage",
                          }}
                          state={{ movies: movies, screening: screening.id }}
                          style={{ textDecoration: 'none' }}>
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>Poster</th>
                                <th>Title</th>
                                <th>Movie length</th>
                                <th>Screenings times</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* Replace the hardcoded table rows with data specific to each screening */}
                              <tr key={movie.id}>
                                <td>
                                  <img className="screeningImage" src={'https://cinema-rest.nodehill.se/' + movie.description.posterImage}></img>
                                </td>
                                <td>{movie.title}</td>
                                <td>{movie.description.length} minutes</td>
                                <td>Starting: {new Date(screening.time).toLocaleString('sv-SE', { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Link>
                      </div>
                    );
                  })}
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}
