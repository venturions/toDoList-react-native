import styled from 'styled-components'
import { Text } from 'react-native'
import { Color } from '../../@types/colors'

export interface BaseTypography {
  color: Color
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
