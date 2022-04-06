import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Logo from "./../assets/img/Logo.png";

export default function CadastroScreen() {
    const [userInfos, setUserInfos] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });

    const navigate = useNavigate();
    function registrer(event) {
        event.preventDefault();
        const promisse = axios.post(
        'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', 
        userInfos);
        promisse.then(response => {
            const { data } = response;
            console.log(data);
            navigate("/");
        });
        promisse.catch(warning);
    }

    function warning() {
        alert('Não foi possível executar a ação');
    }
    return (
        <Section>
            <img src={Logo} alt="Logo trackit" />
            <Form onSubmit={registrer}>
                <input type="text" placeholder='email' value={userInfos.email} onChange={e => setUserInfos({ ...userInfos, email: e.target.value })}></input>
                <input type="text" placeholder='senha' value={userInfos.password} onChange={e => setUserInfos({ ...userInfos, password: e.target.value })}></input>
                <input type="text" placeholder='nome' value={userInfos.name} onChange={e => setUserInfos({ ...userInfos, name: e.target.value })}></input>
                <input type="url" placeholder='foto' value={userInfos.image} onChange={e => setUserInfos({ ...userInfos, image: e.target.value })}></input>
                <button type="submit">Cadastrar</button>
            </Form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Section>
    )
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
    color: black;
}

input::placeholder {
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