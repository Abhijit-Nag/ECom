import styled from 'styled-components'
import React from 'react'
import {mobile} from "../../src/responsive"
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Container=styled.div`
    margin-left: 35vw ;
    margin-right: 35vw ;
    overflow: hidden;
    align-self: center;
    ${mobile({margin:"0", width:"100vw"})}
`
const RegisterSection=styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid teal;
    width: 30vw;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
    ${mobile({margin:"0", width:"100vw", border:"none"})}
`
const Top=styled.div`
    flex: 1;
`
const Bottom=styled.div`
    flex: 2;
    padding: 10px;
`
const InputTitle=styled.h1`
    
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
    font-size: 20px;
    &:first-letter{
        font-size: 40px;
        margin-left: 20px;
    }
`


const Input=styled.input`
    border: none;
    border-bottom: 1px solid teal;
    /* margin: ${props=>props.type==="checkbox"?"0px": "20px"}; */
    margin: 20px;
    width: 80%;
    padding: 20px;
    ${mobile({margin:"4px",})}
`
const EndingLine=styled.div`
    display: flex;
    justify-content: space-around;
`
const Span=styled.span`
    color: red;
    transition: all 0.5s ease;
    cursor: pointer;
    display: ${props=>props.type==="check" && "flex"};
    border-bottom:${props=>props.type==="action"&& "1px solid teal"};
    &:hover{
        font-size: 17px;
        color: teal;
        text-decoration: underline;
    }
    ${mobile({ fontFamily:"robotto"})}
`
const Image=styled.img`
    width: 100%;
`
const Button=styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #c47f00;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    transition: all 0.5s ease;
    &:hover{
        font-size: 20px;
        color: black;
    }
    ${mobile({margin:"0", marginTop:"20px", fontSize:"20px",fontFamily:"kenia", backgroundColor:"green"})}
`

const Register = () => {
    const MySwal=withReactContent(Swal);
    const handleClick=()=>{
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registerd Successfully! Please Login Now!',
            showConfirmButton: false,
            timer: 2000
        })
    }
  return (
    <Container>
        <RegisterSection>

        <Top>
            <Image src="https://img.freepik.com/premium-vector/online-shopping-store-website-mobile-phone-design-smart-business-marketing-concept-horizontal-view-vector-illustration_62391-460.jpg?w=2000" ></Image>
        </Top>
        <Bottom>
            <InputTitle>Username</InputTitle>
            <Input autoFocus="true" />
            <InputTitle>Email</InputTitle>
            <Input type="email" />
            <InputTitle>Passord</InputTitle>
            <Input type="password" />
            <Button onClick={handleClick} ><Link style={{textDecoration:"none", color:"inherit"}} to="/login" > Register</Link></Button>

        </Bottom>
        </RegisterSection>
        <EndingLine>
            <Span>Already have an account?</Span>
            <Span type="action"><Link className='link' to="/login" > Login</Link></Span>
        </EndingLine>
    </Container>
  )
}

export default Register