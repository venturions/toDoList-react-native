import { Typography } from '../Typography'
import { CountContainer, CounterContainer } from './styles'
import { Color } from '../../@types/colors'

interface CounterProps {
  count: number
  text: string
  textColor: Color
}

export function Counter({ count, text, textColor }: CounterProps) {
  return (
    <CounterContainer>
      <Typography color={textColor} fontWeight="bold">
        {text}
      </Typography>
      <CountContainer>
        <Typography color="gray-200" fontWeight="bold" size="sm">
          {count}
        </Typography>
      </CountContainer>
    </CounterContainer>
  )
}
