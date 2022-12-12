import { Add, Remove } from '@material-ui/icons'
import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import {mobile} from "../../src/responsive"
import { Link } from 'react-router-dom'
const Container= styled.div`
    
`
const Wrapper=styled.div`
    padding: 20px;
`
const Title=styled.h1`
    font-weight: 300;
    text-align: center;
    ${mobile({marginBottom:"10px"})}
`
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    background-color: ${props=>props.type ==="filled" ? "black" : "white"};
    color: ${props=>props.type==="filled" && "white"};
    ${mobile({ fontSize: "24px", width:"100vw", border:"1px solid teal", })}
`
const Bottom=styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection:"column" })}
`
const Info=styled.div`
    flex: 3;
`

const TopTexts= styled.div`
    display: flex;
    ${mobile({ backgroundColor: "orange", margin:"0",width:"100vw", justifyContent:"space-around" })}
`
const TopText=styled.h3`
    margin: 10px 16px;
    font-size: 16px;
    text-decoration: underline;
    font-family: kalam;
    &:first-letter{
        font-size: 40px;
        font-family: 'Courier New', Courier, monospace;
    }
    ${mobile({  margin:"0",borderRight:"1px solid teal", textDecoration:"none", backgroundColor:"orange", width:"50vw", display:"flex",alignItems:"center", justifyContent:"center", padding:"16px"})}
`
const Product=styled.div`
    display: flex;
`
const ProductDetail=styled.div`
    flex: 2;
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Image=styled.img`
    width: 200px;
`
const Details=styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
${mobile({ fontSize: "16px" })}
`
const ProductName=styled.span`
    ${mobile({ fontSize: "24px", marginBottom:"16px" })}
`
const ProductId=styled.div`
    ${mobile({ fontSize: "16px", marginBottom:"16px" })}
`
const ProductColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
${mobile({ marginBottom: "16px" })}
`
const ProductSize=styled.div`
    ${mobile({ fontSize: "24px", marginBottom:"24px" })}
`

const PriceDetail=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const ProductAmount=styled.span`
border: 1px solid teal;
padding: 10px;
margin: 0px 10px;
`
const ProductPrice=styled.h4`

margin-top: 30px;
    ${mobile({ fontSize: "34px" })}
&::first-letter{
    font-size: 30px;
    margin-right: 8px;
    color: green;
}
`
const Hr=styled.hr`
    color: #eee;
    /* border: none; */
    height: 1px;
`
const Summary= styled.div`
    flex: 1;
    border: 1px solid teal;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 8px 0 0 8px;
    padding: 10px;
`
const SummaryTitle=styled.div`
font-size: 40px;
font-weight: normal;
font-family: 'Courier New', Courier, monospace;
`
const SummeryItem=styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
`
const SummeryItemText=styled.div`
font-size: ${props=>props.type === "total" && "30px"};
border-top: ${props=>props.type === "total" && "1px solid teal"};
border-bottom: ${props=>props.type === "total" && "1px solid teal"};
padding: ${props=>props.type === "total" && "10px"};
`
const SummeryPrice=styled.div`
font-size: ${props=>props.type === "total" && "30px"};
font-size: ${props=>props.type === "total" && "30px"};
color: ${props=>props.type === "total" && "green"};
border-top: ${props=>props.type === "total" && "1px solid teal"};
border-bottom: ${props=>props.type === "total" && "1px solid teal"};
padding: ${props=>props.type === "total" && "10px"};
&:first-letter{
    margin-right: 10px;
}
`
const SummaryButton= styled.button`
    cursor: pointer;
    ${mobile({ fontSize: "24px",padding:"10px" })}
`

const data=[
    {
        price:30,
    },
    {
        price:20,
    }
]
const Cart = () => {
    const [count, setCount]=useState(0);
    const[ pcount, setPcount]=useState(0);
    const [subTotal,setSubTotal]=useState((data[0].price)+(data[1].price));
    useEffect(()=>{
        setSubTotal(count*(data[0].price)+pcount*(data[1].price));
    },[count, pcount]);
    
    const handleRemove=()=>{
        setCount((prev)=>prev-1);
    }
    const handleAdd=()=>{
        setCount(prev=>prev+1)
    }

    const pHandleRemove=()=>{
        setPcount((prev)=>prev-1)
    }
    const pHandleAdd=()=>{
        setPcount(prev=>prev+1)
    }
    

  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>Your Basket</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Basket(4)</TopText>
                    <TopText><Link className='link' style={{fontFamily:"kalam"}} to="/product" > Your Wishlist(1)</Link></TopText>
                </TopTexts>
                <TopButton type="filled" >CheckOut Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.dailyobjects.com/marche/product-images/1205/natural-white-navy-trail-weekender-images/Natural-White-Navy-Trail-Weekender.png?tr=cm-pad_resize,w-384,h-597,dpr-1" />
                            <Details>
                                <ProductName>
                                    <b>JESSIE THUNDER BAG</b>
                                </ProductName>
                                <ProductId><b> ID:</b>GDD1A2GD5GD </ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>Size :</b>37.5 </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                {count>0 && (

                                <Remove  onClick={handleRemove} />
                                )}
                                <ProductAmount>{count} </ProductAmount>
                                <Add onClick={handleAdd} />
                            </ProductAmountContainer>
                            <ProductPrice>$ {data[0].price} </ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.dailyobjects.com/marche/product-images/1205/natural-white-navy-trail-weekender-images/Natural-White-Navy-Trail-Weekender.png?tr=cm-pad_resize,w-384,h-597,dpr-1" />
                            <Details>
                                <ProductName>
                                    <b>JESSIE THUNDER BAG</b>
                                </ProductName>
                                <ProductId><b> ID:</b>GDD1A2GD5GD </ProductId>
                                <ProductColor color="blue" />
                                <ProductSize><b>Size :</b>37.5 </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                {pcount>0 && (

                                <Remove onClick={pHandleRemove} />
                                )}
                                <ProductAmount>{pcount} </ProductAmount>
                                <Add onClick={pHandleAdd} />
                            </ProductAmountContainer>
                            <ProductPrice>$ {data[1].price} </ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummeryItem>
                        <SummeryItemText>Subtotal</SummeryItemText>
                        <SummeryPrice>$ {subTotal}</SummeryPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Estimated Shipping Price</SummeryItemText>
                        <SummeryPrice>$ 6</SummeryPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText>Shipping Discount</SummeryItemText>
                        <SummeryPrice>-$ 4</SummeryPrice>
                    </SummeryItem>
                    <SummeryItem>
                        <SummeryItemText type="total" >Total</SummeryItemText>
                        <SummeryPrice type="total" >$ {(subTotal>0)? subTotal+2:0} </SummeryPrice>
                    </SummeryItem>
                </Summary>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Bottom>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Cart