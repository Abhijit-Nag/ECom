import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { mobile } from "../../src/responsive";
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 60px;
    ${mobile({   overflow:"hidden"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    ${mobile({ padding:"10px 0px" })}

`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
`
const Center = styled.div`
    flex: 2;
    text-align: center;
    ${mobile({marginLeft:"10px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex:2, paddingRight:"4px"  })}

    
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}

`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
border: none;
${mobile({ width:"30px", marginLeft:"10px" })}


`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px", marginRight:"4px" })}

`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ marginLeft:"4px", marginRight:"10px" })}

`

const Navbar = ({cart}) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                   <Link className='link' to="/" > <Logo>JAG.com</Logo></Link> </Center>
                <Right>
                    <MenuItem><Link className='link' to="/register" > Register</Link></MenuItem>
                    <MenuItem><Link className='link' to="/login" > Log In</Link></MenuItem>
                    <MenuItem>
                        <Badge badgeContent={cart>2 ? cart : 2} color="primary">
                            <Link to="/cart"> <ShoppingCartOutlined /></Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar