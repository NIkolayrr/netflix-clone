import React from 'react'
import { test } from '@jest/globals'
import { measureRenders } from 'reassure'
import { Movie } from '@/src/types/Movie'
import MovieCard from './MovieCard'
import PerformanceProviderWrapper from '@/src/test-utils/performanceWrapper'

const generateMovies = (count: number): Movie[] =>
  Array.from({ length: count }, (_, i) => ({
    imdbID: `tt${i}`,
    Title: `Movie ${i}`,
    Poster: 'https://example.com/poster.jpg',
    Year: '2020',
    Type: 'movie',
  }))

test('MovieCard renders efficiently with many instances', async () => {
  const movies = generateMovies(50)

  await measureRenders(
    <React.Fragment>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onPress={() => {}} />
      ))}
    </React.Fragment>,
    {
      wrapper: PerformanceProviderWrapper,
      runs: 10,
    }
  )
})
