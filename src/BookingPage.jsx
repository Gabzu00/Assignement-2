import { useLocation } from "react-router-dom";

export default function BookingPage() {
  const location = useLocation();
  const movies = location.state.movies;

  console.log(movies);

  return (
    <div>
      <h1>Booking Page</h1>
      {/* Render the data from the movies array */}
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.description.plot}</p>
        </div>
      ))}
    </div>
  );
}
