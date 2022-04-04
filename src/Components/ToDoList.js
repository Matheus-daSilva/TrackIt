import styled from 'styled-components';
import axios from "axios";
import { useProgress } from "../context/Progress";
import Check from "./../assets/img/Check.svg";


export default function ToDoList(props) {
    const { id, name, done, config, currentSequence, highestSequence, setValidation, validation, items, itemsDone } = props;
    const grey = "#E7E7E7";
    const green = "#8FC549";
    const something = {};
    const { progress, setProgress } = useProgress();
    setProgress(((itemsDone)/items) * 100);
    function check() {
        const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, something, config);
        promisse.then(() => setValidation(validation + 1));
        promisse.catch(warning);
        setProgress(((itemsDone + 1)/items) * 100);
        console.log(progress);

    }

    function unCheck() {
        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, something, config);
        request.then(() => setValidation(validation + 1));
        request.catch(warning);
        setProgress(((itemsDone - 1)/items) * 100);
        console.log(progress);
    }

    function warning() {
        alert("Ops, tente novamente");
    }

    if (!done) {
        return (
            <>
                <ToDo>
                    <Div>
                        <h3>{name}</h3>
                        <h4>Sequência atual: {currentSequence}</h4>
                        <p>Seu recorde: {highestSequence}</p>
                    </Div>
                    <Button color={grey} onClick={() => {
                        check()
                    }}>
                        <img src={Check} alt="botão de checagem" />
                    </Button>
                </ToDo>
            </>
        )
    } else {
        return (
            <>
                <ToDo>
                    <Div>
                        <h3>{name}</h3>
                        <h4>Sequência atual: {currentSequence}</h4>
                        <p>Seu recorde: {highestSequence}</p>
                    </Div>
                    <Button color={green} onClick={() => {
                        unCheck()
                    }}>
                        <img src={Check} alt="botão de checagem" />
                    </Button>
                </ToDo>
            </>
        )
    }
}

const ToDo = styled.div`
width: 340px;
height: 94px;
margin-bottom: 10px;
background-color: #FFFFFF;
border-radius: 5px;
display: flex;
position: relative;
`

const Div = styled.div`
display: flex;
flex-direction: column;
margin-top: 13px;
margin-left: 15px;
font-family: 'Lexend Deca';

h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}

h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
}

p {
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
}
`

const Button = styled.button`
width: 69px;
height: 69px;
background-color: ${props => props.color};
border-radius: 5px;
border: 1px solid ${props => props.color};
position: absolute;
top: 13px;
right: 15px;
`