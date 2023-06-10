import styled from 'styled-components'
import { Text } from 'react-native'

export interface BaseTypography {
  color:
    | 'blue-dark'
    | 'blue'
    | 'purple-dark'
    | 'purple'
    | 'gray-700'
    | 'gray-600'
    | 'gray-500'
    | 'gray-400'
    | 'gray-300'
    | 'gray-200'
    | 'gray-100'
    | 'danger'
  size: 'sm' | 'md' | 'lg'
  fontWeight: 'regular' | 'bold'
}

export const StyledText = styled(Text)<BaseTypography>`
  font-size: ${(props) =>
    props.size === 'sm'
      ? '12px'
      : props.size === 'lg'
      ? '16px'
      : props.size === 'md' && '14px'};
  font-weight: ${(props) => (props.fontWeight === 'bold' ? 700 : 400)};
  color: ${(props) => props.theme.colors[props.color]};
`
