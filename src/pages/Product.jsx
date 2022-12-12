import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import pic2 from "../assets/pic2.png"
import { Add, Remove } from '@material-ui/icons'
import {mobile} from "../../src/responsive"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Container=styled.div`
    overflow: hidden;
`
const Wrapper= styled.div`
    display: flex;
    position: relative;
    ${mobile({flexDirection:"column"})}
`
const ImgContainer= styled.div`
    flex: 6;
`
const Image= styled.img`
    ${mobile({width:"100vw"})}
`
const InfoContainer= styled.div`
    flex: 4;
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
`
const Title= styled.h1`
    margin-top: 20px;
    flex: 1;
`
const Desc= styled.p`
    flex: 2;
    padding: 0px 30px;
    /* position: relative; */
`
const Price= styled.span`
    flex: 1;
    /* position: absolute; */
    font-size: 40px;
    ${mobile({margin:"40px", marginBottom:"60px"})}
`
const FilterContainer= styled.div`
flex: 2;
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
${mobile({justifyContent:"space-between",})}
/* background-color: grey; */
`
const FilterTitle= styled.span`
margin-right: 10px;
`
const FilterColor= styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin-right: 10px;
cursor: pointer;
transition: all 0.4s ease;

&:hover{
    transform: scale(1.2);
}

`
const Filter= styled.div`
display: ${props=>props.type==="color" && "flex" } ;
`
const FilterSize= styled.select`
padding: 10px;
`
const FilterSizeOption= styled.option``

const AddContainer=styled.div`
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    position: absolute;
    bottom: 10vh;
`
const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Amount =styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`
const Button =styled.button`
    margin-left: 180px;
    ${mobile({marginLeft:"178px"})}
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: orange;
    color: black;
    cursor: pointer;
    &:hover{
        background-color: #d1c2c2;
    }
`

const Product = () => {

    const MySwal = withReactContent(Swal)

    const[count, setCount]=useState(0);
    const handleAdd=()=>{
        setCount(prev=>prev+1);
    }
    const handleRemove=()=>{
        if(count===0) setCount(0)
        setCount(prev=>prev-1)
    }
    const [cart, setCart]=useState(2);
    const handleClick=()=>{
        setCart(prev=>prev+1)
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully added to your Cart!',
            showConfirmButton: false,
            timer: 2000
        })
    }
  return (
    <Container>
        <Navbar cart={cart} />
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src={pic2} />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim JumpSuit</Title>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, nulla aliquid molestias error modi recusandae provident consectetur nihil id reprehenderit.</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter type="color" >
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>

                    <Filter>

                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>XXL</FilterSizeOption>
                    </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        {count >0 && (

                        <Remove style={{cursor:"pointer"}}  onClick={handleRemove} />
                        ) }
                        <Amount>{count} </Amount>
                        <Add style={{cursor:"pointer"}} onClick={handleAdd} />
                    </AmountContainer>
                    <Button onClick={handleClick} >Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/> 
        <Footer/>
    </Container>
  )
}

export default Product