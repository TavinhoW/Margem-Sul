import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const Equipa = () => {
    const players = [
        {
            number: 9,
            name: 'Tate',
            position: 'LW',
            season: '2024-25',
            appearances: '39',
            goals: '2',
            assists: '5',
            image: '/jogadores/Tavinhoflow.jpg',
        },
        {
            number: 69,
            name: 'Wesley',
            position: 'ST',
            season: '2024-25',
            appearances: '39',
            goals: '2',
            assists: '5',
            image: '/jogadores/Wesleyflow.jpg',
        },
        {
            number: 7,
            name: 'Caxambu',
            position: 'RW',
            season: '2024-25',
            appearances: '39',
            goals: '2',
            assists: '5',
            image: '/jogadores/Caxambuflow.png',
        },
        {
            number: 23,
            name: 'Dipo',
            position: 'CM',
            season: '2024-25',
            appearances: '0',
            goals: '0',
            assists: '0',
            image: '/noticias/hiori.jpg',
        },
    ];

    const staff = [
        {
            name: 'Abel Xavier',
            role: 'Manager',
            season: '2024-25',
            gamesThisSeason: '10',
            winsThisSeason: 50,
            image: '/jogadores/abelxavier.png',
        },
    ];

    return (
        <div className="px-4 py-8">
            <h2 className="font-bold text-2xl mb-6">Jogadores</h2>
            <div className="grid grid-cols-3 gap-4">
                {players.map((player, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader className="flex items-center space-x-4">
                            <img src={player.image} alt={player.name} className="w-30 h-20 rounded-full items-center" />
                            <CardTitle className="text-xl">{player.name}</CardTitle>
                            <CardDescription>{player.position} • #{player.number}</CardDescription>
                            <p/>
                        </CardHeader>
                        <CardContent>
                            <h4 className="text-gray-500 text-sm">{player.season}</h4>
                            <table className="w-full mt-2">
                                <tbody>
                                <tr>
                                    <td className="text-gray-600">Jogos</td>
                                    <td className="text-right">{player.appearances}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600">Golos</td>
                                    <td className="text-right">{player.goals}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600">Assistências</td>
                                    <td className="text-right">{player.assists}</td>
                                </tr>
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <h2 className="font-bold text-2xl my-6">Equipa Técnica</h2>
            <div className="grid grid-cols-3 gap-4">
                {staff.map((staffMember, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader className="flex items-center space-x-4">
                            <img src={staffMember.image} alt={staffMember.name} className="w-30 h-20 rounded-full" />
                            <div>
                                <CardTitle className="text-xl">{staffMember.name}</CardTitle>
                                <CardDescription>{staffMember.role}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h4 className="text-gray-500 text-sm">{staffMember.season}</h4>
                            <table className="w-full mt-2">
                                <tbody>
                                <tr>
                                    <td className="text-gray-600">Jogos</td>
                                    <td className="text-right">{staffMember.gamesThisSeason}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600">Vitórias</td>
                                    <td className="text-right">{staffMember.winsThisSeason}</td>
                                </tr>
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Equipa;
