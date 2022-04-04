import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TokenProvider from '../context/Token';
import ImageProvider from '../context/Image';
import ProgressProvider from '../context/Progress';
import LoginScreen from './LoginScreen';
import CadastroScreen from './CadastroScreen';
import HojeScreen from './HojeScreen';
import HabitosScreen from './HabitosScreen';
import HistoricoScreen from './HistoricoScreen';

export default function App() {
    return (
        <ProgressProvider>
            <ImageProvider>
                <TokenProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<LoginScreen />} />
                            <Route path="/cadastro" element={<CadastroScreen />} />
                            <Route path="/hoje" element={<HojeScreen />} />
                            <Route path="/habitos" element={<HabitosScreen />} />
                            <Route path="/historico" element={<HistoricoScreen />} />
                        </Routes>
                    </BrowserRouter>
                </TokenProvider>
            </ImageProvider>
        </ProgressProvider>
    )
}