import { PropsWithChildren } from 'react';
import { TColor } from '../../typings';

export interface IColorTile {
  color?: TColor;
}

export const ColorTile = ({
  color = 'base',
  children,
}: PropsWithChildren<IColorTile>) => {
  const colors: { [key: string]: string } = {
    success: 'bg-success text-success-content border-success',
    warning: 'bg-warning text-warning-content border-warning',
    info: 'bg-info text-info-content border-info',
    neutral: 'bg-neutral text-neutral-content border-neutral',
    base: 'bg-base-100 text-base-content border-gray-300',
  };

  return (
    <div
      className={[
        'text-4xl border-2 p-4 h-20 w-20 flex justify-center items-center uppercase',
        colors[color],
      ].join(' ')}>
      {children}
    </div>
  );
};
