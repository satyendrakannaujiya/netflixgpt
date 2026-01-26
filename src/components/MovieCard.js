import React from 'react';
import { IMAGE_BASE_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
    console.log(movie, "movie in movie card");
  const { poster_path, title } = movie
  return (
    <div className="w-48 h-72 pr-4">
      <img src={IMAGE_BASE_URL + poster_path} alt={title} />
    </div>
  )
}

export default MovieCard