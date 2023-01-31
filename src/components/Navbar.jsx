/** @format */

import '../global.css'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'

function Navbar() {
  return (
    <Container>
      <Left>HanaTerra.</Left>
      <Center>
        <List>
          <Item>Home</Item>
          <Item>Properties</Item>
          <Item>Contact</Item>
        </List>
      </Center>
      <Right>
        <MenuIcon />
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
  background-color: var(--background-color-secondary);
  padding: 10px;
  font-size: 18px;
`

const Left = styled.div`
  flex: 1;
  font-weight: bold;
  padding-left: 10px;
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
