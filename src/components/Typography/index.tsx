import { ReactNode } from 'react'
import { StyledText } from './styles'
import { Color } from '../../@types/colors'

interface TypographyProps {
  children: ReactNode | string
  color: Color
  size?: 'sm' | 'md' | 'lg'
  fontWeight?: 'regular' | 'bold'
}

export function Typography({
  size = 'md',
  fontWeight = 'regular',
  children,
  color = 'gray-100',
}: TypographyProps) {
  return (
    <StyledText size={size} fontWeight={fontWeight} color={color}>
      {children}
    </StyledText>
  )
}
