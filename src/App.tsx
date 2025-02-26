import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import Products from './frontpage/produtos.tsx';
import Noticias from './frontpage/noticias.tsx';
import Trofeus from './frontpage/info.tsx';
import MatchSchedule from './content/jogos/jogos.tsx';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<><Products /><Noticias /><Trofeus /></>} />

                <Route path="/jogos" element={<MatchSchedule />} />
                <Route path="/estadio" element={<div>Estádio</div>} />
                <Route path="/equipa" element={<div>Equipa</div>} />
                <Route path="/loja" element={<div>Loja</div>} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
