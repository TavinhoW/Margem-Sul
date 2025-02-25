const Header = ()=> {
    return(
        <nav className="bg-black py-4">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <img className="h-20 w-auto" src="public/margem-sul-icon.png" alt="Margem-Sul"/>
                    <div className="flex space-x-7">
                        <a href="src/content/jogos/jogos.tsx" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Jogos</a>
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Estádio</a>
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Equipa</a>
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Loja</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
