import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../src/responsive'
import { init } from 'ityped'
import { useRef } from 'react'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
${mobile({ fontSize: "40px" })}
`
const Desc = styled.div`
font-weight: 300;
margin-bottom: 20px;
font-size: 30px;
${mobile({ fontSize: "20px", textAlign: "center" })}
`
const InputContainer = styled.div`
display: flex;
width: 50%;
justify-content: space-between;
${mobile({ marginTop: "40px" })}
`
const Input = styled.input`
flex: 8;
border: none;
transition: all 0.5s ease;

&:focus{
    border: none;
    outline: none;
    background-color: #cec7c7;
}
`
const Button = styled.button`
flex: 1;
border: none;
color: white;
background-color: #e53659;
border-radius: 0 10px 10px 0;
padding: 4px;
cursor: pointer;
`
const NewsLetter = () => {
    const MySwal = withReactContent(Swal)
    const handleClick = () => {
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thanks for your feedback .We will react you soon! Have a good day!',
            showConfirmButton: false,
            timer: 2000
        })
    }
    const textRef = useRef();
    useEffect(() => {
        // Here one proble occurs that is our text inside this strings will be repeated in a different manner ..to solve this problem we have remove
        // the react.Strictmode in index.js
        init(textRef.current,
            {
                showCursor: false,
                strings: ['Let Us Reach to you!', 'Your feedback is valuable to us!', 'Thank you']
            })

    }, [])
    return (
        <Container>
            <Title>Feedback</Title>
            <br />
            <Desc ref={textRef} ></Desc>
            <InputContainer>
                <Input />
                <Button onClick={handleClick} >
                    <Send />
                </Button>
            </InputContainer>

        </Container>
    )
}

export default NewsLetter