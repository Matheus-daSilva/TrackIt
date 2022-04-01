import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from "./../assets/img/Logo.png";


export default function LoginScreen() {
    return (
        <Section>
            <img src={Logo} alt="Logo trackit" />
            <Form>
                <input type="text" placeholder='email'></input>
                <input type="text" placeholder='senha'></input>
                <button>Entrar</button>
            </Form>
            <Link to="/cadastro">
                <p>Não possui uma conta? Cadastre-se!</p>
            </Link>
        </Section>
    );
}

const Section = styled.div`
display: flex;
flex-direction: column;
align-items: center;

img {
    width: 180px;
    height: 178.38px;
    margin-top: 68px;
}

p {
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    margin-top: 25px;
    color: #52B6FF;
}
`

const Form = styled.form`
width: 303px;
margin-top: 26.62px;

input {
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-top: 6px;
    padding-left: 11px;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
}

button {
    width: 303px;
    height: 45px;
    margin-top: 6px;
    color: #FFFFFF;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: 1px solid #52B6FF;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;

}
`