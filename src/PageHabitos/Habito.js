import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import lixo from "../img/lixo.png"
import { InfoContext } from "../InfoContext"
import { diasDaSemana } from "../InfoContext"

export default function Habito() {
    const { config, habitos, setHabitos, idDoHabito, setIdDoHabito, clicked, setClicked } = useContext(InfoContext)

    useEffect(() => {
        const requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        requisicao.then((item) => {
            setHabitos(item.data)
        })
        requisicao.catch(() => alert('deu ruim'))

    }, [clicked])

    function Deletar(id) {
        setClicked(true)
        setIdDoHabito(id)
    }

    function DeletarHabito() {
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idDoHabito}`, config)
            .then(() =>
                axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
                    .then((item) => {
                        setClicked(!clicked)
                        setHabitos(item.data)
                    })
                    .catch(() => alert('deu ruim'))
            )
            .catch(() => console.log('não foi possível deletar'))
    }

    function ManterHabito() {
        setClicked(!clicked)
        console.log('habito mantido')
    }


    return (
        <>
            {clicked ?
                <ContainerDeletar>
                    <p> tem certeza que deseja deletar esse hábito?</p>
                    <ContainerBotao>
                        <Sim onClick={() => DeletarHabito()}> Sim </Sim>
                        <Nao onClick={() => ManterHabito()}> Não </Nao>
                    </ContainerBotao>
                </ContainerDeletar>
                :
                <>
                    {habitos.map((h) =>
                        <ContainerHabito>
                            <NewHabito>
                                <p data-identifier="habit-name" key={h.id}> {h.name} </p>
                                <img data-identifier="delete-habit-btn" src={lixo} alt="lixeira" onClick={() => Deletar(h.id)} />
                            </NewHabito>
                            <Semana>
                                {diasDaSemana.map((dia) => <Dia key={dia.id}>{dia.name}</Dia>)}
                            </Semana>
                        </ContainerHabito>)}
                </>}
        </>

    )
}

const ContainerHabito = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
margin-top: 15px;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 15px;
`

const NewHabito = styled.div`
display: flex;
justify-content: space-between;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
    img{
        margin-right: 10px;
        width: 13px;
        height: 15px;
    }
`

const Semana = styled.div`
width: 303px;
height: 45px;
display: flex;
align-items: center;
`

const Dia = styled.div`
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-right: 4px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
`

const ContainerDeletar = styled.div`
width: 230px;
background-color: #126BA5;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 10px;
margin-top: 30px;
border-radius: 4.63636px;
padding: 5px;
margin-left: 55px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;    p{ 
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    text-align: center;
        padding: 10px;
    }
`

const ContainerBotao = styled.div`
display: flex;
justify-content: center;
align-items: space-between;
`

const Sim = styled.button`
width: 60px;
height: 30px;
border: none;
background-color: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 15px;
line-height: 26px;
color: #FFFFFF;
margin-bottom: 15px;
margin-right: 10px;
`

const Nao = styled.button`
width: 60px;
height: 30px;
border: none;
background-color: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 15px;
line-height: 26px;
color: #FFFFFF;
margin-bottom: 15px;
margin-left: 10px;
`