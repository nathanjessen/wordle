import { useCallback, useEffect, useState } from 'react';
import LetterGrid from '../../components/LetterGrid';
import WordInput from '../../components/WordInput';
import { WORDS_API } from '../../constants';
import API from '../../lib/API';
import { TColor, TLine } from '../../typings';

const api = new API();

export const GamePage = () => {
  // List of all possible words
  const [wordlist, setWordlist] = useState<string[]>([]);
  // Word to be guessed
  const [solution, setSolution] = useState<string>('');
  // Length of word being guessed
  const wordLen: number = 5;
  // How many attempts are they allowed
  const attempts: number = 6;
  // Current attempt
  const [guess, setGuess] = useState<string>('');
  // All attempts
  const [lines, setLines] = useState<Array<TLine>>([]);
  // Whether or not game is complete
  const [isGameComplete, setIsGameComplete] = useState<boolean>(false);

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

  const onGuess = (val: string) => {
    // Verify word exists in dictionary
    if (wordlist.indexOf(val) >= 0) {
      // And word is the desired length
      if (val.length === wordLen) {
        setGuess(val);
        convertToLetters(val);
      } else {
        alert(`${val} is the wrong length.`);
      }
    }
    // User entered an unknown word
    else {
      alert(`${val} isn't in our list of accepted words.`);
    }
  };

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
    <div className='max-w-lg mx-auto p-8 space-y-4 flex flex-col justify-center'>
      <WordInput onGuess={onGuess} disabled={isGameComplete} />
      <LetterGrid lines={lines} cols={wordLen} rows={attempts} />

      {isGameComplete ? (
        <>
          <p className='text-center'>Solution: {solution}</p>
          <button className='btn btn-secondary' onClick={onRestart}>
            Restart
          </button>
        </>
      ) : (
        <button className='btn btn-primary' onClick={onRevealAnswer}>
          Show Solution
        </button>
      )}
    </div>
  );
};
