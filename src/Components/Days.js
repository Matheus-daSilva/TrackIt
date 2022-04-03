import { useState } from "react";
import styled from 'styled-components';

export default function Days(props) {
    const { day, id, pickDay, setPickDay } = props;
    const [validation, setValidation] = useState(false);
    const grey = '#CFCFCF'
    const white = '#FFFFFF'

    function addDay() {
        setPickDay([...pickDay, id])
    }

    function removeDay(i) {
        const location = pickDay.indexOf(i);
        pickDay.splice(location, 1);
        setPickDay([...pickDay]);
    }

    console.log(pickDay)

    if (!validation) {
        return (
            <Day background={white} color={grey} onClick={() => {
                setValidation(true);
                addDay();
            }}>
                {day}
            </Day>
        )
    } else {
        return (
            <Day background={grey} color={white} onClick={() => {
                setValidation(false);
                removeDay(id);
            }}>
                {day}
            </Day>
        )
    }
}

const Day = styled.p`
width: 30px;
height: 30px;
background-color: ${props => props.background};
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: ${props => props.color};
display: flex;
justify-content: center;
align-items: center;
`