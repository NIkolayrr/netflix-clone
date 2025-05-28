import React, { createContext, ReactNode, useContext, useLayoutEffect } from 'react'
import { Appearance } from 'react-native'
import { DarkTheme, LightTheme, Theme } from '.'
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector'
import { setMode, toggleMode } from '../store/themeSlice'

interface ThemeContextValue {
  theme: Theme
  toggleScheme: (scheme: 'light' | 'dark') => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch()
  const mode = useAppSelector((s) => s.theme.mode)

  useLayoutEffect(() => {
    const systemMode = Appearance.getColorScheme() ?? 'light'
    dispatch(setMode(systemMode))
  }, [dispatch])

  const theme = mode === 'dark' ? DarkTheme : LightTheme
  const toggleScheme = () => dispatch(toggleMode())

  return <ThemeContext.Provider value={{ theme, toggleScheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
