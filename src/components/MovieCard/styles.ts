import { StyleSheet } from 'react-native'
import type { Theme } from '../../theme'

export const useStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      margin: theme.spacing.sm,
    },
    poster: {
      width: 120,
      height: 180,
      borderColor: theme.colors.accent,
      borderWidth: 2,
    },
    favourites: {
      position: 'absolute',
      top: theme.spacing.md,
      right: theme.spacing.md,
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'center',
      padding: theme.spacing.md,
    },
    title: {
        color: theme.colors.text
    }
  })
