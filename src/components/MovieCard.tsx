import { toggleFavorite } from '@/src/store/favoritesSice'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Movie } from '../types/Movie'

interface Props {
  movie: Movie
  onPress: (movie: Movie) => void
}

export default function MovieCard({ movie, onPress }: Props) {
  const dispatch = useDispatch()
  const isFav = Boolean(useSelector((state: RootState) => state.favorites.items[movie.imdbID]))

  return (
    <TouchableOpacity onPress={() => onPress(movie)} style={{ margin: 8 }}>
      <Image source={{ uri: movie.Poster }} style={{ width: 120, height: 180 }} />
      <View style={{ position: 'absolute', top: 8, right: 8 }}>
        <Text onPress={() => dispatch(toggleFavorite(movie))}>{isFav ? '💖' : '🤍'}</Text>
      </View>
      <Text numberOfLines={1}>{movie.Title}</Text>
    </TouchableOpacity>
  )
}
