import styled from "styled-components"
import Footer from "../Footer"
import Navbar from "../Navbar"
import Habito from "./Habito"
import NovoHabito from "./NovoHabito"
import { InfoContext } from "../InfoContext"
import { useContext, useState } from "react"


export default function PageHabitos() {
    const {botaoClicado, setBotaoClicado, habito } = useContext(InfoContext)

    return (
        <>
            <Navbar />
            <ContainerHabitos>
                <MeusHabitos>
                    <p>Meus hábitos</p>
                    <div data-identifier="create-habit-btn" onClick={() => setBotaoClicado(!botaoClicado)}>+</div>
                </MeusHabitos>
                {botaoClicado ? <NovoHabito/> : ''}

               {habito ? <Texto data-identifier="no-habit-message">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Texto> : <Habito />}
            </ContainerHabitos>
            <Footer />
        </>

    )
}




const ContainerHabitos = styled.div`
width: 375px; 
padding-left: 17px;
padding-right: 17px;   
`

const MeusHabitos = styled.div`
margin-top: 100px;
height: 29px;
display: flex;
justify-content: space-between;
align-items: center;

    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    div{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 26.976px;
        color: #FFFFFF;
    }
`

const Texto = styled.p`
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
margin-top: 28px;
`