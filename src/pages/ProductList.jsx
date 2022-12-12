import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import {mobile} from "../../src/responsive"
const Container=styled.div`
    
`
const Title=styled.div`
    margin: 20px;
`
const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`
const Filter=styled.div`
    margin: 20px;
    ${mobile({display:"flex",})}
`
const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({})}
`
const Select=styled.select`
    padding: 10px;
    margin-right: 20px;
    
`
const Option=styled.option`
    
`

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price(low to high)</Option>
                    <Option>Price(high to low)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ProductList