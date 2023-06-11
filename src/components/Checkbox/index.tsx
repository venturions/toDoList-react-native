import { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CheckBoxContainer } from './styles'

export function MyCheckbox() {
  const [checked, setChecked] = useState(false)
  return (
    <CheckBoxContainer checked={checked} onPress={() => setChecked(!checked)}>
      {checked && (
        <MaterialCommunityIcons name="check" size={16} color="white" />
      )}
    </CheckBoxContainer>
  )
}
