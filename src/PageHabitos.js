import styled from "styled-components"
import Footer from "./Footer"
import Navbar from "./Navbar"
import lixo from "./img/lixo.png"

export default function PageHabitos() {
    return (
        <>
            <Navbar />
            <ContainerHabitos>
                <MeusHabitos>
                    <p>Meus hábitos</p>
                    <div>+</div>
                </MeusHabitos>

                <NovoHabito>
                    <input type="text" placeholder="nome do hábito"></input>
                    <Semana>
                        <Dia>S</Dia>
                        <Dia>T</Dia>
                        <Dia>Q</Dia>
                        <Dia>Q</Dia>
                        <Dia>S</Dia>
                        <Dia>S</Dia>
                        <Dia>D</Dia>
                    </Semana>
                    <ContainerBotao>
                        <BotaoCancelar> Cancelar </BotaoCancelar>
                        <BotaoSalvar> Salvar </BotaoSalvar>
                    </ContainerBotao>
                </NovoHabito>

                <ContainerHabito>
                    <Habito>
                        <p> Ler 1 capítulo de livro </p>
                        <img src={lixo} alt="lixeira" />
                    </Habito>
                    <Semana>
                        <Dia>S</Dia>
                        <Dia>T</Dia>
                        <Dia>Q</Dia>
                        <Dia>Q</Dia>
                        <Dia>S</Dia>
                        <Dia>S</Dia>
                        <Dia>D</Dia>
                    </Semana>
                </ContainerHabito>

                <Texto>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Texto>
            </ContainerHabitos>
            <Footer />
        </>

    )
}

const ContainerHabito = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
margin-top: 5px;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 15px;
`

const Habito = styled.div`
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

const NovoHabito = styled.div`
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
text-align: center;
color: #FFFFFF;
border: none;
margin-left: 10px;
`

const Texto = styled.p`
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
margin-top: 28px;
`