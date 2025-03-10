import Link from "next/link";


const Header = () => {
    return (
        <nav className="bg-black py-4">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <Link href="/" className="h-20 w-auto">
                        <img className="h-20 w-auto hover:opacity-75 transition duration-300 ease-in-out" src="/margem-sul-icon.png" alt="Margem-Sul" />
                    </Link>
                    <div className="flex space-x-7">
                        <Link href="../content/jogos" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out">Jogos</Link>
                        <Link href="../content/estadio" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out">Estádio</Link>
                        <Link href="../content/equipa" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out">Equipa</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
