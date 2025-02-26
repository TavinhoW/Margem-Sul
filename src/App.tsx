import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.tsx';  // Ajuste o caminho conforme necessário
import MatchSchedule from './content/jogos/jogos.tsx';  // Ajuste o caminho conforme necessário

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {/* Defina as rotas aqui */}
                <Route path="/jogos" element={<MatchSchedule />} />
                {/* Outras rotas */}
                <Route path="/estadio" element={<div>Estádio</div>} />
                <Route path="/equipa" element={<div>Equipa</div>} />
                <Route path="/loja" element={<div>Loja</div>} />
            </Routes>
        </Router>
    );
};

export default App;
