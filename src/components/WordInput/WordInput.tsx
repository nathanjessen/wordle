import { KeyboardEvent, ChangeEvent } from 'react';

export interface IWordInput {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
}

export const WordInput = ({
  value,
  onChange,
  onSubmit,
  maxLength = 5,
  disabled = false,
  className = '',
}: IWordInput) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.toUpperCase();
    onChange(newValue);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && value.trim() && onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        maxLength={maxLength}
        placeholder="TYPE YOUR GUESS"
        className={`w-full max-w-xs px-4 py-3 text-lg text-center uppercase rounded-lg 
                  bg-light-bg-secondary dark:bg-dark-bg-secondary
                  text-light-text-primary dark:text-dark-text-primary
                  border-2 border-[#d4c5b3] dark:border-dark-border
                  focus:outline-none focus:ring-2 focus:ring-light-button-primary dark:focus:ring-dark-button-primary
                  focus:border-light-button-primary dark:focus:border-dark-button-primary
                  disabled:opacity-50 disabled:cursor-not-allowed
                  placeholder:text-light-text-secondary dark:placeholder:text-dark-text-secondary
                  transition-colors duration-200 ${className}`.trim()}
      />
    </div>
  );
};

export default WordInput;
