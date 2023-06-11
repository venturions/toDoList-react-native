import { Checkbox } from '../Checkbox'
import { CustomTypography, TaskContainer } from './styles'
import { Alert, Pressable, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { defaulTheme } from '../../themes/theme'
import { TaskProps } from '../../screens/Home'
import useTaskStore from '../../stores/taskStore'

interface TaskCardProps {
  task: TaskProps
}

export function TaskCard({ task }: TaskCardProps) {
  const removeTask = useTaskStore((state) => state.handleRemoveTask)

  function handleRemoveTask() {
    Alert.alert('Remover', `Tem certeza que deseja remover a tarefa?`, [
      {
        text: 'Sim',
        onPress: () => {
          removeTask(task)
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <TaskContainer>
      <Checkbox checked={task.finished} task={task} />
      <CustomTypography
        color={task.finished ? 'gray-300' : 'gray-100'}
        checked={task.finished}
      >
        {task.description}
      </CustomTypography>
      <Pressable
        onPress={() => {
          handleRemoveTask()
        }}
      >
        <FontAwesome5
          style={styles.icon}
          name="trash-alt"
          size={16}
          color={defaulTheme.colors['gray-300']}
        />
      </Pressable>
    </TaskContainer>
  )
}

export const styles = StyleSheet.create({
  icon: {
    width: 20,
  },
})
