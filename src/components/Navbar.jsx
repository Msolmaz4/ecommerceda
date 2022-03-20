import React from 'react'
import { Badge } from "@material-ui/core";
import styled from 'styled-components'
import { BsBasket3} from 'react-icons/bs'



import {AiOutlineSearch} from 'react-icons/ai'
const Container =styled.div`
height:80px;
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

display:flex;
aligin-item:center;
margin-left:25px;
padding:5px;
`
const Center = styled.div `
flex:1;
text-aligin:center;
margin:1px;
`
const Input =styled.input`

height:10px;
padding:10px;
margin:10px;
`
const Logo = styled.h1`
font-weight:bold;
padding:1px;
`

const Right = styled.div `
flex:1;
display:flex;
aligin-item:center;
justify-content:flex-end; 
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;

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
                    <AiOutlineSearch style={{color:'gray',fontSize:'16'}}/>
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
                    
                    </Right>
            
            </Wrapper>
        

        </Container>
       
        
    
  )
}

export default Navbar