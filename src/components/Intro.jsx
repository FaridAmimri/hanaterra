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
        <Title>La Meilleure Place Pour Votre Projet De Rêve</Title>
        <Description>
          Devenez propriétaire en Côte d'ivoire. Un projet situé sur l'axe
          Abidjan Yamoussoukro, proche de l'autoroute du nord.
        </Description>
        <Contact>
          <ContactText>Offre Promotionnelle</ContactText>
          <a href='#contact'>
            <MuiButton text='En savoir plus' />
          </a>
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

  @media only screen and (min-width: 1440px) {
    height: 650px;
  }
  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    height: auto;
    flex-direction: column;
    padding: 0 0 30px 0;
  }
  @media only screen and (max-width: 480px) {
    height: auto;
    flex-direction: column;
    padding: 0 0 30px 0;
  }
`

const Left = styled.div`
  flex: 1;
  padding: 0 40px 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    padding: 0 30px 30px 30px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 20px 20px 20px;
  }
`

const Header = styled.span`
  color: var(--text-color-primary);
  font-size: 18px;
  font-weight: 500;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    font-size: 14px;
    margin-top: 80px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 14px;
    margin-top: 80px;
  }
`

const Title = styled.h1`
  font-size: 50px;
  width: 95%;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    font-size: 45px;
    width: 100%;
    margin-top: 20px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 40px;
    width: 100%;
    margin-top: 20px;
  }
`

const Description = styled.p`
  font-size: 18px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    margin-top: 20px;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
`

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-color);
  padding: 10px;
  border-radius: 12px;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    margin-top: 20px;
    width: 75%;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
`

const ContactText = styled.span`
  font-size: 18px;
  color: gray;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    font-size: 17px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`

const Right = styled.div`
  flex: 1;
  position: relative;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    padding-left: 30px;
    height: 700px;
  }
  @media only screen and (max-width: 480px) {
    padding-left: 20px;
  }
`

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 32px 0 0 32px;
  overflow: hidden;

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    border-radius: 24px 0 0 24px;
    height: 700px;
  }
  @media only screen and (max-width: 480px) {
    border-radius: 24px 0 0 24px;
    height: 360px;
  }
`

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  z-index: 99;
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
  z-index: 990;

  @media only screen and (min-width: 1440px) {
  }
  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    top: 590px;
    left: calc((100vw - 320px) / 2);
  }
  @media only screen and (max-width: 480px) {
    width: 280px;
    top: 264px;
    left: calc((100vw - 300px) / 2);
  }
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
