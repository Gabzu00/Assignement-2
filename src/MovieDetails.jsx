import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ScreeningInfo(props) {
  const { id, title } = props;

  // A variable that will contain a list of movies
  const [screenings, Screening] = useState([]);

  // Run this function when the component mounts
  useEffect(() => {
    // Self-executing asyncronous anonomyous function
    (async () => {
      // Fetch all the movies from the REST api
      // and store them in the state variable movies
      Screening(await (await (fetch(`/api/screenings?movieId=${id}`))).json());
    })();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className="movieButtons btn-lg" variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='detailTitle fs-6 fw-bold'>These are the dates and times that this movie is displayed </p>
          {screenings.map((screening, index) => (
            <p key={index}>{new Date(screening.time).toLocaleString('sv-SE')}</p>
          ))}
          <p className='detailTitle fs-6 fw-bold'>If you want to book this movie go to the screenings page!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}
