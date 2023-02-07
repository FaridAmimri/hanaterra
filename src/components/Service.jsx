/** @format */

import styled from 'styled-components'
import { serviceData } from '../data'

function Service() {
  return (
    <Container id='service'>
      <Header>Obtenez Votre Projet De Rêve en 3 étapes</Header>
      <Services>
        {serviceData.map((item) => (
          <ServiceItem key={item.id}>
            <Picto src={item.picto} alt='Picto image' />
            <Title> {item.title}</Title>
            <Description> {item.description}</Description>
          </ServiceItem>
        ))}
      </Services>
    </Container>
  )
}

export default Service

const Container = styled.div`
  height: calc(100vh - 100px);
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 1440px) {
    height: auto;
  }
  @media only screen and (max-width: 480px) {
    height: auto;
    padding: 20px;
  }
`

const Header = styled.h1`
  text-align: center;
  font-size: 48px;

  @media only screen and (max-width: 480px) {
    font-size: 32px;
    margin: 20px 0;
  }
`
const Services = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 1440px) {
    margin-top: 70px;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const ServiceItem = styled.div`
  width: 26%;
  height: 232px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--background-color-primary);
  border-radius: 20px;
  padding: 30px;

  @media only screen and (max-width: 480px) {
    width: 80%;
    margin: 20px 0;
  }
`

const Picto = styled.img`
  width: 56px;
  height: 56px;

  @media only screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`

const Title = styled.h2`
  font-size: 24px;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`

const Description = styled.p`
  font-size: 16px;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`
