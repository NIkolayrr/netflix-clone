import { Movie } from '@/src/types/Movie'

export interface MovieListProps {
  title: string
  movies: Movie[]
  horizontal?: boolean
  onItemPress: (movie: Movie) => void
  onEndReached?: () => void
}
