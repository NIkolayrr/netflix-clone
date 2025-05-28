import { Movie } from '@/src/types/Movie'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setFeatured } from './featuredSlice'

const OMDB_KEY = process.env.EXPO_PUBLIC_OMDB_KEY

export interface SearchResponse {
  Search: Movie[]
  totalResults: string
  Response: 'True' | 'False'
  Error?: string
}

export const omdbApi = createApi({
  reducerPath: 'omdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
  endpoints: (build) => ({
    searchMovies: build.query<SearchResponse, { query: string; page?: number }>({
      query: ({ query, page = 1 }) => `?apikey=${OMDB_KEY}&s=${encodeURIComponent(query)}&page=${page}`,
      transformResponse: (response: SearchResponse) => ({
        ...response,
        totalResults: response.totalResults,
      }),
      onQueryStarted: (arg, helpers) => handleFeaturedOnQueryStarted(arg, helpers),
    }),
    getMovieById: build.query<Movie, string>({
      query: (id) => `?apikey=${OMDB_KEY}&i=${id}&plot=full`,
    }),
  }),
})

async function handleFeaturedOnQueryStarted(
  arg: { query: string; page?: number },
  helpers: { dispatch: any; queryFulfilled: Promise<{ data: SearchResponse }> }
) {
  try {
    const { data } = await helpers.queryFulfilled
    const isTrendingPage1 = arg.query === 'action' && (arg.page ?? 1) === 1
    if (isTrendingPage1 && data.Search?.length) {
      helpers.dispatch(setFeatured(data.Search[0]))
    }
  } catch {
    console.error('film not set')
  }
}

export const { useSearchMoviesQuery, useGetMovieByIdQuery } = omdbApi
