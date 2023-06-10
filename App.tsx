import React from 'react'
import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { defaulTheme } from './src/themes/theme'
import { ThemeProvider } from 'styled-components'
import { AppContainer } from './App.styles'
import Home from './src/screens/Home'
import { StatusBar } from 'react-native'

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
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <AppContainer>
        <Home />
      </AppContainer>
    </ThemeProvider>
  )
}
