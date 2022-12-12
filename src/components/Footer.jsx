import { Facebook, GitHub, Instagram, LinkedIn, MailOutline, Phone, Room } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../../src/responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ overflow: "hidden" })}
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
${mobile({ flex: 1, })}
`;
const Logo = styled.h1`
    ${mobile({ fontSize: "24px" })}
    
`
const Desc = styled.p`
    margin: 20px 0;
    ${mobile({ fontSize: "10px" })}
`
const SocialContent = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    ${mobile({ width:"30px", height:"30px", margin:"10px" })}

`
const Center = styled.div`
flex: 1;
padding: 20px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ flex:3, paddingLeft:"0", marginRight:"40px"})}
`

const Title = styled.h3`
    margin-bottom: 30px;
    ${mobile({ textAlign:"center", fontSize:"16px" })}
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    ${mobile({ width: "100%", fontSize:"12px" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
    ${mobile({ fontSize: "10px" })}
`
const Payment = styled.img`
    width: 50px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);
    }
    ${mobile({ display:"flex", flexWrap:"wrap", marginLeft:"40px" })}
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>JAG.com</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur eaque, vel voluptatem repellat in quas.</Desc>
                <SocialContent>
                    <SocialIcon color='#3b5998'>
                       <a style={{all:"inherit", cursor:"pointer"}} href="https://www.facebook.com/profile.php?id=100024876668698"> <Facebook /></a>
                    </SocialIcon>
                    <SocialIcon color='#c32aa3'>
                       <a style={{all:"inherit", cursor:"pointer"}} href="https://github.com/Abhijit-Nag"> <GitHub /></a>
                    </SocialIcon>
                    <SocialIcon color='#f46f30'>
                       <a style={{all:"inherit", cursor:"pointer"}} href="https://www.linkedin.com/in/abhijit-nag-180272230/"> <Instagram /></a>
                    </SocialIcon>
                    <SocialIcon color='#0a66c2'>
                       <a style={{all:"inherit", cursor:"pointer"}} href="https://www.linkedin.com/in/abhijit-nag-180272230/"> <LinkedIn /></a>
                    </SocialIcon>
                </SocialContent>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Kids</ListItem>
                    <ListItem>Toys</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> Lorem ipsum dolor sit amet consectetur.
                </ContactItem>
                <ContactItem><Phone style={{ marginRight: "10px" }} /> +91 11111111</ContactItem>
                <ContactItem><MailOutline style={{ marginRight: "10px" }} /> lorem1000@gmail.com</ContactItem>
                <Payment style={{marginRight:"10px"}} src='https://cdn-icons-png.flaticon.com/512/349/349221.png' />
                <Payment style={{marginRight:"10px"}} src='https://cdn-icons-png.flaticon.com/512/196/196566.png' />
                <Payment style={{marginRight:"10px"}} src='https://cdn-icons-png.flaticon.com/512/5129/5129334.png' />
                <Payment style={{marginRight:"10px"}} src='https://cdn-icons-png.flaticon.com/512/6124/6124998.png' />
                <Payment style={{marginRight:"10px"}} src='https://cdn-icons-png.flaticon.com/512/5968/5968269.png' />
            </Right>
        </Container>
    )
}

export default Footer