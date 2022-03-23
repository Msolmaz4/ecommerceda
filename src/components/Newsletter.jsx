import {AiOutlineSend } from'react-icons/ai'
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

const Title = styled.h1``

const Description = styled.div`
font-size:24px;
font-weight:300;
margin

`

const InputContainer = styled.div``

const Input = styled.input``
const Button = styled.button``


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletetr</Title>
        <Description>aaaaaaaaaaaaaa</Description>
        <InputContainer>
        <Input placeholder='eingeben zour Mail'/>
        <Button>
            <AiOutlineSend/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter