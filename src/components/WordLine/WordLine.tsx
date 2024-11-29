import { CSSProperties } from 'react';
import { TLine } from '../../typings';
import ColorTile from '../ColorTile';

export interface IWordLine {
  items?: TLine;
  length: number;
  className?: string;
  style?: CSSProperties;
}

export const WordLine = ({ items = [], length, className = '', style }: IWordLine) => {
  const emptyTiles = length - items.length;
  
  return (
    <div 
      className={`flex gap-2 ${className}`}
      style={style}
    >
      {/* Display letters */}
      {items.map((item, idx) => (
        <ColorTile
          key={idx}
          color={item?.color}
          className="w-14 h-14 text-2xl font-bold border-2 
                    bg-light-tile-bg dark:bg-dark-bg-secondary
                    border-light-tile-border dark:border-dark-tile-border
                    text-light-text-primary dark:text-dark-text-primary"
        >
          {item?.char}
        </ColorTile>
      ))}
      {[...Array(emptyTiles)].map((_, idx) => (
        <ColorTile
          key={`empty-${idx}`}
          className="w-14 h-14 text-2xl font-bold border-2
                    bg-light-tile-bg dark:bg-dark-bg-secondary
                    border-light-tile-border dark:border-dark-tile-border"
        />
      ))}
    </div>
  );
};
