import defaultTheme from './default'
import formalTheme from './formal'
import redesTheme from './redes'
import { ThemeStyles } from './types'

export const themeStyles: Record<string, ThemeStyles> = {
  default: defaultTheme,
  formal: formalTheme,
  redes: redesTheme,
}
