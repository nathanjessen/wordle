import { TLine } from "../../typings";
import WordLine from "../WordLine";

export interface ILetterGrid {
  lines?: Array<TLine>;
  cols?: number;
  rows?: number;
}

export const LetterGrid = ({ lines = [], cols = 5, rows = 5 }: ILetterGrid) => {
  const emptyLines = rows - lines.length;

  return (
    <div className='flex flex-col gap-2'>
      {/* Display lines for attempts */}
      {lines.map((line, idx) => (
        <WordLine items={line} key={`line-${idx}`} />
      ))}
      {/* Display empty line for each remaining attempt */}
      {[...Array(emptyLines)].map((num, idx) => (
        <WordLine items={Array(cols).fill(null)} key={`empty-${idx}`} />
      ))}
    </div>
  );
};
