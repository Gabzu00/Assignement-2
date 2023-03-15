import { Routes, Route } from 'react-router-dom';


import MainMenu from './MainMenu';
import MoviePage from './MoviePage';
import ScreeningInfo from './ScreeningInfo';

export default function App() {
  return <>
    <header>
      <MainMenu />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<MoviePage />} />
        {/* <Route path="/ScreeningInfo" element={< ScreeningInfo />} /> */}
      </Routes>
    </main>
  </>
}
