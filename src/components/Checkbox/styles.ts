import { Pressable } from 'react-native'
import { styled } from 'styled-components'

interface CheckboxStyleProps {
  checked: boolean
}

export const CheckBoxContainer = styled(Pressable)<CheckboxStyleProps>`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  border: ${(props) =>
    props.checked ? 'none' : `2px solid ${props.theme.colors.blue}`};

  background: ${(props) =>
    props.checked ? props.theme.colors['purple-dark'] : 'transparent'};
`
