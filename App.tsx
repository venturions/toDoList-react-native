import React from 'react'
import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { defaulTheme } from './src/themes/theme'
import { ThemeProvider } from 'styled-components'
import { Home } from './src/screens/Home'
import { AppContainer } from './App.styles'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={defaulTheme}>
      <AppContainer>
        <Home />
      </AppContainer>
    </ThemeProvider>
  )
}
