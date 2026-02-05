import React, { use, useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  const gpt = useSelector((state) => state.gpt);
  const { showGPTSearchView } = gpt;
  return (
    <div>
      <Header />
      {showGPTSearchView ? <GptSearch /> : 
      (
      <>
      <MainContainer />
      <SecondaryContainer />
      </>
      )
      }
    </div>
  )
}

export default Browse