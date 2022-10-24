import styled from "styled-components"
import logo from "./img/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"
import { InfoContext } from "./InfoContext"



export default function PageLogin() {
   
    const {email, setEmail, password, setPassword, setToken, setImage} = useContext(InfoContext)
    const [loading, setLoading] = useState(false)
    const [isAvaiable, setIsAvaible] = useState(false)
    const [cor, setCor] = useState(false)
    const [opacidade, setOpacidade] = useState(false)
    const navigate = useNavigate()

    function infos(e) {
        if (email && password) {
            setLoading(true)
            setIsAvaible(true)
            setCor(true)
            setOpacidade(true)
        }
        setTimeout(() => {
            const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',
                {
                    email,
                    password
                })

            requisicao.then((item) => { 
                setImage(item.data.image)
                setToken(item.data.token)
                navigate('/hoje')})
            requisicao.catch(() => erro())

        }, 3000)

    }

    function erro(){
        alert('faça o cadastro antes de fazer o login')
        setLoading(false)
        setIsAvaible(false)
        setCor(false)
        setOpacidade(false)
    }

    return (
        <ContainerLogin>
            <img src={logo} alt="Logo" />
            <Inputs>
                <CadaInput data-identifier="input-email" type="text" placeholder="email" onChange={e => setEmail(e.target.value)} disabled={isAvaiable} cor={cor}></CadaInput>
                <CadaInput data-identifier="input-password" type="text" placeholder="senha" onChange={e => setPassword(e.target.value)} disabled={isAvaiable} cor={cor}></CadaInput>
            </Inputs>
            <BotaoEntrar data-identifier="login-btn" onClick={infos} disabled={loading} opacidade={opacidade}>
                {opacidade ?
                    <ThreeDots
                        height="70"
                        width="70"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true} />
                    : "Entrar"}
            </BotaoEntrar>
            <Link data-identifier="sign-up-action" to={'/cadastro'}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 68px;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 25px;
    }
`

const Inputs = styled.div`
display: flex;
flex-direction: column;
margin-top: 33px;
`

const CadaInput = styled.input`
box-sizing: border-box;        
width: 303px;
height: 45px;
background-color: ${props => props.cor ? "#F2F2F2" : "#FFFFFF"}; 
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom: 6px;
padding-left: 11px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
color: ${props => props.cor ? "#AFAFAF" : "#DBDBDB"};
`

const BotaoEntrar = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
border: none;
background-color: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 21px;
line-height: 26px;
color: #FFFFFF;
opacity: ${props => props.opacidade ? "0.7" : "none"};
`