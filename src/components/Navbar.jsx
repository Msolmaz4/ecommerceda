import React from 'react'

import styled from 'styled-components';


const Container =styled.div`
height:60px;
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
`
const Left = styled.div `
flex:1;
`
const Langue = styled.div`
font-size:14;
cursor: pointer;
`
const Center = styled.div `
flex:1;
`

const Right = styled.div `
flex:1;
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
                            input 
                            icon
                        </SearcContainer>
                            </Left>
                <Center>CENTER</Center>
                <Right>RIGT</Right>
            
            </Wrapper>
        

        </Container>
       
        
    
  )
}

export default Navbar