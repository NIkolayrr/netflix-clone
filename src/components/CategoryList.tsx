import { router } from 'expo-router'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import MovieList from '../components/MovieList'
import { usePaginatedMovies } from '../hooks/usePaginatedMovies'

interface CategoryListProps {
  title: string
  query: string
}

export default function CategoryList({ title, query }: CategoryListProps) {
  const { movies, isLoading, isFetching, error, loadMore } = usePaginatedMovies(query)

  if (isLoading && movies.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
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
      {isFetching && <ActivityIndicator style={styles.loader} />}
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    marginVertical: 8,
  },
})
