import { darkColors, lightColors } from './colors'
import { spacing } from './spacing'
import { typography } from './typography'

export interface Theme {
  colors: typeof lightColors
  spacing: typeof spacing
  typography: typeof typography
}

export const LightTheme: Theme = {
  colors: lightColors,
  spacing,
  typography,
}

export const DarkTheme: Theme = {
  colors: darkColors,
  spacing,
  typography,
}
