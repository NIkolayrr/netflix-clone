import { StyleSheet } from 'react-native'
import type { Theme } from '../../theme'

export const useStyles = (theme: Theme) => {
  const { spacing, colors, typography } = theme
  return StyleSheet.create({
    container: {
      marginHorizontal: spacing.sm,
      backgroundColor: colors.background,
      height: 250,
      flex: 1,
      borderRadius: 10,
      shadowColor: 'white',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.2,
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacing.sm,
    },
    heading: {
      color: colors.text,
      ...typography.h1,
      alignSelf: 'flex-start',
    },
    caption: {
      color: colors.text,
      ...typography.caption,
    },
    image: {
      flex: 1,
    },
    actionButtons: {
      marginVertical: spacing.md,
      alignSelf: 'flex-start',
      flexDirection: 'row',
    },
    playButton: {
      marginRight: spacing.sm,
    },
  })
}
