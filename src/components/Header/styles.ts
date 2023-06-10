import { View } from 'react-native'
import { styled } from 'styled-components'
import { Image } from 'expo-image'

export const HeaderContainer = styled(View)`
  flex-direction: row;
  flex: 1;
  height: 173px;
  background-color: ${(props) => props.theme.colors['gray-700']};
  align-items: center;
  justify-content: center;
`

export const Logo = styled(Image)`
  width: 110px;
  height: 32px;
`
