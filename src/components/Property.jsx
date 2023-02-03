/** @format */

import { useState } from 'react'
import styled from 'styled-components'
import MuiButton from './MuiButton'
import PropertyImg from '../assets/property.png'
import ImmoVideo from '../assets/immo.mp4'

function Property() {
  const [open, setOpen] = useState(false)

  const onClick = () => {
    setOpen(true)
  }

  return (
    <Container id='property'>
      <Left>
        <Title>L'immobilier, une valeur sûre</Title>
        <Description>
          Le prix des terrains en ventes vaudra au minimum le double voir le
          triple d'ici un an
        </Description>
        <Statistics>
          <Item>
            <Quantity>500m2</Quantity>
            <Category>Superficie</Category>
          </Item>
          <Item>
            <Quantity>1000€</Quantity>
            <Category>Réservation</Category>
          </Item>
          <Item>
            <Quantity>3000€</Quantity>
            <Category>Prix</Category>
          </Item>
        </Statistics>
        <ButtonContainer>
          <MuiButton
            text='Voir Le Projet >>>'
            sx={{ margin: '8px' }}
            onClick={onClick}
          />
        </ButtonContainer>
      </Left>

      <Right>
        <VideoContainer>
          <Image src={PropertyImg} open={open} alt='Construction immobilier' />
          <Video
            src={ImmoVideo}
            autoPlay
            loop
            controls
            open={open}
            alt='présentation projet immobilier en video'
          />
        </VideoContainer>
      </Right>
    </Container>
  )
}

export default Property

const Container = styled.div`
  height: calc(100vh - 100px);
  padding: 50px 0 50px 50px;
  display: flex;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 50px 50px 0;
`

const Title = styled.h1`
  font-size: 48px;
`

const Description = styled.p`
  width: 90%;
  font-size: 18px;
`

const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`

const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
`

const Quantity = styled.span`
  font-size: 40px;
  color: var(--text-color-secondary);
`

const Category = styled.span`
  font-size: 18px;
  font-weight: 700;
`

const Right = styled.div`
  flex: 1;
  position: relative;
`

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 20px 0 0 20px;
  overflow: hidden;
`

const Image = styled.img`
  display: ${(props) => props.open && 'none'};
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
`

const Video = styled.video`
  display: ${(props) => !props.open && 'none'};
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
`
