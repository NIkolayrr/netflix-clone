import { StyleSheet } from 'react-native'
import type { Theme } from '../../theme'

export const useStyles = (theme: Theme) =>
  StyleSheet.create({
    center: {
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loader: {
      marginVertical: theme.spacing.sm,
    },
  })
