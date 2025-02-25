import React from 'react';

const MatchSchedule: React.FC = () => {
    const matches = [
        {
            date: 'Wed 5 March',
            league: 'Champions League',
            time: '20:00',
            homeTeam: 'PSG',
            awayTeam: 'Liverpool',
            venue: 'Parc des Princes',
        },
        {
            date: 'Sat 8 March',
            league: 'Premier League',
            time: '15:00',
            homeTeam: 'Liverpool',
            awayTeam: 'Southampton',
            venue: 'Anfield',
        },
        {
            date: 'Tue 11 March',
            league: 'Champions League',
            time: '20:00',
            homeTeam: 'Liverpool',
            awayTeam: 'PSG',
            venue: 'Anfield',
        },
        {
            date: 'Sun 16 March',
            league: 'Carabao Cup',
            time: '16:30',
            homeTeam: 'Liverpool',
            awayTeam: 'Newcastle',
            venue: 'Wembley',
        },
    ];

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">MARCH 2025</h2>
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