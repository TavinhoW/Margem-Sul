const Noticias = () => {
    // Array com as informações das notícias
    const newsItems = [
        {
            imageSrc: "/noticias/hiori.jpg",
            altText: "Noticia 1",
            title: "Nova Transferencia",
            description: "Dipo nova contratação da Margem Sul"
        },
        {
            imageSrc: "/noticias/Toreense.png",
            altText: "Noticia 2",
            title: "Confusão",
            description: "Margem Sul e Torrense apanhados no ato"
        },
        {
            imageSrc: "/noticias/Squidgame.png",
            altText: "Noticia 3",
            title: "Financeiro",
            description: "Apanharam o Tate a ganhar o Squid Game"
        },
        {
            imageSrc: "/noticias/WesleyCarta.png",
            altText: "Noticia 4",
            title: "FIFA",
            description: "Wesley da Margem Sul recebe carta no FIFA"
        },
        {
            imageSrc: "/noticias/arcane.jpg",
            altText: "Noticia 5",
            title: "Novo Patrocinio",
            description: "Wesley arranja patrocinio com Arcane"
        },
        {
            imageSrc: "/noticias/punjab.png",
            altText: "Noticia 6",
            title: "Rumores de Transferencia",
            description: "Punjab revela-se interessado em Caxambu"
        }
    ];

    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Noticias</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">

                        {newsItems.map((news, index) => (
                            <div key={index} className="group relative">
                                <img
                                    src={news.imageSrc}
                                    alt={news.altText}
                                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square transition duration-300 ease-in-out"
                                />
                                <h3 className="mt-3 text-sm text-gray-500">
                                    <span className="absolute inset-0"></span>
                                    {news.title}
                                </h3>
                                <p className="text-base font-semibold text-gray-900 mb-10">{news.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Noticias;
