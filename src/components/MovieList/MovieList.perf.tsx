import { measureRenders } from 'reassure'
import MovieList from './MovieList'
import { Movie } from '@/src/types/Movie'
import PerformanceProviderWrapper from '@/src/test-utils/performanceWrapper'

const generateMovies = (count: number): Movie[] =>
  Array.from({ length: count }, (_, i) => ({
    imdbID: `tt${i}`,
    Title: `Movie ${i}`,
    Poster: 'https://example.com/poster.jpg',
    Year: '2020',
    Type: 'movie',
  }))

test('MovieList renders efficiently with many movies', async () => {
  const movies = generateMovies(100)

  await measureRenders(<MovieList title='Performance Test' movies={movies} onItemPress={() => {}} />, {
    wrapper: PerformanceProviderWrapper,
    runs: 10,
  })
})
