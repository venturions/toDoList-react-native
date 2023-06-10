import { Header } from '../../components/Header'
import { AddButton, Container, HomeContainer, TaskInput } from './styles'
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { defaulTheme } from '../../themes/theme'

export default function Home() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
      <Container>
        <Header />
      </Container>

      <HomeContainer>
        <TaskInput
          isFocused={isFocused}
          onTouchStart={() => {
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={defaulTheme.colors['gray-300']}
        />
        <AddButton>
          <AntDesign name="pluscircleo" size={16} color="white" />
        </AddButton>
      </HomeContainer>
    </>
  )
}
