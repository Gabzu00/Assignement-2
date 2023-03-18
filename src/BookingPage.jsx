import { useLocation } from "react-router-dom";

export default function BookingPage() {
  debugger

  const location = useLocation();
  const movies = location.state.sendMovies;

  console.log(movies);

  return (
    <div>
      <h1>Booking Page</h1>
    </div>
  );
}
