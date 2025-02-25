const Trofeus = () => {
    return (
        <>
            <div className="bg-gray-100 py-24 sm:py-32">
                <h2 className="text-center text-lg/8 font-semibold text-gray-900">Estatisticas da Margem Sul</h2>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 p-10">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">Cash</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">30m€</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">Jogadores</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">4</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-gray-600">Adeptos</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">12</dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="bg-gray-100 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-lg/8 font-semibold text-gray-900">Patrocinios da Margem Sul</h2>
                    <div
                        className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img className="col-span-2 max-h-15 w-full object-contain lg:col-span-1"
                             src="public/arcane.png"
                             alt="Arcane" width="158" height="48"/>
                        <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                             src="public/bluelock.png"
                             alt="Blue Lock" width="158" height="48"/>
                        <img className="col-span-2 max-h-30 w-full object-contain lg:col-span-1"
                             src="public/mercadurmi.png"
                             alt="Mercadurmi" width="158" height="48"/>
                        <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                             src="public/cex.png"
                             alt="Cex" width="158" height="48"/>
                        <img
                            className="col-span-2 col-start-2 max-h-22 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src="public/continente.png"
                            alt="Continente" width="158" height="48"/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Trofeus
