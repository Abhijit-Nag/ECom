import React from 'react'
import styled from 'styled-components'
import {mobile} from "../../src/responsive";
const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: whitesmoke;
margin: 50px;
border: none;
border-radius: 10px;
flex: 1;
box-shadow: 6px 10px 10px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 6px 10px 10px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 6px 10px 10px 0px rgba(0,0,0,0.75);
padding: 10px;
${mobile({ width:"100%", margin:"0", borderRadius:"0" })}
`
const Image=styled.img`
width: 100%;
${mobile({ width:"100vw",})}
`
const Info=styled.div`
margin: 10px;
display: flex;
flex-direction: column;
    ${mobile({  position:"absolute", marginTop:"200px", marginRight:"46px" })}
/* background-color: red; */
/* width: 100%; */
`
const Title=styled.div`
font-size: 25px;
margin: 15px 0;
`
const Button=styled.button`
padding: 10px 0;
border-radius: 10px;
font-size: 15px;
background-color: crimson;
color: white;
border: none;
${mobile({ opacity:"0.6", backgroundColor:"black", borderRadius:"2px"})}
`


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title} </Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem