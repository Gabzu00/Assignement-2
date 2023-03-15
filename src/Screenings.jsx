import React from "react";
import Table from 'react-bootstrap/Table';

import TableForMovies from './TableForMovies';

export default function Screenings(props) {
  let movies = props.movies;
  let screenings = props.screenings;

  let movieDates = [...new Set(screenings.map(screening => screening.time))]
  let datesOnly = movieDates.map(date => new Date(date).toLocaleString('sv-SE', { year: "numeric", month: "numeric", day: "numeric" }))
  let noDuplicateDates = [...new Set(datesOnly)]


  return (
    <div>
      {noDuplicateDates.map((date, index) => (
        <div key={`${date}-${index}`}>


          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>{new Date(date).toLocaleString('sv-SE', { year: "numeric", month: "numeric", day: "numeric" })}</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>

      ))}

      {/* {screenings.map(({ id, time }) => (
        <div key={id}>
          <p>{new Date(time).toLocaleString('sv-SE', { year: "numeric", month: "numeric", day: "numeric" })}</p>
        </div>
      ))}

      {movies.map(({ id, title, description }) => (
        <div key={id}>
          <h2>{title}</h2>
          <p>{description.length}</p>
        </div>
      ))} */}
    </div>
  )
}
