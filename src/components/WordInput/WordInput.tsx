import { KeyboardEvent, useState } from "react";

export interface IWordInput {
  onGuess?: (T: string) => void;
  disabled?: boolean;
}

export const WordInput = ({
  onGuess,
  disabled = true,
}: IWordInput) => {
  const [val, setVal] = useState<string>('');

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onGuess?.(val);
      setVal('');
    }
  };

  return (
    <div className="space-y-1">
      <label htmlFor="guess" className="label">Hit the enter key to submit.</label>
      <input type="text"
        id="guess"
        name="guess"
        placeholder="Guess"
        className="input input-bordered w-full input-lg"
        value={val}
        onKeyDown={e => onEnter(e)}
        onChange={e => setVal(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};
