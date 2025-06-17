import { ThemeContext } from '@app/shared/theme/theme-context'
import { useContext } from 'react'

export const useTheme = () => useContext(ThemeContext)
