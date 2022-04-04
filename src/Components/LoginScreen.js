import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Logo from "./../assets/img/Logo.png";
import { useToken } from "../context/Token";
import { useImage } from "../context/Image";
import { ThreeDots } from "react-loader-spinner";

export default function LoginScreen() {
    const [load, setLoad] = useState(false);
    const { setToken } = useToken();
    const { setImage } = useImage();
    const navigate = useNavigate();
    const [userInfos, setUserInfos] = useState({
        email: "",
        password: ""
    });

    function login(event) {
        event.preventDefault(); 
        setLoad(true);
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const promisse = axios.post(URL, userInfos);
        promisse.then(response => {
            const { data } = response;
            console.log(data);
            setToken(data.token);
            setImage(data.image);
            navigate("/hoje");
            setLoad(false);
        })
        promisse.catch(() => {
            setLoad(false);
            warning()
        })
    }

    function warning() {
        alert('Não foi possível fazer o login');
    }

    return !load ? (
        <Section>
            <img src={Logo} alt="Logo trackit" />
            <Form onSubmit={login}>
                <input type="text" placeholder='email' onChange={e => setUserInfos({ ...userInfos, email: e.target.value })}></input>
                <input type="text" placeholder='senha' onChange={e => setUserInfos({ ...userInfos, password: e.target.value })}></input>
                <button>Entrar</button>
            </Form>
            <Link to="/cadastro">
                <p>Não possui uma conta? Cadastre-se!</p>
            </Link>
        </Section>
    ) : (
        <Section>
            <img src={Logo} alt="Logo trackit" />
            <Form>
                <input type="text" placeholder='email' onChange={e => setUserInfos({ ...userInfos, email: e.target.value })}></input>
                <input type="text" placeholder='senha' onChange={e => setUserInfos({ ...userInfos, password: e.target.value })}></input>
                <DivLoading>
                    <ThreeDots color="#FFFFFF" width={50} />
                </DivLoading>
            </Form>
            <Link to="/cadastro">
                <p>Não possui uma conta? Cadastre-se!</p>
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

const DivLoading = styled.div`
width: 303px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
background: #52B6FF;
border-radius: 4.63636px;
`