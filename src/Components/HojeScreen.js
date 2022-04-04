import styled from 'styled-components';
import dayjs from 'dayjs';
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useToken } from "../context/Token";

export default function HojeScreen() {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const [items, setItems] = useState([]);
    const { token } = useToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        promisse.then(response => {
            const { data } = response;
            setItems(data);
            console.log(data);
        });
        promisse.catch(warning);
    }, [])

    function warning() {
        alert("Ops, tente novamente");
    }

    return (
        <>
            <Header />
            <Section>
                <Div>
                    {days.map(day => {
                        if (days.indexOf(day) == dayjs().day()) {
                            return (
                                <p>{day}, {dayjs().format('DD/MM')}</p>
                            )
                        }
                    })}
                </Div>
                <P>Nenhum hábito concluído ainda</P>
            </Section>
            <Footer />
        </>
    )
}

const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 70px;
margin-bottom: 70px;
overflow: scroll;
`

const Div = styled.div`
width: 341px;
height: 28px;
margin-top: 28px;
display: flex;
justify-content: left;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
`

const P = styled.div`
width: 341px;
height: 22px;
display: flex;
justify-content: left;
align-items: center;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #BABABA;
`