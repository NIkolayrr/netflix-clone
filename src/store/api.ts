import { FullMovie, Movie } from '@/src/types/Movie'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setFeatured } from './featuredSlice'

const OMDB_KEY = process.env.EXPO_PUBLIC_OMDB_KEY

export interface SearchResponse {
  Search: Movie[]
  totalResults: string
  Response: 'True' | 'False'
  Error?: string
}

export interface NormalizedSearchResponse {
  entities: Movie[]
  totalResults: number
}

export const omdbApi = createApi({
  reducerPath: 'omdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
  endpoints: (build) => ({
    searchMovies: build.query<NormalizedSearchResponse, { query: string; page?: number }>({
      query: ({ query, page = 1 }) => `?apikey=${OMDB_KEY}&s=${encodeURIComponent(query)}&page=${page}`,

      transformResponse: (response: SearchResponse) => {
        const filtered: Movie[] = response.Search.filter((m) => m.Poster && m.Poster !== 'N/A')
        const entities: Movie[] = filtered.map((m) => ({
          ...m,
          id: m.imdbID,
        }))
        return {
          entities,
          totalResults: Number(response.totalResults),
        }
      },
      onQueryStarted: async (_arg, { dispatch, getState, queryFulfilled }: any) => {
        try {
          const { data } = await queryFulfilled

          const currentFeatured = getState().featured.movie
          if (!currentFeatured && data.entities.length > 0) {
            const featuredMovie = data.entities[0]
            dispatch(setFeatured(featuredMovie))
          }
        } catch (e) {
          console.error('Failed to auto-set featured movie')
        }
      },
    }),
    getMovieById: build.query<FullMovie, string>({
      query: (id) => `?apikey=${OMDB_KEY}&i=${id}&plot=full`,
    }),
  }),
})

export const { useSearchMoviesQuery, useGetMovieByIdQuery } = omdbApi
