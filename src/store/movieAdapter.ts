import { createEntityAdapter } from '@reduxjs/toolkit'
import { Movie } from '../types/Movie'

export const moviesAdapter = createEntityAdapter<Movie, string>({
  selectId: (movie) => movie.imdbID,
})
