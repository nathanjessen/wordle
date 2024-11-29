import { KeyboardEvent, useState } from 'react';

export interface IWordInput {
  onGuess?: (T: string) => void;
  disabled?: boolean;
}

export const WordInput = ({ onGuess, disabled = false }: IWordInput) => {
  const [val, setVal] = useState<string>('');

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onGuess?.(val);
      setVal('');
    }
  };

  return (
    <div className='space-y-2'>
      <label 
        htmlFor='guess' 
        className='block text-sm font-medium text-gray-700'
      >
        Hit the enter key to submit
      </label>
      <div className='relative'>
        <input
          type='text'
          id='guess'
          name='guess'
          placeholder='Type your guess'
          className='w-full px-4 py-3 text-lg uppercase border-2 border-wordle-tile-border rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-wordle-correct focus:border-transparent
                    disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
                    placeholder:text-gray-400'
          value={val}
          onKeyDown={(e) => onEnter(e)}
          onChange={(e) => setVal(e.target.value)}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
