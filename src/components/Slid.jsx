import React, { useState } from 'react'
import { TiArrowLeftOutline , TiArrowRightOutline } from 'react-icons/ti'
import styled from "styled-components"
//import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sliderItems } from '../data'


const Container =styled.div`
height:100vh;
width:100%;
display:flex;
background-color:coral;S
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
z-index:2;
`

const Wrapper = styled.div`
height:100;
display:flex;
transition:all 1.5s ease;
transform:translateX(${(props)=>props.slideIndex * -100}vw);

`

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
aligin-items:center;
background-color:#${props=>props.bg};
`
const ImgContanier = styled.div`
height:100%
flex:1;

`
const Image = styled.img`
height:80%
`

const InfoConyainer= styled.div`
flex:1;
padding:50px;

`

const Title =styled.h1`


`

const Desc =styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500px;
letter-spacig:3px;
cursor:pointer;

`
const Button =styled.button`
padding:10px;
font-size:20px;
background-color:transparent;

`

const Slid = () => {

  const [slideIndex,setSlideIndex] = useState(0)

const handleClick =(direction)=>{
  if(direction==='left')
  {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
  }
  else 
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
}




  return (
    <Container>
   <Arrow  direction='left' onClick={()=> handleClick('left')}>
   <TiArrowLeftOutline />
      </Arrow>
    <Wrapper slideIndex={slideIndex}>

{
  sliderItems.map((item)=>(
    <Slide bg={item.bg}>
    <ImgContanier>
    <Image src={item.img}/>
    </ImgContanier>
    <InfoConyainer>
<Title>{item.title} </Title>
<Desc>{item.desc}</Desc>
<Button> Show Now</Button>
    </InfoConyainer>
    </Slide>
  ))
}


 
 
    </Wrapper>


      <Arrow direction='right' onClick={()=> handleClick('right')}>
    <TiArrowRightOutline/>
      </Arrow>
        
    </Container>
  )
}

export default Slid