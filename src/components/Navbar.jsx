import React from 'react'
import { Badge } from "@material-ui/core";
import styled from 'styled-components'
import { BsBasket3} from 'react-icons/bs'



import {AiOutlineSearch} from 'react-icons/ai'
const Container =styled.div`
height:60px;
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
`
const Left = styled.div `
flex:1;
display:flex;
aligin-item:center;

`
const Langue = styled.div`
font-size:14;
cursor: pointer;
`
const SearcContainer = styled.div`
border: 0.5px solid lightgray;
display:flex;
aligin-item:center;
margin-left:25px;
padding:5px;
`
const Center = styled.div `
flex:1;
text-aligin:center;
`
const Input =styled.input`
border:none;
`
const Logo = styled.h1`
font-weight:bold;
`

const Right = styled.div `
flex:1;
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;

`





const Navbar = () => {
  return (
    
        <Container>
            <Wrapper>
                <Left>  
                    <Langue>
                        EN
                        </Langue>  
                        <SearcContainer>
                            <Input />
                    <AiOutlineSearch />
                        </SearcContainer>
                            </Left>
                <Center><Logo>Lama</Logo></Center>
                <Right>
                    
                    <MenuItem>Register</MenuItem>
                    <MenuItem>sign in</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="secondary">

                    <BsBasket3/>
                    </Badge>
        
            
                    </MenuItem>
                    
                    RIGT</Right>
            
            </Wrapper>
        

        </Container>
       
        
    
  )
}

export default Navbar