import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../types/Movie'

interface FeaturedState {
  movie: Movie | null
}

const initialState: FeaturedState = { movie: null }

export const featuredSlice = createSlice({
  name: 'featured',
  initialState,
  reducers: {
    setFeatured: (state, action: PayloadAction<Movie>) => {
      state.movie = action.payload
    },
    clearFeatured: (state) => {
      state.movie = null
    },
  },
})

export const { setFeatured, clearFeatured } = featuredSlice.actions
export default featuredSlice.reducer
