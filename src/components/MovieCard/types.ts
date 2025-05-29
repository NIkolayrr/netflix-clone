import { Movie } from '@/src/types/Movie'

export interface MovieCardProps {
  movie: Movie
  onPress: (movie: Movie) => void
}
