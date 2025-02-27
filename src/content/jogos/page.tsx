const MatchSchedule = () => {
    const matches = [
        {
            date: '2 de Março',
            league: 'League Match',
            time: '20:00',
            homeTeam: 'Margem Sul',
            awayTeam: 'Torrense',
            venue: 'Campo da Verderena',
        },
        {
            date: '9 de Março',
            league: 'League Match',
            time: '20:00',
            homeTeam: 'GD Fabril',
            awayTeam: 'Margem Sul',
            venue: 'Alfredo da Silva',
        },
        {
            date: '14 de Março',
            league: 'League Match',
            time: '20:00',
            homeTeam: 'Margem Sul',
            awayTeam: 'Estrela da Amadora B',
            venue: 'Campo da Verderena',
        },
        {
            date: '23 de Março',
            league: 'League Match',
            time: '20:00',
            homeTeam: 'Amora',
            awayTeam: 'Margem Sul',
            venue: 'Estádio da Medideira',
        },
        {
            date: '29 de Março',
            league: 'League Match',
            time: '20:00',
            homeTeam: 'Margem Sul',
            awayTeam: 'Lagoa',
            venue: 'Campo da Verderena',
        },
        {
            date: '31 de Março',
            league: 'League Match',
            time: '20:00',
            homeTeam: 'Margem Sul',
            awayTeam: 'Cheios de Fome',
            venue: 'Campo da Verderena',
        },
    ];

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">MARÇO 2025</h2>
            {matches.map((match, index) => (
                <div key={index} className="mb-4 border-b border-gray-300 pb-4">
                    <h3 className="font-semibold">{match.league}</h3>
                    <p className="text-gray-600">{match.date} — {match.venue}</p>
                    <div className="flex justify-between items-center mt-2">
                        <span className="font-bold">{match.homeTeam}</span>
                        <span className="text-gray-500">{match.time}</span>
                        <span className="font-bold">{match.awayTeam}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MatchSchedule;