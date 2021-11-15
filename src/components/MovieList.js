import React from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { displayHandler } from "../redux/action";

export default function MovieList({ movieList }) {
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log("this is useEffect event ");
    axios
      .get("https://movie-app-gmc.herokuapp.com/api/movies")
      .then((res) =>  dispatch(displayHandler(res.data))  )
      .catch((err) => console.log(err));
  }, []);
const movies = useSelector(state => state.movieList)
  return (
    <div>
      <div className="movieListContainer">
        {movies.map((el, key) => (
          <MovieCard key={el.id} movie={el} />
        ))}
      </div>
    </div>
  );
}
//API
//axios
