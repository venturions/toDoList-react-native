import { Header } from '../../components/Header'
import {
  AddButton,
  Container,
  FormContainer,
  TaskInput,
  TaskListContainer,
} from './styles'
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { defaulTheme } from '../../themes/theme'
import { TaskList } from '../../components/TaskList'
import useTaskStore from '../../stores/taskStore'
import { Alert } from 'react-native'

export interface TaskProps {
  description: string
  finished: boolean
}

export default function Home() {
  const [taskName, setTaskName] = useState('')

  const addTask = useTaskStore((state) => state.handleAddTask)
  const tasks = useTaskStore((state) => state.tasks)

  function handleAddTask() {
    if (tasks.some((item) => item.description === taskName)) {
      return Alert.alert(
        'Tarefa já existe',
        'Adicione uma tarefa não existente.',
        [{ text: 'OK' }],
      )
    }
    if (taskName.length > 0) {
      addTask(taskName)
      setTaskName('')
    }
  }

  return (
    <>
      <Container>
        <Header />
      </Container>

      <FormContainer>
        <TaskInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={defaulTheme.colors['gray-300']}
          value={taskName}
          onChangeText={setTaskName}
        />
        <AddButton onPress={handleAddTask}>
          <AntDesign name="pluscircleo" size={16} color="white" />
        </AddButton>
      </FormContainer>
      <TaskListContainer>
        <TaskList />
      </TaskListContainer>
    </>
  )
}
