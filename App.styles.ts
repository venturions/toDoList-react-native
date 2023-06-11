import { View } from 'react-native'
import styled from 'styled-components'

export const AppContainer = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors['gray-600']};
`
