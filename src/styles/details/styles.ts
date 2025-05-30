import { Theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

const useStyles = (theme: Theme) => {
  const { colors } = theme

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: theme.spacing.md,
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      gap: theme.spacing.md,
      marginBottom: theme.spacing.lg,
    },
    poster: {
      width: 120,
      height: 180,
      borderRadius: theme.spacing.xs,
    },
    headerInfo: {
      flex: 1,
      justifyContent: 'center',
      gap: theme.spacing.sm,
    },
    title: {
      ...theme.typography.h3,
      color: colors.text,
    },
    genre: {
      ...theme.typography.body,
      color: colors.accent,
    },
    rating: {
      ...theme.typography.body,
      color: colors.accent,
    },
    meta: {
      ...theme.typography.caption,
      color: colors.text,
      opacity: 0.7,
    },
    section: {
      marginTop: theme.spacing.lg,
    },
    sectionTitle: {
      ...theme.typography.h2,
      color: colors.text,
      marginBottom: theme.spacing.sm,
    },
    paragraph: {
      ...theme.typography.body,
      color: colors.text,
    },
    detail: {
      ...theme.typography.caption,
      color: colors.text,
      marginBottom: theme.spacing.xs,
    },
    bold: {
      fontWeight: 'bold',
      color: colors.text,
    },
  })
}

export default useStyles
