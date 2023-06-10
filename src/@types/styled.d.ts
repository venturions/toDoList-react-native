// styled.d.ts

import 'styled-components'
import { defaulTheme } from './../themes/theme'

type ThemeType = typeof defaulTheme
export type TypographyColors = typeof defaulTheme.colors

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
