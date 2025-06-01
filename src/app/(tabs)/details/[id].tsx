import { useGetMovieByIdQuery } from '@/src/store/api'
import useStyles from '@/src/styles/details/styles'
import { useTheme } from '@/src/theme/ThemeProvider'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'
import Animated, { FadeInUp } from 'react-native-reanimated'

type Params = {
  id: string
}

export default function Details() {
  const { id } = useLocalSearchParams<Params>()
  const { data: movie, isLoading } = useGetMovieByIdQuery(id)
  const { theme } = useTheme()
  const styles = useStyles(theme)

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={theme.colors.accent} />
        <Text style={{ color: theme.colors.text, marginTop: 8 }}>Loading...</Text>
      </View>
    )
  }

  if (!movie) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: theme.colors.text }}>Movie not found</Text>
      </View>
    )
  }

  const additionDetails = [
    ['Director', movie.Director],
    ['Writer', movie.Writer],
    ['Actors', movie.Actors],
    ['Released', movie.Released],
    ['Country', movie.Country],
    ['Awards', movie.Awards],
    ['Rated', movie.Rated],
    ['Box Office', movie.BoxOffice],
    ['Production', movie.Production],
  ]

  return (
    <ScrollView style={styles.container}>
      <Animated.View key={movie.imdbID} entering={FadeInUp} style={styles.header}>
        <Image source={{ uri: movie.Poster }} style={styles.poster} resizeMode='cover' />
        <View style={styles.headerInfo}>
          <Text style={styles.title}>{movie.Title}</Text>
          <Text style={styles.genre}>{movie.Genre}</Text>
          <Text style={styles.rating}>
            ⭐ {movie.imdbRating} ({movie.imdbVotes} votes)
          </Text>
          <Text style={styles.meta}>
            {movie.Year} · {movie.Runtime} · {movie.Language}
          </Text>
        </View>
      </Animated.View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plot</Text>
        <Text style={styles.paragraph}>{movie.Plot}</Text>
      </View>

      {additionDetails.map(([label, value]) => (
        <Text key={label} style={styles.detail}>
          <Text style={styles.bold}>{label}:</Text> {value}
        </Text>
      ))}
    </ScrollView>
  )
}
