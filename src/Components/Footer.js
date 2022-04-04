import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
    return (
        <Bottom>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Link to="/hoje">
                <Div>
                    <CircularProgressbar
                        value={60}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: '#52B6FF',
                            textColor: '#FFF',
                            pathColor: '#FFF',
                            trailColor: 'transparent'
                        })}
                    />
                </Div>
            </Link>
            <Link to="/historico">
                <p>Histórico</p>
            </Link>
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
z-index: 3;
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
width: 91px;
height: 91px;
margin-bottom: 40px;
border-radius: 100px;
`