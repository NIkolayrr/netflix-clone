import { StyleSheet } from 'react-native'
import type { Theme } from '../../theme'

export const useStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      marginHorizontal: theme.spacing.xs,
    },
    poster: {
      width: 120,
      height: 180,
    },
    favourites: {
      position: 'absolute',
      top: theme.spacing.xs,
      right: theme.spacing.xs,
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'center',
      padding: theme.spacing.md,
    },
    title: {
      color: theme.colors.text,
    },
    icon: {
      fontSize: 32,
      color: theme.colors.accent,
    },
  })
