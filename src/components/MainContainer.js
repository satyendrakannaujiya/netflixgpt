import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if(!movies) return null; // If movies is undefined, return null
  const maineMovie = movies && movies.length > 0 ? movies[0] : [];
  console.log("Main container movie ", maineMovie);
  const { original_title, overview } = maineMovie
  return (
    <div className="relative">
      <VideoTitle title={original_title} overview={overview}  />
    <VideoBackground movieId={maineMovie.id} />
    </div>
   )
}

export default MainContainer