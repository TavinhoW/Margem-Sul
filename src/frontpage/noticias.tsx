const Noticias = () => {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Noticias</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <div className="group relative">
                            <img
                                src="public/noticias/hiori.jpg"
                                alt="Noticia 1"
                                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"/>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <span className="absolute inset-0"></span>
                                Nova Transferencia
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Dipo nova contratação da Margem Sul</p>
                        </div>
                        <div className="group relative">
                            <img
                                src="public/noticias/Toreense.png"
                                alt="Noticia 2"
                                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"/>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <span className="absolute inset-0"></span>
                                Confusão
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Margem Sul e Torrense apanhados no ato</p>
                        </div>
                        <div className="group relative">
                            <img
                                src="public/noticias/Squidgame.png"
                                alt="Noticia 3"
                                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"/>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <span className="absolute inset-0"></span>
                                Financeiro
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Apanharam o Tate a ganhar o Squid Game</p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <div className="group relative">
                            <img
                                src="public/noticias/WesleyCarta.png"
                                alt="Noticia 4"
                                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"/>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <span className="absolute inset-0"></span>
                                FIFA
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Wesley da Margem Sul recebe carta no FIFA</p>
                        </div>
                        <div className="group relative">
                            <img
                                src="public/noticias/arcane.jpg"
                                alt="Noticia 5"
                                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"/>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <span className="absolute inset-0"></span>
                                Novo Patrocinio
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Wesley arranja patrocinio com Arcane</p>
                        </div>
                        <div className="group relative">
                            <img
                                src="public/noticias/punjab.png"
                                alt="Noticia 6"
                                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"/>
                            <h3 className="mt-6 text-sm text-gray-500">
                                <span className="absolute inset-0"></span>
                                Rumores de Transferencia
                            </h3>
                            <p className="text-base font-semibold text-gray-900">Punjab revela-se interessado em Caxambu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Noticias