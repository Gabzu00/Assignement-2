import { Button, Stack } from 'react-bootstrap';
import {
  Link
} from "react-router-dom"

import ScreeningInfo from './ScreeningInfo';


export default function Movie(props) {

  // Destructure props into separate variables
  let { title, description } = props;
  let { posterImage } = description;

  // Add the correct domain to the image path
  posterImage = 'https://cinema-rest.nodehill.se/' + posterImage;

  return <div className="movie">
    <div className='centerItems'>
      <p className="text fs-6 fw-bold">{title}</p>
      <img className="image" src={posterImage} />
      <Stack direction="horizontal" gap={3}>
        <ScreeningInfo />
        <Link to="/BookMovie">
          <Button className="movieButtons btn-sm btn-success" id='bookButton'>Book movie</Button>
        </Link>
      </Stack>
    </div>
  </div>;
}