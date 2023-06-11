import Checkbox from 'expo-checkbox'
import { View } from 'react-native'
import { styled } from 'styled-components'
import { Image } from 'expo-image'

export const CountersContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`

export const TasksContainer = styled(View)`
  justify-content: center;
  align-items: center;
  padding: 48px 20px;

  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${(props) => props.theme.colors['gray-400']};
`

export const Clipboard = styled(Image)`
  width: 56px;
  height: 56px;
  margin-bottom: 16px;
`
export const StyledCheckbox = styled(Checkbox)`
  position: absolute;
  left: 13.64%;
  right: 13.64%;
  top: 13.64%;
  bottom: 13.64%;

  /* PurpleDark */

  background: transparent;
  border-color: #4ea8de;
  border-radius: 999px;
`
