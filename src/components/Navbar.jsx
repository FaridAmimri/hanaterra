/** @format */

import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import LogoPng from '../assets/logo.png'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!open)
  }

  return (
    <Container>
      <Left>
        <Logo src={LogoPng} alt='Logo Hanaterra'></Logo>HanaTerra.
      </Left>
      <Center>
        <List>
          <Item>
            <a href='#service'>Nos services</a>
          </Item>
          <Item>
            <a href='#property'>Pourquoi investir ?</a>
          </Item>
          <Item>
            <a href='#contact'>Contact</a>
          </Item>
        </List>
      </Center>
      <Right>
        <Hamburger onClick={handleMenu}>
          <MenuIcon />
        </Hamburger>
      </Right>
      <Menu open={open}>
        <MenuItem onClick={handleMenu}>
          <a href='#service'>Nos services</a>
        </MenuItem>
        <MenuItem onClick={handleMenu}>
          <a href='#property'>Pourquoi investir ?</a>
        </MenuItem>
        <MenuItem onClick={handleMenu}>
          <a href='#contact'>Contact</a>
        </MenuItem>
      </Menu>
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

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    position: fixed;
    width: 96vw;
    z-index: 999;
  }
  @media only screen and (max-width: 480px) {
    position: fixed;
    width: 100vw;
    z-index: 999;
  }
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
  animation: rotation 8s infinite alternate;

  @keyframes rotation {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

const Center = styled.div`
  flex: 2;
`

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const Item = styled.li``

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    margin-right: 20px;
  }
  @media only screen and (max-width: 480px) {
    justify-content: center;
  }
`

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    display: flex;
  }
  @media only screen and (max-width: 480px) {
    display: flex;
  }
`

const Menu = styled.ul`
  display: none;
  position: fixed;
  height: calc(100vh - 70px);
  width: 50vw;
  background-color: var(--background-color-primary);
  top: 70px;
  right: ${(props) => (props.open ? '0px' : '-50vw')};
  padding: 0;
  margin: 0;
  font-weight: bold;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: all 1s ease;

  @media only screen and (max-width: 480px) {
    display: flex;
  }
`

const MenuItem = styled.li`
  z-index: 999;
  cursor: pointer;
  margin-bottom: 100px;
`
