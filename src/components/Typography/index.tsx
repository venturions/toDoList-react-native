import { StyledText } from './styles'
import { Color } from '../../@types/colors'
import { TextProps } from 'react-native'

interface TypographyProps extends TextProps {
  color?: Color
  size?: 'sm' | 'md' | 'lg'
  fontWeight?: 'regular' | 'bold'
}

export function Typography({
  size = 'md',
  fontWeight = 'regular',
  children,
  color = 'gray-100',
  ...props
}: TypographyProps) {
  return (
    <StyledText size={size} fontWeight={fontWeight} color={color} {...props}>
      {children}
    </StyledText>
  )
}
