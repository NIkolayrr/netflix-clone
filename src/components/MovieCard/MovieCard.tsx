import { toggleFavorite } from '@/src/store/favoritesSice'
import { selectIsFavorite } from '@/src/store/selectors'
import { useTheme } from '@/src/theme/ThemeProvider'
import Ionicons from '@expo/vector-icons/Ionicons'
import { ImageBackground } from 'expo-image'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from './styles'
import { MovieCardProps } from './types'

export default function MovieCard({ movie, onPress }: MovieCardProps) {
  const dispatch = useDispatch()
  const { theme } = useTheme()
  const styles = useStyles(theme)
  const isFav = useSelector(selectIsFavorite(movie.imdbID))
  const [imageHasError, setImageHasError] = useState(false)

  const handlCardPress = () => {
    onPress(movie)
  }

  const handleToggleFavourite = () => {
    dispatch(toggleFavorite(movie))
  }

  const handleFaultyImage = () => {
    setImageHasError(true)
  }

  return (
    <TouchableOpacity testID={`movie-card-touchable-${movie.imdbID}`} onPress={handlCardPress} style={styles.card}>
      <View style={styles.poster}>
        <ImageBackground
          testID={`image-background-${movie.imdbID}`}
          source={{ uri: movie.Poster }}
          contentFit='cover'
          style={styles.imageBackground}
          onError={handleFaultyImage}
        >
          <TouchableOpacity
            testID={`toggle-fav-button-${movie.imdbID}`}
            onPress={handleToggleFavourite}
            style={styles.favourites}
          >
            <Ionicons name={isFav ? 'heart' : 'heart-outline'} style={styles.icon} />
          </TouchableOpacity>
          {imageHasError ? <Text style={styles.title}>{movie.Title}</Text> : null}
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}
