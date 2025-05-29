import { Theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const useStyles = (theme: Theme) => {
  const { colors, spacing, typography } = theme
  return StyleSheet.create({
    button: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderRadius: spacing.xs,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    primary: {
      backgroundColor: colors.buttonPrimary,
      minWidth: 100,
    },
    secondary: {
      backgroundColor: colors.buttonScondary,
      minWidth: 100,
    },
    textVariant: {
      backgroundColor: 'transparent',
    },
    text: {
      ...typography.body,
      textAlign: 'center',
    },
    textPrimary: {
      color: colors.background,
    },
    textSecondary: {
      color: colors.text,
    },
    textText: {
      color: colors.primary,
    },
    disabled: {
      opacity: 0.5,
    },
    icon: {
      marginRight: spacing.xs,
    },
    iconPrimary: {
      color: colors.background,
    },
    iconSecondary: {
      color: 'white',
    },
  })
}
