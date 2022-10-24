import { useContext } from "react"
import styled from "styled-components"
import { InfoContext } from "./InfoContext"

export default function Navbar() {
const {image, config} = useContext(InfoContext)

    return (
        <ContainerNavbar>
            <Logo>TrackIt</Logo>
            <Usuario data-identifier="avatar" src={image} alt="Foto do usuário" />
        </ContainerNavbar>
    )
}

const ContainerNavbar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 375px;
height: 70px;
position: fixed;
left: 0px;
top: 0px;
background-color: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

const Logo = styled.p`
    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;
    color: #FFFFFF;
    margin-left: 18px;
`     

const Usuario = styled.img`
width: 51px;
height: 51px;
margin-right: 18px;
border-radius: 98.5px;
`
