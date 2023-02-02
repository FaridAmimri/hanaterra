/** @format */

import styled from 'styled-components'
import Box from '@mui/material/Box'
import MuiButton from './MuiButton'
import PhonePng from '../assets/phone.png'
import SendPng from '../assets/send.png'
import MuiInput from './MuiInput'

function Footer() {
  return (
    <Container>
      <Top>
        <Left>
          <Title>
            Profitez De L'offre Promotionnelle Pour Votre Maison De Rêve
          </Title>
        </Left>
        <Right>
          <Content>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viva mus
              viverra auctor velit. Vestibulum id velit aliquam, placerat lacus
              et, consequat leo.{' '}
            </Description>
            <Action>
              <MuiButton text="C'est parti" />
            </Action>
          </Content>
        </Right>
      </Top>

      <Bottom>
        <ContactContainer>
          <LeftContact>
            <ContactItem>
              <ContactTitle>Contactez-nous</ContactTitle>
            </ContactItem>
            <ContactItem>
              <ContactIcon src={PhonePng} alt='phone icon' />
              <ContactText>+33 6 14 24 64 63</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon src={SendPng} alt='mail icon' />
              <ContactText>hanaterra3@gmail.com</ContactText>
            </ContactItem>
          </LeftContact>

          <RightContact>
            <Box
              component='form'
              sx={{
                '& .MuiTextField-root': { m: 1 }
              }}
              noValidate
              autoComplete='off'
              // ref={formRef}
            >
              <Form>
                <LeftForm>
                  <MuiInput
                    label='Nom'
                    name='name'
                    // value={values.name}
                    // error={errors.name}
                    // onChange={handleInputChange}
                  />
                  <MuiInput
                    label='Email'
                    name='email'
                    // value={values.email}
                    // error={errors.email}
                    // onChange={handleInputChange}
                  />
                </LeftForm>
                <RightForm>
                  <MuiInput
                    label='Message'
                    name='message'
                    multiline
                    rows={5}
                    fullWidth
                    // value={values.message}
                    // error={errors.message}
                    // onChange={handleInputChange}
                  />
                  <MuiButton
                    variant='outlined'
                    sx={{ margin: '8px' }}
                    text='Envoyer'
                    // onClick={handleSubmit}
                  />
                </RightForm>
              </Form>

              {/* {loading && (
            <LoaderContainer>
              <CircularProgress color='primary' />
            </LoaderContainer>
          )}
          {success && (
            <Notification>Votre message a bien été envoyé.</Notification>
          )} */}
            </Box>
          </RightContact>
        </ContactContainer>

        <BrandContainer>
          <Brand>HanaTerra.</Brand>
        </BrandContainer>
      </Bottom>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const Top = styled.div`
  width: 80%;
  height: 200px;
  background-color: var(--background-color-primary);
  border-radius: 20px;
  display: flex;
  padding: 40px;
  position: absolute;
  top: 6%;
  z-index: 99;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-size: 40px;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0 20px 20px;
`

const Description = styled.p`
  font-size: 18px;
`

const Action = styled.div``

const Bottom = styled.div`
  background-color: var(--background-color-secondary);
  height: 60%;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: var(--text-color-tertiary);
`

const LeftContact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-self: end;
  font-size: 18px;
  padding: 30px;
`

const ContactTitle = styled.h3`
  font-size: 20px;
`

const ContactItem = styled.div`
  display: flex;
  margin: 10px 0;
`

const ContactIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 8px;
`

const ContactText = styled.p``

const BrandContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
`

const Brand = styled.span`
  font-size: 18px;
  align-self: center;
`

const RightContact = styled.div`
  flex: 2;
  padding: 20px;
`

const Form = styled.div`
  display: flex;
  input,
  textarea,
  label {
    color: var(--text-color-tertiary);
  }
`

const LeftForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const RightForm = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
