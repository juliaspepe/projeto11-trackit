import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import check from "./img/check.png"

export default function PageHoje() {
    return (
        <>
            <Navbar />

            <ContainerHoje>
                <Hoje> Segunda, 20/05 </Hoje>
                <Texto> Nenhum hábito concluído ainda </Texto>
            </ContainerHoje>

            <ContainerHabito>
                <div>
                    <Habito> Ler 1 capítulo de livro</Habito>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </div>
                <CheckBox>
                        <img src={check} alt="check" />
                </CheckBox>
            </ContainerHabito>

            <ContainerHabito>
                <div>
                    <Habito> Ler 1 capítulo de livro</Habito>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </div>
                <CheckBox>
                        <img src={check} alt="check" />
                </CheckBox>
            </ContainerHabito>

            <ContainerHabito>
                <div>
                    <Habito> Ler 1 capítulo de livro</Habito>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </div>
                <CheckBox>
                        <img src={check} alt="check" />
                </CheckBox>
            </ContainerHabito>

            <Footer />
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
background: #EBEBEB;
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
