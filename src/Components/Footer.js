import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Bottom>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Div>
                <p>Hoje</p>
            </Div>
            <p>Histórico</p>
        </Bottom>
    )
}

const Bottom = styled.footer`
position: fixed;
width: 100%;
height: 70px;
left: 0px;
right: 0px;
bottom: 0px;
background: #FFFFFF;
display: flex;
justify-content: space-around;
align-items: center;

p {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #52B6FF;
}
`

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 91px;
height: 91px;
margin-bottom: 10px;
border-radius: 100px;
background: #52B6FF;
position: absolute;
bottom: 10px;

p {
    color: #FFFFFF;
}
`