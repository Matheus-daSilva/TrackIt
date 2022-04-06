import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

export default function HistoricoScreen() {
    return (
        <>
            <Header />
            <Section>
                <Div>
                    <p>Histórico</p>
                </Div>
                <P>Em breve você poderá ver o histórico dos seus hábitos aqui!</P>
            </Section>
            <Footer />
        </>
    )
}

const Section = styled.section`
margin-top: 70px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
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
    height: 74px;
    margin-top: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`