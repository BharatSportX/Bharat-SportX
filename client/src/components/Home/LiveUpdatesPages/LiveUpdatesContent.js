import React from 'react';

const liveUpdatesData = [
  {
    id: 1,
    type: 'result',
    team1: 'Team A',
    team2: 'Team B',
    score1: 2,
    score2: 1,
    status: 'Final',
    time: 'Just now',
  },
  {
    id: 2,
    type: 'blog',
    title: 'Exciting Football Match Recap',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    time: '2 minutes ago',
  },
  {
    id: 3,
    type: 'video',
    title: 'Match Highlights: Team A vs Team B',
    url: 'https://www.youtube.com/embed/VIDEO_ID_1',
    time: '5 minutes ago',
  },
];

export default function LiveUpdatesContent() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Live Updates</h2>
      <div className="space-y-8">
        {liveUpdatesData.map(update => (
          <div key={update.id} className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-md">
            {update.type === 'result' ? (
              <>
                <div className="flex justify-between mb-2">
                  <div className="text-lg font-semibold">{update.team1}</div>
                  <div className="text-lg">{update.score1}</div>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="text-lg font-semibold">{update.team2}</div>
                  <div className="text-lg">{update.score2}</div>
                </div>
                <div className="text-sm text-gray-500 mb-4">{update.status}</div>
              </>
            ) : update.type === 'blog' ? (
              <>
                <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{update.content}</p>
              </>
            ) : (
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  className="w-full h-full rounded-md"
                  src={update.url}
                  title={update.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <p className="text-sm text-gray-500">{update.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
