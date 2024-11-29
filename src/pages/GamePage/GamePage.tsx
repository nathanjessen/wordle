import { useCallback, useEffect, useState } from 'react';
import LetterGrid from '../../components/LetterGrid';
import WordInput from '../../components/WordInput';
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle';
import { Statistics } from '../../components/Statistics/Statistics';
import { Toast, ToastType } from '../../components/Toast/Toast';
import { WORDS_API } from '../../constants';
import API from '../../lib/API';
import { TColor, TLine } from '../../typings';

const api = new API();

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

export const GamePage = () => {
  // Game state
  const [wordlist, setWordlist] = useState<string[]>([]);
  const [solution, setSolution] = useState<string>('');
  const [lines, setLines] = useState<Array<TLine>>([]);
  const [isGameComplete, setIsGameComplete] = useState<boolean>(false);
  const [showStats, setShowStats] = useState<boolean>(false);
  const [letterStates, setLetterStates] = useState<{ [key: string]: TColor }>({});
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [guess, setGuess] = useState<string>('');

  const wordLen = solution.length || 5;
  const attempts: number = 6;

  // Show toast message
  const showToast = (message: string, type: ToastType) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  // Remove toast message
  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Update game statistics
  const updateStats = (won: boolean, attempts: number) => {
    const stats = JSON.parse(localStorage.getItem('gameStats') || '{"gamesPlayed":0,"gamesWon":0,"currentStreak":0,"maxStreak":0,"guessDistribution":[0,0,0,0,0,0]}');
    
    stats.gamesPlayed++;
    if (won) {
      stats.gamesWon++;
      stats.currentStreak++;
      stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
      stats.guessDistribution[attempts - 1]++;
    } else {
      stats.currentStreak = 0;
    }

    localStorage.setItem('gameStats', JSON.stringify(stats));
  };

  // Handle keyboard input
  const handleKeyPress = (key: string) => {
    if (key === 'Enter') {
      onGuess(lines[lines.length - 1]?.map(item => item?.char).join('') || '');
    } else if (key === 'Backspace') {
      // Handle backspace
      const currentLine = [...(lines[lines.length - 1] || [])];
      currentLine.pop();
      setLines(prev => [...prev.slice(0, -1), currentLine]);
    } else if (key.length === 1 && /[A-Z]/.test(key)) {
      // Handle letter input
      const currentLine = [...(lines[lines.length - 1] || [])];
      if (currentLine.length < wordLen) {
        currentLine.push({ char: key.toLowerCase(), color: 'base' });
        setLines(prev => [...prev.slice(0, -1), currentLine]);
      }
    }
  };

  const getRandomWord = () => {
    const randomInt = Math.floor(Math.random() * wordlist.length);
    const newWord = wordlist[randomInt];
    if (newWord) {
      setSolution(newWord);
    }
  };

  /**
   * Get word list and choose random word
   */
  useEffect(() => {
    const controller = new AbortController();
    let isSubscribed = true;

    const getWords = async () => {
      try {
        const response = await api.get(WORDS_API, {
          signal: controller.signal,
        });
        const data = await response.json();
        
        if (isSubscribed && data.length > 0) {
          const randomInt = Math.floor(Math.random() * data.length);
          setWordlist(data);
          setSolution(data[randomInt]);
        }
      } catch (error) {
        // Only log errors that aren't from aborting
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Error fetching words:', error);
        }
      }
    };

    getWords();

    return () => {
      isSubscribed = false;
      controller.abort();
    };
  }, []);

  /**
   * Converts a word into UI friendly tile objects
   * @param {String} word to convert to tiles
   */
  const convertToLetters = useCallback(
    (word: string) => {
      const solutionCharArr = solution.split('');
      const wordCharArr = word.split('');

      const newLine: TLine = wordCharArr.map((letter, idx) => {
        let color: TColor = 'base';

        if (letter === solutionCharArr[idx]) {
          // Answer revealed early
          if (isGameComplete) {
            color = 'info';
          } else {
            color = 'success';
          }
        } else if (solution.indexOf(letter) >= 0) {
          color = 'warning';
        } else {
          color = 'neutral';
        }

        return {
          char: letter,
          color: color,
        };
      });

      if (newLine.length) {
        setLines((prevLines) => [...prevLines, newLine]);
      }
    },
    [solution, isGameComplete]
  );

  useEffect(() => {
    if (
      solution.length > 0 &&
      (lines.length === attempts || guess === solution)
    ) {
      setIsGameComplete(true);
    }
  }, [guess, lines, solution]);

  const onGuess = useCallback((guess: string) => {
    if (guess.length !== wordLen) {
      showToast(`Word must be ${wordLen} letters long`, 'error');
      return;
    }

    if (!wordlist.includes(guess.toLowerCase())) {
      showToast('Not in word list', 'error');
      return;
    }

    const newLine: TLine = [];
    const newLetterStates = { ...letterStates };
    
    // Check each letter
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i].toLowerCase();
      let color: TColor = 'neutral';

      if (letter === solution[i]) {
        color = 'success';
      } else if (solution.includes(letter)) {
        color = 'warning';
      }

      // Update letter state with highest priority color
      if (!newLetterStates[letter] || 
          (color === 'success') || 
          (color === 'warning' && newLetterStates[letter] === 'neutral')) {
        newLetterStates[letter] = color;
      }

      newLine.push({ char: letter, color });
    }

    setLetterStates(newLetterStates);
    setLines(prev => [...prev, newLine]);

    // Check win condition
    if (guess.toLowerCase() === solution) {
      setIsGameComplete(true);
      updateStats(true, lines.length + 1);
      showToast('Congratulations!', 'success');
      setTimeout(() => setShowStats(true), 1500);
    } else if (lines.length + 1 >= attempts) {
      setIsGameComplete(true);
      updateStats(false, attempts);
      showToast(`Game Over! The word was ${solution}`, 'error');
      setTimeout(() => setShowStats(true), 1500);
    }
  }, [solution, wordlist, lines.length, letterStates, attempts]);

  const onRevealAnswer = () => {
    setIsGameComplete(true);
    setGuess(solution);
  };

  const onRestart = () => {
    // window.location.reload();
    setGuess('');
    setLines([]);
    setIsGameComplete(false);
    getRandomWord();
  };

  return (
    <div className='max-w-6xl mx-auto px-4 py-8 min-h-screen flex flex-col'>
      {/* Header */}
      <header className='border-b border-[#d4c5b3] dark:border-dark-tile-border pb-4 flex justify-between items-center'>
        <div className="w-10" /> {/* Spacer */}
        <h1 className='text-3xl font-bold text-center'>Wordle</h1>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <div className='flex-grow flex flex-row'>
        {/* Game Area */}
        <div className='flex-1 flex flex-col gap-8 pt-8 pr-12 min-w-0'>
          <LetterGrid lines={lines} cols={wordLen} rows={attempts} />
          
          <div className='space-y-8'>
            <WordInput
              value={guess}
              onChange={setGuess}
              onSubmit={() => {
                onGuess(guess);
                setGuess('');
              }}
              maxLength={wordLen}
              disabled={isGameComplete}
            />

            {/* Game Status and Controls */}
            <div className='flex flex-col items-center gap-4 mb-4'>
              {isGameComplete ? (
                <>
                  <p className='text-lg font-medium'>
                    Solution: <span className='text-wordle-correct'>{solution}</span>
                  </p>
                  <button 
                    className='px-6 py-2.5 bg-wordle-absent text-white rounded-lg 
                              hover:bg-opacity-90 transition-colors font-medium
                              focus:outline-none focus:ring-2 focus:ring-wordle-absent focus:ring-opacity-50' 
                    onClick={onRestart}
                  >
                    Play Again
                  </button>
                </>
              ) : (
                <button 
                  className='px-6 py-2.5 bg-wordle-correct text-white rounded-lg 
                            hover:bg-opacity-90 transition-colors font-medium
                            focus:outline-none focus:ring-2 focus:ring-wordle-correct focus:ring-opacity-50' 
                  onClick={onRevealAnswer}
                >
                  Show Solution
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Statistics Side Panel */}
        <div className='hidden md:block w-[360px] min-w-[360px] border-l border-[#d4c5b3] dark:border-dark-border pl-8 pt-8'>
          <Statistics />
        </div>
      </div>

      {/* Toast Messages */}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};
