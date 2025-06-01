import { useTheme } from '@/src/theme/ThemeProvider'
import { router } from 'expo-router'
import { ActivityIndicator, Text, View } from 'react-native'
import { usePaginatedMovies } from '../../hooks/usePaginatedMovies'
import MovieList from '../MovieList/MovieList'
import { useStyles } from './styles'
import { CategoryListProps } from './types'

export default function CategoryList({ title, query }: CategoryListProps) {
  const { movies, isLoading, isFetching, error, loadMore } = usePaginatedMovies(query)
  const { theme } = useTheme()
  const styles = useStyles(theme)

  if (isLoading && movies.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator testID='loading-category' />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Error loading {title}</Text>
      </View>
    )
  }

  return (
    <View>
      <MovieList
        title={title}
        movies={movies}
        onItemPress={(movie) => {
          router.push(`./details/${movie.imdbID}`)
        }}
        onEndReached={loadMore}
      />
    </View>
  )
}
