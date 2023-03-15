import { Routes, Route } from 'react-router-dom';

import MainMenu from './MainMenu';
import MoviePage from './MoviePage';
import Screenings from './Screenings'

export default function App() {
  return <>
    <header>
      <MainMenu />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<MoviePage />} />
        <Route path="/Screenings" element={<Screenings />} />
      </Routes>
    </main>
  </>
}
