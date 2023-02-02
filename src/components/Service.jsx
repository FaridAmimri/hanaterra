/** @format */

import styled from 'styled-components'
import { serviceData } from '../data'

function Service() {
  return (
    <Container>
      <Header>Obtenez Votre Projet De Rêve en 3 étapes</Header>
      <Services>
        {serviceData.map((item) => (
          <ServiceItem key={item.id}>
            <Picto>{item.picto}</Picto>
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
`

const Header = styled.h1`
  text-align: center;
  font-size: 48px;
`
const Services = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ServiceItem = styled.div`
  width: 300px;
  height: 232px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--background-color-primary);
  border-radius: 20px;
  padding: 30px;
`

const Picto = styled.div`
  width: 56px;
  height: 56px;
  color: var(--text-color-secondary);
  svg {
    width: 100%;
    height: 100%;
  }
`

const Title = styled.h2`
  font-size: 24px;
`

const Description = styled.p`
  font-size: 16px;
`
