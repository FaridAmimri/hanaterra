/** @format */

import styled from 'styled-components'
import MuiButton from './MuiButton'
import HouseImg from '../assets/house.png'
import { introData } from '../data'

function Intro() {
  return (
    <Container>
      <Left>
        <Header>HANATERRA CONSTRUCTION</Header>
        <Title>La Meilleure Place Pour Trouver Votre Maison De Rêve</Title>
        <Description>
          Devenez propriétaire en Côte d'ivoire. Un projet situé sur l'axe
          Abidjan Yamoussoukro, proche de l'autoroute du nord.
        </Description>
        <Contact>
          <ContactText>Offre Promotionnelle de lancement</ContactText>
          <MuiButton text='En savoir plus' />
        </Contact>
      </Left>
      <Right>
        <InfoContainer>
          {introData.map((item) => (
            <Item key={item.id}>
              <Quantity>
                <Picto>{item.picto}</Picto>
                <Content>{item.quantity}</Content>
              </Quantity>
              <Category>{item.category}</Category>
            </Item>
          ))}
        </InfoContainer>
        <ImageContainer>
          <Image src={HouseImg} />
        </ImageContainer>
      </Right>
    </Container>
  )
}

export default Intro

const Container = styled.div`
  height: calc(100vh - 110px);
  display: flex;
  background-color: var(--background-color-primary);
  padding: 20px 0 20px 20px;
`

const Left = styled.div`
  flex: 1;
  padding: 0 40px 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.span`
  color: var(--text-color-primary);
  font-size: 18px;
  font-weight: 500;
`

const Title = styled.h1`
  font-size: 50px;
  width: 95%;
`

const Description = styled.p`
  font-size: 18px;
`

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-color);
  padding: 10px;
  border-radius: 12px;
`

const ContactText = styled.span`
  font-size: 18px;
  color: gray;
`

const Right = styled.div`
  flex: 1;
  position: relative;
`

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 20px 0 0 20px;
  overflow: hidden;
`

const Image = styled.img`
  position: absolute;
  width: 100%;
  right: 0;
`

const InfoContainer = styled.div`
  width: 300px;
  position: absolute;
  top: 80%;
  left: 85px;
  border-radius: 16px;
  background-color: var(--background-color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  z-index: 999;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
`

const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Picto = styled.div`
  width: 24px;
  height: 24px;
  color: var(--text-color-primary);
`

const Content = styled.span`
  font-size: 14px;
  font-weight: bold;
  padding-left: 3px;
  text-align: center;
`

const Category = styled.div`
  color: gray;
  font-size: 14px;
  display: flex;
  justify-content: center;
  padding-top: 2px;
`
