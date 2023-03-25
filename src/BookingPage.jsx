import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useStates } from './utilities/states';
import { Button } from "react-bootstrap";
import React, { useState } from 'react';
import Ticket from './Ticket';


let sendSeates = []
export default function BookingPage() {
  const location = useLocation();
  const movies = location.state.movies;
  const screeningId = location.state.screening;


  const s = useStates({
    screening: null,
    moveie: null,
    seats: []
  });



  useEffect(() => {
    (async () => {

      let screening = (await (await fetch(`/api/occupied_seats?screeningId=${screeningId}`)).json())[0];

      // Convert the string of occupied seats into an array of numbers
      screening.occupiedSeats = screening.occupiedSeats.split(', ').map(x => +x);

      // Set the state variable
      s.screening = screening;

      // Get the movie (with poster image, length of movie etc)
      s.movie = (await (await fetch(`/api/movies?title=${screening.movie}`)).json())[0];

      // Get the aditorium id from the auditorium name
      let auditoriumId = ['Stora Salongen', 'Lilla Salongen']
        .indexOf(s.screening.auditorium) + 1;

      // Get the seats
      let seats = await (await fetch(
        `/api/seats/?auditoriumId=${auditoriumId}&sort=seatNumber`)).json();

      // Convert the data structure from an array of objects
      // to an array (rows) of arrays (seats in rows) of objects
      let rows = [];
      let row;
      let latestRow;

      for (let seat of seats) {
        // Add a new property: Is the seat occupied? (true/false)
        seat.occupied = screening.occupiedSeats.includes(seat.seatNumber);
        // Arrange seats into rows
        if (latestRow !== seat.rowNumber) {
          row = [];
          rows.push(row);
        }
        row.push(seat);
        latestRow = seat.rowNumber
      }

      // Set the state variable
      s.seats = rows;
    })();
  }, []);

  function toggleSeatSelection(seat) {
    console.log(seat.seatNumber + " this seat !!!")
    // do nothing if occupied
    if (seat.occupied) { return; }
    // select if not selected, deselect if selected
    seat.selected = !seat.selected;
    console.log(sendSeates + " Hello seats")
    if (seat.selected) {
      sendSeates.push(seat.seatNumber);
    } else {
      let index = sendSeates.indexOf(seat.seatNumber);
      if (index > -1) {
        sendSeates.splice(index, 1);
      }
    }

  }

  // output the seats
  return s.seats.length === 0 ? null : <div className="screening-and-seats">
    <h1>{s.screening.movie}</h1>
    <h2>{new Intl.DateTimeFormat('sv-SE', {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(new Date(s.screening.screeningTime))}</h2>
    <img
      className="poster-screen"
      src={'https://cinema-rest.nodehill.se' + s.movie.description.posterImage} />
    <div className="seats">
      {s.seats.map(row => <><div className="row">
        {row.map((seat) => <div className={
          (seat.selected ? 'selected' : '')
          + (seat.occupied ? ' occupied' : '')
        }
          onClick={() => toggleSeatSelection(seat)}>{seat.seatNumber}
        </div>)}
      </div><br /></>)}
    </div>
    <Link to={{
      pathname: "/Ticket",

    }}
      state={{
        sendSeates: sendSeates, formattedDate: new Intl.DateTimeFormat('sv-SE', {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }).format(new Date(s.screening.screeningTime))
      }}

    >
      <Button size="lg" className="bookButton" >Book seats</Button>
    </Link>



  </div>;
}
