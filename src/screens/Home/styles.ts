import { TextInput, View, TouchableOpacity } from 'react-native'
import { styled } from 'styled-components'

interface TaskInputProps {
  isFocused: boolean
}

export const Container = styled(View)`
  flex-direction: row;
  align-items: flex-start;
`

export const HomeContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  position: absolute;
  height: 54px;
  left: 24px;
  right: 24px;
  top: 142px;
`
export const TaskInput = styled(TextInput)<TaskInputProps>`
  background-color: ${(props) => props.theme.colors['gray-500']};

  width: 271px;
  height: 54px;

  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  border: 1px solid
    ${(props) =>
      props.isFocused
        ? props.theme.colors['purple-dark']
        : props.theme.colors['gray-700']};
  border-radius: 6px;

  color: ${(props) => props.theme.colors['gray-100']};

  font-size: ${(props) => props.theme.fontSize.lg};
`

export const AddButton = styled(TouchableOpacity)`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px;
  gap: 8px;

  width: 52px;
  height: 52px;

  /* Blue */

  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 8px;

  /* Inside auto layout */
`
