import { createSelector } from '@reduxjs/toolkit'
import { Movie } from '../types/Movie'
import { RootState } from './store'

export const selectMoviesByIds = (ids: string[]) =>
  createSelector([(state: RootState) => state.movies.entities], (entities) =>
    ids.map((id) => entities[id]).filter((m): m is Movie => Boolean(m))
  )

export const selectFavoriteMovies = (state: RootState) => state.favorites.items
