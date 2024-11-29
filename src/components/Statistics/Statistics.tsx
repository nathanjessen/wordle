import { useEffect, useState } from 'react';

interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  guessDistribution: number[];
}

export const Statistics = () => {
  const stats = JSON.parse(localStorage.getItem('gameStats') || '{"gamesPlayed":0,"gamesWon":0,"currentStreak":0,"maxStreak":0,"guessDistribution":[0,0,0,0,0,0]}');
  const { gamesPlayed, gamesWon, currentStreak, maxStreak, guessDistribution } = stats;
  const winPercentage = gamesPlayed > 0 ? Math.round((gamesWon / gamesPlayed) * 100) : 0;
  const maxGuesses = Math.max(...guessDistribution, 1);

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-center text-light-text-primary dark:text-dark-text-primary">Statistics</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="text-center">
          <p className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">{gamesPlayed}</p>
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Played</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">{winPercentage}</p>
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Win %</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">{currentStreak}</p>
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Current Streak</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">{maxStreak}</p>
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Max Streak</p>
        </div>
      </div>

      {/* Guess Distribution */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary">
          Wins by Number of Guesses
        </h3>
        <div className="space-y-1.5">
          {guessDistribution.map((count: number, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 font-medium text-light-text-secondary dark:text-dark-text-secondary">
                {index + 1}
              </div>
              <div className="flex-1 flex items-center">
                <div
                  className={`
                    h-7 rounded flex items-center justify-center
                    transition-all duration-300 ease-out
                    ${count > 0 
                      ? 'bg-light-button-primary dark:bg-dark-button-primary text-white' 
                      : 'bg-light-border dark:bg-dark-border text-light-text-secondary dark:text-dark-text-secondary'
                    }
                  `}
                  style={{
                    width: count > 0 ? `${(count / maxGuesses) * 100}%` : '24px',
                  }}
                >
                  <span className="text-sm font-medium min-w-[20px] text-center">
                    {count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
