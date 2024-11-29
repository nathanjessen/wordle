import { TLine } from '../../typings';
import WordLine from '../WordLine';

export interface ILetterGrid {
  lines?: Array<TLine>;
  cols?: number;
  rows?: number;
}

export const LetterGrid = ({ lines = [], cols = 5, rows = 5 }: ILetterGrid) => {
  const emptyLines = rows - lines.length;

  return (
    <div className='flex flex-col gap-2 items-center'>
      {/* Display lines for attempts */}
      {lines.map((line, idx) => (
        <WordLine 
          items={line} 
          length={cols}
          key={`line-${idx}`}
          className="animate-pop"
          style={{ animationDelay: `${idx * 50}ms` }}
        />
      ))}
      {/* Display empty line for each remaining attempt */}
      {[...Array(emptyLines)].map((_, idx) => (
        <WordLine 
          items={[]}
          length={cols}
          key={`empty-${idx}`}
        />
      ))}
    </div>
  );
};
