import { Theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

const useStyles = (theme: Theme, gradientHeight: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      paddingBottom: theme.spacing.lg,
    },
    gradientContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: gradientHeight,
      pointerEvents: 'none',
    },
    gradient: {
      flex: 1,
    },
  })

export default useStyles
