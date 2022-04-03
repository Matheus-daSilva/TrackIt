import styled from 'styled-components';
import Trash from "./../assets/img/Trash.svg";

export default function Habits(props) {
    const grey = '#CFCFCF'
    const white = '#FFFFFF'
    const { name, APIDays, days } = props;

    return (
        <Section>
            <Habit>
                <p>{name}</p>
                <WeekDay>
                    {days.map(day => {
                        let i = days.indexOf(day)
                        if (APIDays.includes(i)) {
                            return (
                                <P color={white} background={grey}>{Object.values(day)}</P>
                            )
                        } else {
                            return (
                                <P color={grey} background={white}>{Object.values(day)}</P>
                            )
                        }
                    })}
                </WeekDay>
                <TrashCan>
                    <img src={Trash} alt="lixeira"></img>
                </TrashCan>
            </Habit>
        </Section>
    )
}

const Section = styled.section`
margin-top: 20px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Habit = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
position: relative;

p {
    width: 208px;
    height: 20px;
    margin-top: 13px;
    margin-left: 15px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
}
`

const WeekDay = styled.div`
width: 100%;
padding-left: 11px;
display: flex;
`

const P = styled.div`
width: 30px;
height: 30px;
margin-left: 4px;
margin-top: 10px;
background-color: ${props => props.background};
border: 1px solid #D5D5D5;
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

const TrashCan = styled.div`
width: 13px;
height: 15px;
top: 11px;
right: 11px;
position: absolute;
color: #666666;
`


