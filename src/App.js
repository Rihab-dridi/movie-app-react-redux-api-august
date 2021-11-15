import logo from './logo.svg';
import './App.css';
import Navbarr from './components/Navbar';
import Filter from './components/Filter';
import Add from './components/Add';
import MovieList from './components/MovieList';
import {movies} from './components/movies'
import { useState } from 'react';



function App() {
  const [movieList, setmovieList] = useState(movies)

  


  return (
    <div className="App">
    <Navbarr/>
    <Filter  />
    <Add  />
    <MovieList  movieList={movieList} />
    </div>
  );
}

export default App;
