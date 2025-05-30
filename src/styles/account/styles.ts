import { Theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

const useStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingVertical: theme.spacing.md,
    },
    switchContainer: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.sm,
      marginBottom: theme.spacing.md,
    },
    themeMode: {
      ...theme.typography.h3,
      color: theme.colors.text,
    },
    icon: {
      marginRight: theme.spacing.xs,
      color: theme.colors.text,
      fontSize: 18,
    },
  })

export default useStyles
