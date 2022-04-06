import styled from 'styled-components';
import dayjs from 'dayjs';
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useToken } from "../context/Token";
import ToDoList from './ToDoList';

export default function HojeScreen() {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const [items, setItems] = useState([]);
    const [validation, setValidation] = useState(0);
    const { token } = useToken();
    const green = "#8FC549";
    const grey = "#BABABA";
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
        });
        promisse.catch(warning);
    }, [validation, token])

    function warning() {
        alert("Ops, tente novamente");
    }

    if (items.filter((did) => did.done).length === 0) {
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
                    <P color={grey}>Nenhum hábito concluído ainda</P>
                    <List>
                        {items.map(item => {
                            return (
                                <ToDoList
                                    id={item.id}
                                    name={item.name}
                                    done={item.done}
                                    currentSequence={item.currentSequence}
                                    highestSequence={item.highestSequence}
                                    config={config}
                                    setValidation={setValidation}
                                    validation={validation}
                                    items={items.length}
                                    itemsDone={items.filter((did) => did.done).length}
                                />
                            )
                        })}
                    </List>
                </Section>
                <Footer />
            </>
        )
    } else {
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
                    <P color={green}>{((items.filter((did) => did.done).length/items.length) * 100)}% dos hábitos concluídos</P>
                    <List>
                        {items.map(item => {
                            return (
                                <ToDoList
                                    id={item.id}
                                    name={item.name}
                                    done={item.done}
                                    currentSequence={item.currentSequence}
                                    highestSequence={item.highestSequence}
                                    config={config}
                                    setValidation={setValidation}
                                    validation={validation}
                                    items={items.length}
                                    itemsDone={items.filter((did) => did.done).length}
                                />
                            )
                        })}
                    </List>
                </Section>
                <Footer />
            </>
        )
    }
}

const Section = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 70px;
margin-bottom: 70px;
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
color: ${props => props.color};
`

const List = styled.div`
margin-top: 28px;
margin-bottom: 90px;
overflow-y: scroll;
`