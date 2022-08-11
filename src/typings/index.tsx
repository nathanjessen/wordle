export type TColor = 'success' | 'warning' | 'info' | 'neutral' | 'base';

export type TLetter = {
  char: string;
  color: TColor;
};

export type TLine = Array<TLetter | null>;
