import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Music from '../components/Music'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import { musicData } from '../data'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect } from 'react'
const Container=styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: #40466a; */
    
    
    /* height: 100vh; */
    margin-bottom: 0;
`
const Wrapper=styled.div`
    background-color: #0e0d1d;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Musics = () => {
    const MySwal = withReactContent(Swal)
    useEffect(()=>{
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'You can play multiple songs  [ LISTEN TO YOUR OWN DJ REMIX BY ONLY ONE DEVICE ]  at a time by clicking the play button one after another and press the stop button to stop playing musics!',
            showConfirmButton: false,
            timer: 20000
        })
    },[]);
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            {musicData.map(d=>(
                <Music data={d} key={d.id} />
            ))}
        
       
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Musics