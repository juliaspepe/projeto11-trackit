import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import check from "./img/check.png"
import { useContext, useEffect, useState } from "react";
import { InfoContext } from "./InfoContext";
import axios from "axios";
import dayjs from "dayjs"


export default function PageHoje() {
    const { habitos, checked, setChecked, setHabitos, contador, setContador, config } = useContext(InfoContext)
    console.log(config)
    const [clicou, setClicou] = useState([])
    const date = dayjs().locale("pt-br").format("dddd, DD/MM").replace("-feira", "");
    const quantidade = 100/(habitos.length)

    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then((item) => {
                setChecked(false)
                setHabitos(item.data)
                console.log('deu bom')
            })
            .catch(() => alert('deu ruim'))
    }, [contador])

    function Clicked(h, clicou, setClicou) {
        if (clicou.includes(h.id)) {
            setClicou(clicou.filter(id => id !== h.id))
            HabitoDesmarcado(h.id)
            console.log('1')
        } else {
            setClicou([...clicou, h.id])
            HabitoFeito(h.id)
            console.log('2')
        }
    }

    function DiminuirContador(){
        if (contador > 0){
        setContador(contador - 1)
        }
    }


    function HabitoFeito(idHabito) {
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}/check`,
            {}, config)
            .then(() => setContador(contador + 1))
            .catch((err) => console.log(err))
    }

    function HabitoDesmarcado(idHabito) {
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}/uncheck`,
            {}, config)
            .then(() => DiminuirContador())
            .catch(() => alert('erro para DESMARCAR a tarefa'))
    }

    return (
        <>
            {checked ? <>  <Navbar /> <Footer /> </> :
                <>
                    <Navbar />

                    <ContainerHoje data-identifier="today-infos">
                        <Hoje> {date} </Hoje>

                        {contador === 0 ? <Texto> Nenhum hábito concluído ainda </Texto> : <Texto> {contador * quantidade}% dos habitos concluídos </Texto>}
                    </ContainerHoje>
                    {habitos.map((h) =>
                        <ContainerHabito>
                            <div>
                                <Habito> {h.name} </Habito>
                                <p>Sequência atual: {h.currentSequence}</p>
                                <p>Seu recorde: {h.highestSequence}</p>
                            </div>
                            <CheckBox data-identifier="done-habit-btn" onClick={() => Clicked(h, clicou, setClicou)} clicado={h.done}>
                                <img src={check} alt="check" />
                            </CheckBox>
                        </ContainerHabito>)}
                    <Footer />
                </>}
        </>
    )
}

const ContainerHoje = styled.div`
width: 340px;
height: 91px;
border-radius: 5px;
margin-top: 5px;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 15px;
padding-top: 55px;
margin-bottom: 80px;
`

const Hoje = styled.div`
margin-top: 100px;
height: 29px;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 23px;
line-height: 29px;
color: #126BA5;
`

const Texto = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #BABABA;
`

const ContainerHabito = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 15px;
margin-left:18px;
margin-bottom: 10px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`

const Habito = styled.div`
display: flex;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
color: #666666;
margin-bottom: 7px;
`

const CheckBox = styled.div`
background-color: ${props => props.clicado ? "#8FC549" : "#EBEBEB"}; 
border: 1px solid #E7E7E7;
border-radius: 5px;
width: 69px;
height: 69px;
margin-right: 13px;
    img{
        margin-left: 15px;
        margin-top: 19px;
    }
`
