import { ReactNode } from 'react'
import { CountersContainer, TasksContainer, Clipboard } from './styles'
import { Counter } from '../Counter'
import { Typography } from '../Typography'
// import { MyCheckbox } from '../Checkbox'

interface TaskListProps {
  children?: ReactNode
}

export function TaskList({ children }: TaskListProps) {
  return (
    <>
      <CountersContainer>
        <Counter text="Criadas" textColor="blue" count={5} />
        <Counter text="Concluídas" textColor="purple" count={2} />
      </CountersContainer>
      <TasksContainer>
        <Clipboard
          source={require('../../assets/clipboard.svg')}
          contentFit="cover"
        />
        <Typography fontWeight="bold" color="gray-300">
          Você ainda não tem tarefas cadastradas
        </Typography>
        <Typography color="gray-300">
          Crie tarefas e organize seus itens a fazer
        </Typography>
        {/* <MyCheckbox /> */}
      </TasksContainer>
    </>
  )
}
