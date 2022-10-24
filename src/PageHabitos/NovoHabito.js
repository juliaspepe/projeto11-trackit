import axios from "axios"
import { useContext, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { InfoContext } from "../InfoContext"
import { diasDaSemana } from "../InfoContext"
import { ThreeDots } from "react-loader-spinner"

export default function NovoHabito() {

    const { setHabitos, nomeHabito, setNomeHabito, botaoClicado, setBotaoClicado, config } = useContext(InfoContext)
    const [dias, setDias] = useState([])
    const [salvo, setSalvo] = useState(false)
    const navigate = useNavigate()

    console.log(nomeHabito)
    console.log(dias)

    function SalvarHabito() {
        setSalvo(true)
        console.log(config)
        setTimeout(() => {
            if (nomeHabito) {
                const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
                    {
                        name: nomeHabito,
                        days: dias
                    },
                    config)

                requisicao.then((item) => { 
                    setBotaoClicado(!botaoClicado)
                    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
                    .then((item) => { 
                        setBotaoClicado(!botaoClicado)
                        setHabitos(item.data)
                        setDias([])
                    })
            .catch(() => alert('deu ruim'))
                })
                requisicao.catch(() => Erro())
            } else {
                alert('favor preencher corretamente')
                setSalvo(false)
            }
        }, 3000)
    }

    function Erro(){
        setSalvo(false)
        alert('requisição não enviada')
    }

    function DiasSelecionados(dia, dias, setDias) {
        console.log(dias)
        console.log(dia)
        if (dias.includes(dia.id)) {
            setDias(dias.filter(id => id !== dia.id))
            dia.clicado = !dia.clicado;
            console.log('1')
        } else {
            setDias([...dias, dia.id])
            dia.clicado = !dia.clicado;
            console.log('2')
        }
    }

    return (
        
        <Habito>
            <input data-identifier="input-habit-name" type="text" placeholder="nome do hábito" onChange={e => setNomeHabito(e.target.value)}></input>
            <Semana>
                {diasDaSemana.map((dia) => <Dia data-identifier="week-day-btn" key={dia.id} clicado={dia.clicado} onClick={() => DiasSelecionados(dia, dias, setDias)}>
                    {dia.name}
                </Dia>)}
            </Semana>
            <ContainerBotao>
                <BotaoCancelar data-identifier="cancel-habit-create-btn" onClick={() => setBotaoClicado(false)}> Cancelar </BotaoCancelar>
                <BotaoSalvar data-identifier="save-habit-create-btn" onClick={SalvarHabito} salvo={salvo}>
                    {salvo ? <ThreeDots
                        height="40"
                        width="40"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true} />
                        : "Salvar"}
                </BotaoSalvar>

            </ContainerBotao>
        </Habito>
    )
}


const Habito = styled.div`
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;

    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
        padding-left: 11px;
        margin-top: 18px;
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
background: ${props => props.clicado ? "#CFCFCF" : "#FFFFFF"}; 
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
color: ${props => props.clicado ? "#FFFFFF" : "#DBDBDB"};
`

const ContainerBotao = styled.div`
width: 303px;
display: flex;
justify-content: flex-end;
align-items: center;
margin-top: 21px;
`

const BotaoCancelar = styled.button`
width: 84px;
height: 35px;
background: #FFFFFF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #52B6FF;
border: none;
`

const BotaoSalvar = styled.button`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
border: none;
margin-left: 10px;
display: flex;
justify-content: center;
align-items: center;
`