import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container= styled.div`
    display: flex;
    overflow: hidden;
    background-color: #ffe4a9;
    flex-wrap: wrap;
`

const Categories = () => {
  return (
    <Container>
        {categories.map((data)=>(
            <CategoryItem item={data} key={data.id} />
        ))}
    </Container>
  )
}

export default Categories