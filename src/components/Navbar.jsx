/** @format */

import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import LogoPng from '../assets/logo.png'

function Navbar() {
  return (
    <Container>
      <Left>
        <Logo src={LogoPng} alt='Logo Hanaterra'></Logo>HanaTerra.
      </Left>
      <Center>
        <List>
          <Item>Home</Item>
          <Item>Properties</Item>
          <Item>Contact</Item>
        </List>
      </Center>
      <Right>
        <Hamburger>
          <MenuIcon />
        </Hamburger>
      </Right>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color-primary);
  padding: 10px;
  font-size: 18px;
`

const Left = styled.div`
  flex: 1;
  font-weight: bold;
  padding-left: 10px;
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`

const Center = styled.div`
  flex: 2;
`

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`

const Item = styled.li``

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Hamburger = styled.div`
  display: none;
`
