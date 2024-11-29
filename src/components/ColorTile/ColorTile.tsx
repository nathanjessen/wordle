import { CSSProperties, PropsWithChildren } from 'react';
import { TColor } from '../../typings';

export interface IColorTile {
  color?: TColor;
  className?: string;
  style?: CSSProperties;
}

export const ColorTile = ({
  color = 'base',
  children,
  className = '',
  style,
}: PropsWithChildren<IColorTile>) => {
  const colors: { [key: string]: string } = {
    success: 'bg-wordle-correct text-white border-wordle-correct',
    warning: 'bg-wordle-present text-white border-wordle-present',
    info: 'bg-wordle-correct text-white border-wordle-correct opacity-50',
    neutral: 'bg-wordle-absent text-white border-wordle-absent',
    base: 'bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-dark-text-primary border-wordle-tile-border dark:border-dark-tile-border',
  };

  return (
    <div
      className={`w-14 h-14 border-2 flex items-center justify-center text-2xl font-bold uppercase 
                transition-colors duration-300 ${colors[color]} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
