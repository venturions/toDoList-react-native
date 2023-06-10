import { Logo, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo
        source={require('../../assets/logo.svg')}
        contentFit="cover"
        transition={1000}
      />
      {/* <Typography color="gray-100">AAAAAAAAAAAAA</Typography> */}
    </HeaderContainer>
  )
}
