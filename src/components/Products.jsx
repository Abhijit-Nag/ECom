import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import {mobile} from "../../src/responsive";

const Container= styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    ${mobile({ padding: "0", margin:"0" })}
`

export default function Products() {
  return (
    <Container>
        {popularProducts.map((data)=>(
            <Product item={data} key={data.id} />
        ))}
    </Container>
  )
}
