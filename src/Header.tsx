import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="bg-black py-4">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <Link to="/" className="h-20 w-auto">
                        <img className="h-20 w-auto hover:opacity-75 transition duration-300 ease-in-out" src="/margem-sul-icon.png" alt="Margem-Sul" />
                    </Link>
                    <div className="flex space-x-7">
                        <Link to="/jogos" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out">Jogos</Link>
                        <Link to="/estadio" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out">Estádio</Link>
                        <Link to="/equipa" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out">Equipa</Link>
                        <Link to="/loja" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out">Loja</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
