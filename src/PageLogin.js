import styled from "styled-components"
import logo from "./img/logo.png"

export default function PageLogin() {
    return (
        <ContainerLogin>
            <img src={logo} alt="Logo" />
            <Inputs>
                <input type="text" placeholder="email"></input>
                <input type="text" placeholder="senha"></input>
            </Inputs>
            <BotaoEntrar>Entrar</BotaoEntrar>
            <p>Não tem uma conta? Cadastre-se!</p>
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

    input{
        box-sizing: border-box;        
        width: 303px;
        height: 45px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        padding-left: 11px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }
`

const BotaoEntrar = styled.button`
width: 303px;
height: 45px;
border: none;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 21px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
`