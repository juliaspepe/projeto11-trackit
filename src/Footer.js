import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <ContainerFooter>
            <Link data-identifier="habit-page-action" to={'/habitos'}>
                <p>Hábitos</p>
            </Link>
            <Circle>
                <Link to={'/hoje'}>
                    <p>Hoje</p>
                </Link>
            </Circle>
            <Link to={'/historico'}>
                <p data-identifier="historic-page-action">Histórico</p>
            </Link>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
position: fixed;
width: 375px;
height: 70px;
left: 0px;
bottom: 0px;
background: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 38px;
padding-right: 38px;

    p{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
`

const Circle = styled.div`
width: 91px;
height: 91px;
position: absolute;
left: 140px;
bottom: 10px;
background: #52B6FF;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;

    p{ 
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #FFFFFF;
    }

`