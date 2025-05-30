import { toggleFavorite } from '@/src/store/favoritesSice'
import { useTheme } from '@/src/theme/ThemeProvider'
import Ionicons from '@expo/vector-icons/Ionicons'
import { ImageBackground } from 'expo-image'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useStyles } from './styles'
import { MovieCardProps } from './types'

export default function MovieCard({ movie, onPress }: MovieCardProps) {
  const dispatch = useDispatch()
  const { theme } = useTheme()
  const styles = useStyles(theme)
  const isFav = Boolean(useSelector((state: RootState) => state.favorites.items[movie.imdbID]))

  const handlCardPress = () => {
    onPress(movie)
  }

  const handleToggleFavourite = () => {
    dispatch(toggleFavorite(movie))
  }

  return (
    <TouchableOpacity onPress={handlCardPress} style={styles.card}>
      <View style={styles.poster}>
        <ImageBackground source={{ uri: movie.Poster }} contentFit='cover' style={styles.imageBackground}>
          <TouchableOpacity onPress={handleToggleFavourite} style={styles.favourites}>
            <Ionicons name={isFav ? 'heart' : 'heart-outline'} style={styles.icon} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}
