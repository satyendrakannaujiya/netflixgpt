import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ title, movies }) {
  return (
    <div className='px-2'>
         <h1 className='text-3xl py-3 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex'>
               {
                movies && movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
               }
            </div>
        </div>
        
    </div>
  )
}

export default MovieList