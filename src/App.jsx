import { Routes, Route } from 'react-router-dom';


import MainMenu from './MainMenu';
import MoviePage from './MoviePage';

export default function App() {
  return <>
    <header>
      <MainMenu />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<MoviePage />} />
      </Routes>
    </main>
  </>
}
