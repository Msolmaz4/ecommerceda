import React from 'react'
import { TiArrowLeftOutline , TiArrowRightOutline } from 'react-icons/ti'
import styled from "styled-components"
//import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Container =styled.div`
height:100vh;
width:100%;
display:flex;
background-color:coral;
position:absolute;
`

const Arrow =styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
`

const Wrapper = styled.div`
height:100;

`

const Slide = styled.div`
display:flex;
aligin-items:center
`
const ImgContanier = styled.div`
flex:1;

`
const Image = styled.img`

`

const InfoConyainer= styled.div`
flex:1;

`




const Slid = () => {
  return (
    <Container>
   <Arrow  direction='left'>
   <TiArrowLeftOutline />
      </Arrow>
    <Wrapper>
      <ImgContanier>
      <Image src='https://i.ibb.co/XsdmR2c/1.png'/>
      </ImgContanier>
      <InfoConyainer>

      </InfoConyainer>

    </Wrapper>


      <Arrow direction='right'>
    <TiArrowRightOutline/>
      </Arrow>
        
    </Container>
  )
}

export default Slid