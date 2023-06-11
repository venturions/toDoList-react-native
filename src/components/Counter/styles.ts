import { View } from 'react-native'
import { styled } from 'styled-components'

export const CounterContainer = styled(View)`
  margin-top: 32px;
  flex-direction: row;
  gap: 8px;
`
export const CountContainer = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  gap: 10px;

  background: ${(props) => props.theme.colors['gray-400']};
  border-radius: 999px;
`
