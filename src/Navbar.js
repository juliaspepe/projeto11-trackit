import usuario from "./img/fotoUsuario.png"
import styled from "styled-components"

export default function Navbar() {
    return (
        <ContainerNavbar>
            <Logo>TrackIt</Logo>
            <Usuario src={usuario} alt="Foto do usuário" />
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
`
