import Ionicons from '@expo/vector-icons/Ionicons'
import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../../theme/ThemeProvider'
import { useStyles } from './styles'
import { ButtonProps, ButtonVariant } from './types'

export default function Button({ title, onPress, variant = 'primary', icon, disabled = false, style }: ButtonProps) {
  const { theme } = useTheme()
  const styles = useStyles(theme)

  const variantStyles: Record<ButtonVariant, any> = {
    primary: styles.primary,
    secondary: styles.secondary,
    text: styles.textVariant,
  }
  const textStylesMap: Record<ButtonVariant, any> = {
    primary: styles.textPrimary,
    secondary: styles.textSecondary,
    text: styles.textText,
  }

  const iconStylesMap: Record<ButtonVariant, any> = {
    primary: styles.iconPrimary,
    secondary: styles.iconSecondary,
    text: styles.iconPrimary,
  }

  const variantStyle = variantStyles[variant]
  const textStyle = textStylesMap[variant]
  const iconStyle = iconStylesMap[variant]

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, variantStyle, disabled && styles.disabled, style]}
      activeOpacity={0.7}
    >
      {icon ? <Ionicons name={icon} size={16} style={[styles.icon, iconStyle]} /> : null}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}
