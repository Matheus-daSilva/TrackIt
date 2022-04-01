import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import CadastroScreen from './CadastroScreen';

export default function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen />}/>
            <Route path="/cadastro" element={<CadastroScreen />}/>
        </Routes>
        </BrowserRouter>
    )
}