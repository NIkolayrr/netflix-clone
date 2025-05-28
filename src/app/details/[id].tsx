import { useGetMovieByIdQuery } from '@/src/store/api'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useLayoutEffect } from 'react'
import { Image, Text, View } from 'react-native'

type Params = {
  id: string
}

export default function Details() {
  const { id } = useLocalSearchParams<Params>()
  const { data: movie, isLoading } = useGetMovieByIdQuery(id)
  const navigation = useNavigation()

  useLayoutEffect(() => {
    if (movie?.Title) {
      navigation.setOptions({ title: movie.Title })
    }
  }, [navigation, movie])

  if (isLoading) return <Text>Loading…</Text>
  if (!movie) return <Text>Movie not found</Text>

  return (
    <View>
      <Text>{movie.Title}</Text>
      <Text>{movie.Plot}</Text>
      <Image source={{ uri: movie.Poster }} style={{ width: 120, height: 180 }} />
    </View>
  )
}
