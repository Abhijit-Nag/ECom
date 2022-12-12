import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import useSound from "use-sound"
import welcome_sound from "../assets/musics/welcome_sound.mp3"
import rolex from "../assets/musics/rolex.mp3"
import { useEffect } from 'react'
import edited_lapata from "../assets/musics/edited_lapata.mp3"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function Home() {
  const[sound]=useSound(welcome_sound);
  const[Rolex]=useSound(rolex);
  const [Lapata]=useSound(edited_lapata);
  const MySwal = withReactContent(Swal)
  
  useEffect(()=>{
    sound();
    setTimeout(() => {
      // Rolex();
      Lapata();
    }, 16000);
    setTimeout(() => {
      MySwal.fire({
        position: 'center',
        icon: 'question',
        title: 'Want to listen more such awesome songs!!!! Go for SOMETHING NEW!',
        showConfirmButton: false,
        timer: 6000
    })
    }, 100000);
    
    
  })
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}
