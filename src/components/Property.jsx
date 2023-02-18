/** @format */

import { useState } from 'react'
import styled from 'styled-components'
import MuiButton from './MuiButton'
import PropertyImg from '../assets/property.png'
import SpotVideo from '../assets/spotvideo.mp4'

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
          triple d'ici un an. La valeur estimée du terrain dans 1 an : 6000 €.
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
          <a href='#video'>
            <MuiButton
              text='Voir Le Projet >>>'
              sx={{ margin: '8px' }}
              onClick={onClick}
            />
          </a>
        </ButtonContainer>
      </Left>

      <Right id='video'>
        <VideoContainer>
          <Image src={PropertyImg} open={open} alt='Construction immobilier' />
          <Video
            src={SpotVideo}
            autoPlay
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

  @media only screen and (min-width: 1440px) {
    height: 650px;
  }
  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    height: 900px;
    padding: 30px 0 30px 30px;
    flex-direction: column;
  }
  @media only screen and (max-width: 480px) {
    height: 900px;
    padding: 20px 0 20px 20px;
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 50px 50px 0;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    padding: 0 20px 20px 20px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 20px 20px 20px;
  }
`

const Title = styled.h1`
  font-size: 48px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`

const Description = styled.p`
  width: 90%;
  font-size: 18px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    flex-wrap: wrap;
    width: 100%;
    margin: 20px 0;
  }
  @media only screen and (max-width: 480px) {
    flex-wrap: wrap;
    width: 100%;
    margin: 20px 0;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    margin: 0 20px 20px 0;
  }
  @media only screen and (max-width: 480px) {
    margin: 0 20px 20px 0;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    width: 100%;
    margin: 20px 0;
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 20px 0;
  }
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

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    flex: none;
    height: 470px;
  }
  @media only screen and (max-width: 480px) {
    height: 255px;
  }
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
