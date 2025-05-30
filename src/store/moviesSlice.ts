import { createSlice } from '@reduxjs/toolkit'
import { omdbApi } from './api'
import { moviesAdapter } from './movieAdapter'

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(omdbApi.endpoints.searchMovies.matchFulfilled, (state, { payload }) => {
      moviesAdapter.upsertMany(state, payload.entities)
    })

    builder.addMatcher(omdbApi.endpoints.getMovieById.matchFulfilled, (state, { payload }) => {
      moviesAdapter.upsertOne(state, payload)
    })
  },
})

export default moviesSlice.reducer
