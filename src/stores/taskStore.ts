import { create } from 'zustand'

export interface TaskProps {
  description: string
  finished: boolean
}

interface TaskState {
  tasks: TaskProps[]
  handleCheckTask: (task: TaskProps) => void
  handleRemoveTask: (task: TaskProps) => void
  handleAddTask: (taskName: string) => void
}

const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  handleCheckTask: (task: TaskProps) => {
    set((state) => {
      const tasksWithoutCheckedOrUncheckedOne = state.tasks.filter(
        (item) => item.description !== task.description,
      )

      const tasksAfterCheckedOrUncheckedOne = [
        ...tasksWithoutCheckedOrUncheckedOne,
        { description: task.description, finished: !task.finished },
      ]

      return {
        tasks: tasksAfterCheckedOrUncheckedOne.sort((a, b) => {
          return a.finished === b.finished ? 0 : a.finished ? -1 : 1
        }),
      }
    })
  },
  handleRemoveTask: (task: TaskProps) => {
    set((state) => ({
      tasks: state.tasks.filter((item) => item !== task),
    }))
  },
  handleAddTask: (taskName: string) => {
    set((state) => ({
      tasks: [...state.tasks, { description: taskName, finished: false }],
    }))
  },
}))

export default useTaskStore
