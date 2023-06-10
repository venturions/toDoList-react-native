import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { colors, fonts } from './src/themes/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estrutura</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
})
