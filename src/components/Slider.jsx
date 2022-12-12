import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import {data} from "../data.js";
import {mobile} from "../../src/responsive"
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ position:"relative", overflow:"hidden" })}

`

const Arrow= styled.div`
width: 50px;
height: 50px;
background-color: #f3e3e3;
border-radius: 50%;
/* margin: auto; */
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 1;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=> (props.slideIndex-1)*(-100)}vw);
    transition: all 1s ease-out;
    ${mobile({ width: "100vw",  })}
    `

const Slide= styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props=>props.bg};

`;
const ImgContainer= styled.div`
flex: 1;
height: 100%;
`;
const InfoContainer= styled.div`
flex: 1;
padding: 50px;
`;

const Image= styled.img` 
    /* width: 100px; */
    height: 80%;
    ${mobile({ width: "100vw", height:"auto", alignSelf:"center", marginTop:"160px" })}

`
const Title=styled.h1`
    font-size: 70px;
    ${mobile({ position: "absolute", top:"10px", })}

`
const Desc=styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({ position: "absolute", margin:"auto", top:"240px", fontSize:"16px" })}

`
const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
${mobile({ position: "absolute", bottom:"80px", right:"40px" })}

`


const Slider = () => {
    const[sliderIndex, setSliderIndex]=useState(1);
    
    const handleClick =(direction)=>{
        if(direction === "left"){

            sliderIndex>1 ? setSliderIndex((prev)=>prev-1): setSliderIndex(3);
        }
        else{
            sliderIndex<3 ? setSliderIndex((prev)=>prev+1): setSliderIndex(1);
        }
};
   
    
  return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <KeyboardArrowLeft/>
        </Arrow>
        <Wrapper slideIndex={sliderIndex} >
        {data.map((d)=>(
            
            <Slide bg={d.bg} key={d.id} >
            <ImgContainer>
                <Image src={d.image} />
            </ImgContainer>
            <InfoContainer>
                <Title>{d.title} </Title>
                <Desc>{d.desc} </Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
            ))}
            </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <KeyboardArrowRight />
        </Arrow>
    </Container>
  )
}

export default Slider