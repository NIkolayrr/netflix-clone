import { toggleFavorite } from '@/src/store/favoritesSice'
import { useTheme } from '@/src/theme/ThemeProvider'
import { ImageBackground } from 'expo-image'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useStyles } from './styles'
import { MovieCardProps } from './types'

export default function MovieCard({ movie, onPress }: MovieCardProps) {
  const dispatch = useDispatch()
  const { theme } = useTheme()
  const styles = useStyles(theme)
  const isFav = Boolean(useSelector((state: RootState) => state.favorites.items[movie.imdbID]))
  const hasPoster = movie.Poster !== 'N/A'

  const handlCardPress = () => {
    onPress(movie)
  }

  const handleToggleFavourie = () => {
    dispatch(toggleFavorite(movie))
  }

  return (
    <TouchableOpacity onPress={handlCardPress} style={styles.card}>
      <View style={styles.poster}>
        <ImageBackground source={{ uri: movie.Poster }} contentFit='cover' style={styles.imageBackground}>
          <View style={styles.favourites}>
            <Text onPress={handleToggleFavourie}>{isFav ? '💖' : '🤍'}</Text>
          </View>
          {!hasPoster ? (
            <Animated.Text entering={FadeIn} style={styles.title}>
              {movie.Title}
            </Animated.Text>
          ) : null}
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}
