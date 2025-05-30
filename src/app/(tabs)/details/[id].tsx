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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Details</Text>
        <Text style={styles.detail}>
          <Text style={styles.bold}>Director:</Text> {movie.Director}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.bold}>Writer:</Text> {movie.Writer}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.bold}>Actors:</Text> {movie.Actors}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.bold}>Released:</Text> {movie.Released}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.bold}>Country:</Text> {movie.Country}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.bold}>Awards:</Text> {movie.Awards}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.bold}>Rated:</Text> {movie.Rated}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.bold}>Box Office:</Text> {movie.BoxOffice}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.bold}>Production:</Text> {movie.Production}
        </Text>
      </View>
    </ScrollView>
  )
}
