import { Separator } from "@/components/ui/separator"

const Estadio= () => {
    return (
        <div className="flex flex-col items-center bg-gray-100">
            <h1 className="text-2xl font-semibold my-6">Estádio da Verderena</h1>
            <img className="my-2 hover:opacity-80 transition duration-300 ease-in-out" src="/estadio/campo_da_verderena.png " alt="Campo da verderena" />
            <Separator />
            <div className="mt-2 my-2 text-lg flex flex-col items-center">
                <h1 className="text-2xl font-semibold my-1">Morada do Estádio da Verderena</h1>
                <p>Rua: 2830 148, Av. Escola dos Fuzileiros Navais 4, Santo André</p>
                <p>Nº de Telemóvel: 21 207 0090</p>
                <img className="my-3 hover:opacity-80 transition duration-300 ease-in-out" src="/estadio/campo_da_verderena_2.jpg" alt="Campo da verderena 2" />
            </div>
            <Separator />
            <div className="mt-2 my-2 text-lg flex flex-col items-center">
                <h1 className="text-2xl font-semibold my-2">Sobre os Bilhetes</h1>
                <p>Os bilhetes são comprados no Estadio.</p>
                <p>As crianças menores de 13 anos só poderão visitar o Estádio quando acompanhados por um adulto.</p>
                <p>Não se efetuam trocas e/ou devoluções.</p>
            </div>
            <Separator />
        </div>
    );
};

export default Estadio;