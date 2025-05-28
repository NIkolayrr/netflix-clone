import React from 'react'
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../types/Movie'
import MovieCard from './MovieCard'

interface MovieListProps {
  title: string
  movies: Movie[]
  horizontal?: boolean
  onItemPress: (movie: Movie) => void
  onEndReached?: () => void
}

export default function MovieList({ title, movies, horizontal = true, onItemPress, onEndReached }: MovieListProps) {
  const renderItem = ({ item }: ListRenderItemInfo<Movie>) => <MovieCard movie={item} onPress={onItemPress} />

  if (!movies || movies.length === 0) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        onEndReached={onEndReached}
        keyExtractor={(item, index) => `${item.imdbID}-${index}`}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={horizontal ? styles.horizontalList : styles.verticalList}
        numColumns={horizontal ? 1 : 2}
        columnWrapperStyle={!horizontal ? styles.columnWrapper : undefined}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 12,
    marginBottom: 4,
  },
  horizontalList: {
    paddingLeft: 12,
  },
  verticalList: {
    paddingHorizontal: 12,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
})
