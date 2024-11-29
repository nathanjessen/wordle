import { useState, KeyboardEvent } from 'react';

export interface IWordInput {
  onGuess: (guess: string) => void;
  disabled?: boolean;
}

export const WordInput = ({ onGuess, disabled = false }: IWordInput) => {
  const [value, setValue] = useState('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value.trim()) {
      onGuess(value.trim().toLowerCase());
      setValue('');
    }
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Type your guess"
        className="w-full max-w-xs px-4 py-3 text-lg text-center rounded-lg 
                  bg-light-bg-secondary dark:bg-dark-bg-secondary
                  text-light-text-primary dark:text-dark-text-primary
                  border-2 border-[#d4c5b3] dark:border-dark-border
                  focus:outline-none focus:ring-2 focus:ring-light-button-primary dark:focus:ring-dark-button-primary
                  focus:border-light-button-primary dark:focus:border-dark-button-primary
                  disabled:opacity-50 disabled:cursor-not-allowed
                  placeholder:text-light-text-secondary dark:placeholder:text-dark-text-secondary
                  transition-colors duration-200"
      />
    </div>
  );
};

export default WordInput;
