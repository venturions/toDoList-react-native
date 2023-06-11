import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CheckBoxContainer } from './styles'
import { TaskProps } from '../../screens/Home'
import useTaskStore from '../../stores/taskStore'

interface CheckboxProps {
  task: TaskProps
  checked: boolean
}

export function Checkbox({ checked, task }: CheckboxProps) {
  const handleCheckTask = useTaskStore((state) => state.handleCheckTask)

  return (
    <CheckBoxContainer
      checked={checked}
      onPress={() => {
        handleCheckTask(task)
      }}
    >
      {checked && (
        <MaterialCommunityIcons name="check" size={16} color="white" />
      )}
    </CheckBoxContainer>
  )
}
