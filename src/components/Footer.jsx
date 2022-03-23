import React from 'react'
import styled from 'styled-components'
import {FiFacebook} from 'react-icons/fi'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiMapPin} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Logo = styled.h1``
const Des = styled.p`
margin:20px 0px;

`
const SoialContact = styled.div`
display: flex;
`
const SoialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;r;
margin-right: 20px;

`

const Center = styled.div`
flex:1;
display:flex;

`
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;


const Right = styled.div`
  flex: 1;
  padding: 20px;
  

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Lama.</Logo>
            <Des>
                wwwwwwwwwwwwwwwwwwwwwwwwwww
            </Des>
            <SoialContact>
                <SoialIcon color='3B5999'>
                    <FiFacebook/>
                </SoialIcon>
                <SoialIcon color='3B5999'>
                    <AiFillTwitterSquare/>
                </SoialIcon>
                <SoialIcon color='3B5999'>
                    <AiOutlineInstagram/>
                </SoialIcon>
            </SoialContact>

        </Left>
        <Center>

        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>



        </Center>
        <Right>

        <Title>Contact</Title>
        <ContactItem>
          <BiMapPin style={{marginRight:"10px"}} />  622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <AiOutlinePhone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <AiOutlineMail style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />




        </Right>
    </Container>
  )
}

export default Footer