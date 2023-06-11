import { View } from 'react-native'
import { styled } from 'styled-components'
import { Typography } from '../Typography'

interface CustomTypographyProps {
  checked: boolean
}

export const TaskContainer = styled(View)`
  box-sizing: border-box;

  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  padding: 12px 8px 12px 12px;
  gap: 12px;

  min-height: 64px;

  background: ${(props) => props.theme.colors['gray-500']};

  border: 1px solid ${(props) => props.theme.colors['gray-400']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`

export const CustomTypography = styled(Typography)<CustomTypographyProps>`
  flex: 1;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`
