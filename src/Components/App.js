import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TokenProvider from '../context/Token';
import ImageProvider from '../context/Image';
import LoginScreen from './LoginScreen';
import CadastroScreen from './CadastroScreen';
import HojeScreen from './HojeScreen';
import HabitosScreen from './HabitosScreen';

export default function App() {
    return (
        <ImageProvider>
            <TokenProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginScreen />} />
                        <Route path="/cadastro" element={<CadastroScreen />} />
                        <Route path="/hoje" element={<HojeScreen />} />
                        <Route path="/habitos" element={<HabitosScreen />} />
                    </Routes>
                </BrowserRouter>
            </TokenProvider>
        </ImageProvider>
    )
}