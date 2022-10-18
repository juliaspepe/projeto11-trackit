import styled from "styled-components";
import Footer from "./Footer"
import Navbar from "./Navbar";

export default function PageHistorico() {
    return (
        <>
            <Navbar />
            <ContainerHistorico>
                <Historico>
                    <p>Histórico</p>
                </Historico>
                <Texto>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </Texto>
            </ContainerHistorico>
            <Footer />
        </>
    )
}

const ContainerHistorico = styled.div`
width: 340px;
height: 91px;
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 15px;
`

const Historico = styled.div`
margin-top: 100px;
height: 29px;
display: flex;
justify-content: space-between;
align-items: center;

    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
`

const Texto = styled.p`
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
margin-top: 17px;
`