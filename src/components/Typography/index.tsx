import { ReactNode } from 'react'
import { StyledText } from './styles'

interface TypographyProps {
  children: ReactNode | string
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
