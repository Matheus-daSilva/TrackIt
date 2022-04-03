import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useToken } from "../context/Token";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import Days from "./Days";

export default function HabitosScreen() {
    const { token } = useToken()
    const [items, setItems] = useState([]);
    const [pickDay, setPickDay] = useState([]);
    const [add, setAdd] = useState(false);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const blue = '#52B6FF';
    const white = '#FFFFFF';

    useEffect(() => {
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promisse.then(response => {
            const { data } = response;
            setItems(data)
        });
        promisse.catch(warning);
    }, [])

    function warning() {
        alert("Ops, tente novamente");
    }

    if (Object.values(items).length > 0) {
        return (
            <>
                <Header />
                <Footer />
            </>
        );
    }
    if (!add) {
        return (
            <>
                <Header />
                <Section>
                    <Div>
                        <h3>Meus hábitos</h3>
                        <p onClick={() => setAdd(true)}>+</p>
                    </Div>
                    <Text>
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </Text>
                </Section>
                <Footer />
            </>
        );
    }

    if (add) {
        return (
            <>
                <Header />
                <Section>
                    <Div>
                        <h3>Meus hábitos</h3>
                        <p>+</p>
                    </Div>
                    <Habito>
                        <input type="text" placeholder='nome do hábito'></input>
                        <WeekDays>
                            {days.map(day => {
                                return (
                                    <Days day={day} id={days.indexOf(day) + 1} setPickDay={setPickDay} pickDay={pickDay}/>
                                )
                            })}
                        </WeekDays>
                        <Buttons>
                            <Button color={blue} background={white} border={white} onClick={() => setAdd(false)}>Cancelar</Button>
                            <Button color={white} background={blue} border={blue}>Salvar</Button>
                        </Buttons>
                    </Habito>
                    <Text>
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </Text>
                </Section>
                <Footer />
            </>
        );
    }
}

const Section = styled.section`
margin-top: 70px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Div = styled.div`
display: flex;
justify-content: space-between;
width: 340px;
margin-top: 28px;

h3 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
}

p {
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    display: flex:
    justify-content: center;
    text-align: center;
    align-items: center;
    color: #FFFFFF
}
`

const Text = styled.div`
width: 338px;
height: 74px;
margin-top: 28px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
`

const Habito = styled.div`
width: 340px;
height: 180px;
margin-top: 20px;
margin-bottom: 1px;
background: #FFFFFF;
border-radius: 5px;
position: relative;

input {
    width: 303px;
    height: 45px;
    padding-left: 11px;
    margin-top: 18px;
    margin-left: 19px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
}
`

const WeekDays = styled.div`
width: 234px;
margin-left: 19px;
margin-top: 8px;
display: flex;
justify-content: space-between;
`

const Buttons = styled.div`
position: absolute;
display: flex;
justify-content: space-between;
align-items: center;
bottom: 15px;
right: 15px;
width: 176px;
height: 35px;
`

const Button = styled.button`
width: 84px;
height: 35px;
background-color:${props => props.background};
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
color: ${props => props.color};
border: 1px solid  ${props => props.border}

`