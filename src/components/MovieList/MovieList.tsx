import { useTheme } from '@/src/theme/ThemeProvider'
import React from 'react'
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native'
import { Movie } from '../../types/Movie'
import MovieCard from '../MovieCard/MovieCard'
import { useStyles } from './styles'
import { MovieListProps } from './types'

export default function MovieList({ title, movies, horizontal = true, onItemPress, onEndReached }: MovieListProps) {
  const { theme } = useTheme()
  const styles = useStyles(theme)

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
