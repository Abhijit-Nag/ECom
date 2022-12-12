import styled from 'styled-components'
import React from 'react'
import shirt1 from "../assets/shirt1.png"
import {mobile} from "../../src/responsive"
import { Favorite, FavoriteBorderOutlined, Pause, PlayArrow, PlayCircleFilled, Share, ThumbUp, ThumbUpAltOutlined } from '@material-ui/icons'
import useSound from 'use-sound'
import ak from "../assets/musics/ak.mp3"
import { useState } from 'react'

const Container=styled.div`
    width: 50%;
    /* border: 1px solid teal; */
    margin: 10px;
    margin-top: 30px;
    border-radius: 12px;
    background-color: #40466a;
    transition: all 0.5s ease;
    ${mobile({width:"100%", margin:"0", height:"100vh",marginTop:"10px"})}
`
const Card=styled.div`
    width: 100%;
    position: relative;
    transition: all 0.5s ease;
    &:hover{
        opacity: 0.8;
        transform: scale(1.1);
    }
    ${mobile({width:"100%", marginTop:"0px", })}
`
const ImageContainer=styled.div`
    width: 100%;
`
const Image=styled.img`
    width: 100%;
    max-height: 460px;
    border-radius: 12px;
    ${mobile({width:"auto%", margin:"0",marginTop:"40px",height:"400px"})}
    
`
const Span= styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50%;
    font-size: 60px;
    /* margin: auto; */
    ${mobile({fontSize:"40px", })}
`
const Info=styled.div`
   display: flex;
   justify-content: space-around;
    ${mobile({ marginTop: "40px",})}
`
const Icon=styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 30px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
       transform: scale(1.15);
       color: #17175b;
    }
    
`
const Action=styled.div`
    display: flex;
    justify-content: space-around;
    transition: all 0.5s ease;
    cursor: pointer;
    ${mobile({marginTop:"20px"})}
    
`
const Button=styled.span`

transition: all 0.5s ease;
    
    &:hover{
        transform: scale(1.2);
    }
    &:focus{
        color: red;
    }
`
const Hr=styled.hr`
    margin-top: 10px;
    border: 1px solid white;
    height: 3px;
`

const Music = ({data}) => {
    const [play, {stop}]=useSound(data.music);
    const [text, setText]=useState("Hover On me!");
    const enter=()=>{
        setText("Hover off me!");
        play();
    }
    const leave=()=>{
        setText("Hover on me!");
        stop();
    }
  return (
    <Container   >
        <Card>
            <ImageContainer onMouseEnter={enter} onMouseLeave={leave}  >
                <Image src={data.img} >

                </Image>
            </ImageContainer>
            {/* <Span>{text} </Span> */}
        </Card>
        <Info>
            <Icon>
                <ThumbUp style={{fontSize:"48px", }}/>
            </Icon>
            <Icon>
                <Favorite style={{fontSize:"40px" ,}}/>
            </Icon>
            <Icon>
                <Share style={{fontSize:"40px",}}/>
            </Icon>
                
        </Info>
        <Hr/>
        <Action>
            <Button>
            <PlayCircleFilled onClick={enter} style={{fontSize:"60px", color:"red"}}/>Play

            </Button>
            <Button>

            <Pause onClick={leave} style={{fontSize:"40px"}}/>Pause
            </Button>
        </Action>
        <Hr/>
    </Container>
  )
}

export default Music