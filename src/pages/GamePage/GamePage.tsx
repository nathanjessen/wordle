import { useEffect, useState } from 'react';
import { API_WORDLE } from '../../constants';
import LetterGrid from '../../components/LetterGrid';
import { TColor, TLine } from '../../typings';
import WordInput from '../../components/WordInput';

export const GamePage = () => {
  // Word to be guessed
  const [solution, setSolution] = useState<string>('');
  // Length of word being guessed
  const [wordLen, setWordLen] = useState<number>(5);
  // How many attempts are they allowed
  const [attempts, setAttempts] = useState<number>(6);
  // Current attempt
  const [guess, setGuess] = useState<string>('');
  // All attempts
  const [lines, setLines] = useState<Array<TLine>>([]);
  // Whether or not game is complete
  const [isGameComplete, setIsGameComplete] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const getWord = async () => {
      const response = await fetch(`${API_WORDLE}?length=${wordLen}`, {
        signal: controller.signal,
      });
      const words: Array<string> = await response.json();
      setSolution(words[0]);
      setWordLen(words[0].length);
      setAttempts(6);
    };

    getWord();

    return () => controller?.abort();
  }, []);

  useEffect(() => {
    const newLine = getLetters();
    if (newLine.length) {
      setLines(prevLines => [...prevLines, newLine]);
    }
  }, [guess]);

  useEffect(() => {
    if (solution.length > 0 && (lines.length === attempts || guess === solution)) {
      setIsGameComplete(true);
    }
  }, [lines]);

  const getLetters = (): TLine => {
    const abc = solution.split('');
    const xyz = guess.split('');
    let result: TLine = xyz.map((letter, idx) => {
      let color: TColor = "base";

      if (letter === abc[idx]) {
        // Answer revealed early
        if (isGameComplete) {
          color = "info";
        } else {
          color = "success";
        }
      } else if (solution.indexOf(letter) > 0) {
        color = "warning";
      } else {
        color = "neutral";
      }

      return {
        char: letter,
        color: color,
      };
    });
    return result;
  };

  const onGuess = (val: string) => {
    if (val.length === wordLen) {
      setGuess(val);
    }
  };

  const onRevealAnswer = () => {
    setIsGameComplete(true);
    setGuess(solution);
  };

  const onRestart = () => {
    window.location.reload();
  };

  return (
    <div className="max-w-lg mx-auto space-y-4 h-screen flex flex-col justify-center">
      <WordInput onGuess={onGuess} disabled={isGameComplete} />
      <LetterGrid lines={lines} cols={wordLen} rows={attempts} />

      {isGameComplete ? (
        <>
          <p className="text-center">Solution: {solution}</p>
          <button className="btn btn-secondary" onClick={onRestart}>
            Restart
          </button>
        </>
      ) : (
        <button className="btn btn-primary" onClick={onRevealAnswer}>
          Show Solution
        </button>
      )}
    </div>
  );
};