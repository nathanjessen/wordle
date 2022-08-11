import { TLine } from '../../typings';
import ColorTile from '../ColorTile';

export interface IWordLine {
  items?: TLine;
}

export const WordLine = ({ items }: IWordLine) => {
  return (
    <div className='flex justify-center items-center gap-2'>
      {/* Display letters */}
      {items?.map((item, idx) => (
        <ColorTile
          key={`item-${idx}`}
          color={item?.color}
          children={item?.char}
        />
      ))}
    </div>
  );
};
