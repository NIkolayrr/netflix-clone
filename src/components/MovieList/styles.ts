import { StyleSheet } from 'react-native'
import type { Theme } from '../../theme'

export const useStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginVertical: theme.spacing.sm,
    },
    title: {
      color: theme.colors.text,
      marginHorizontal: theme.spacing.sm,
      marginBottom: theme.spacing.xs,
      ...theme.typography.h1,
    },
    horizontalList: {
      paddingLeft: theme.spacing.sm,
    },
    verticalList: {
      paddingHorizontal: theme.spacing.md,
    },
    columnWrapper: {
      justifyContent: 'space-between',
      marginBottom: theme.spacing.md,
    },
  })
