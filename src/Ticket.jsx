import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";


export default function Ticket() {
  const location = useLocation();
  const date = location.state.formattedDate;
  const ticket = location.state.sendSeates;

  return (
    <div className='ticketDiv'>
      <h1>This is your ticket!</h1>

      <h2>Your movie starts at: </h2>
      <h2>{date}</h2>

      <h2 className='yourSeats'>These are the seats that you booked: </h2>
      {ticket.map((seat) => {
        return (
          <div className='infoDiv'>
            <h2 className='seatNumber'> {seat}</h2>
          </div>
        )
      })}
      <div className='info'>
        <h2>This price is for normal ticket prices</h2>
        <h2>If you have have someone under 12 or over 65</h2>
        <h2>Let us know when you arrive so we can get you the right price</h2>
        <h2>Your total price is: {ticket.length * 85}</h2>
      </div>
      <div className='bookingNumber'>
        <h2>This is your booking number: </h2>
        <h2>{Math.floor(100000 + Math.random() * 900000)}</h2>
      </div>
      <div className='goBack'>
        <Link to={{
          pathname: "/Screenings",

        }}>
          <Button size="lg">Go back to screening page</Button>
        </Link>
      </div>
    </div>
  )
}
