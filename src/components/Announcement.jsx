import styled from 'styled-components'
import React from 'react'
import Timer from './Timer'
import {mobile} from "../responsive"
import { Link } from 'react-router-dom'

const Container =styled.div`
height: 30px;
background-color: teal;
color: white;
font-family: 'Caveat', cursive;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
font-weight: 500;
padding: 20px;
/* font-family: Orbitron; */

`
const Desc =styled.p`
  font-family: kalam;
  ${mobile({fontSize:"10px"})}
`
const Content=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}
`
const Span=styled.span`
  margin-left: 80px;
  font-size: 37px;
  font-family: 'Nerko One', cursive;
  transition: all 0.5s ease;
  color: black;
  cursor: pointer;
  padding: 10px;
  /* background-color: #192e5866; */
  background-color: #e3980d;
  text-decoration: underline;
  &:hover{
    transform: scale(1.2);

  }
  ${mobile({margin:"0",padding:"0", marginLeft:"20px", marginTop:"10px",fontSize:"20px"})}
`

const Announcement = () => {
  return (
    <Container>
     <Desc>Free Shipping for the weekends! 
     Black Friday ends on</Desc> 
     <Content>
      <Timer/>  
      <Span><Link className='link' to="/musics" > Something Special!!!!</Link></Span>
      </Content>
    </Container>

  )
}

export default Announcement