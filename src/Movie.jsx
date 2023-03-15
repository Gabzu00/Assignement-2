import { Button, Stack } from 'react-bootstrap';


import MovieDetails from './MovieDetails';


export default function Movie(props) {



  // Destructure props into separate variables
  let { title, description, id } = props;
  let { posterImage } = description;

  // Add the correct domain to the image path
  posterImage = 'https://cinema-rest.nodehill.se/' + posterImage;

  return <div className="movie">
    <div className='centerItems'>
      <p className="text fs-6 fw-bold">{title}</p>
      <img className="image" src={posterImage} />
      <Stack direction="horizontal" gap={3}>
        <MovieDetails
          id={id}
          title={title}
        />
      </Stack>
    </div>
  </div>;
}