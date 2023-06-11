import { CountersContainer, Clipboard, EmptyTasksContainer } from './styles'
import { Counter } from '../Counter'
import { Typography } from '../Typography'
import { TaskCard } from '../TaskCard'
import { FlatList, StyleSheet } from 'react-native'
import useTaskStore from '../../stores/taskStore'

export function TaskList() {
  const tasks = useTaskStore((state) => state.tasks)

  const numberOfCreatedTasks = tasks.length
  const numberOfFinishedTasks = tasks.filter(
    (item) => item.finished === true,
  ).length

  return (
    <>
      <CountersContainer>
        <Counter text="Criadas" textColor="blue" count={numberOfCreatedTasks} />
        <Counter
          text="Concluídas"
          textColor="purple"
          count={numberOfFinishedTasks}
        />
      </CountersContainer>

      <FlatList
        keyExtractor={(item) => item.description}
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard key={item.description} task={item} />
        )}
        ListEmptyComponent={() => (
          <EmptyTasksContainer>
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
          </EmptyTasksContainer>
        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  )
}

export const styles = StyleSheet.create({
  cardsContainer: {
    gap: 8,
  },
})
