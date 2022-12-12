import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components';
import {mobile} from "../../src/responsive"
const Container= styled.div`
  font-size: 40px;
  padding-left: 40px;
  display: flex;
  ${mobile({fontSize:"20px", paddingLeft:"0px", marginLeft:"30px"})}
`
const Span=styled.span`
    margin: 0px 10px;
    font-family: 'Orbitron', sans-serif;
`
export default function Timer() {
    const[hour, setHour]=useState("16")
    const[minute, setMinute]=useState(38);
    const[second, setSecond]=useState(46);
    useEffect(()=>{
        const interval=setTimeout(() => {
            if(second>0)
            setSecond(prev=>prev-1)
            else{
                if(minute>0) {setMinute(prev=>prev-1)
                setSecond(59);
                }
                else{
                    if(hour>0) {setHour(prev=>prev-1)
                    setMinute(59);
                    setSecond(59)}
                    else{
                        setHour(16);
                        setMinute(38)
                        setSecond(46)
                    }
                }
            }
        }, 1000);
        // interval();
        return ()=>{
            clearInterval(interval);
        }
    })
  return (
    <Container><Span> {hour>9? hour: "0"+hour}</Span> : <Span>{minute>9 ? minute: "0"+ minute}</Span>:<Span> {second>9? second: "0"+second}</Span> </Container>
  )
}
