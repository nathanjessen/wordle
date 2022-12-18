import { Meta } from '@storybook/react';
import { WordLine } from './WordLine';

export default {
  title: 'Wordle/WordLine',
  component: WordLine,
} as Meta;

export const Empty = {
  args: {},
};

export const SingleItem = {
  args: {
    items: [
      {
        char: 'a',
        color: 'success',
      },
    ],
  },
};

export const ItemAndNulls = {
  args: {
    items: [
      {
        char: 'a',
        color: 'base',
      },
      null,
      null,
      null,
      null,
    ],
  },
};

export const FullWord = {
  args: {
    items: [
      {
        char: 't',
        color: 'base',
      },
      {
        char: 'e',
        color: 'base',
      },
      {
        char: 'n',
        color: 'base',
      },
      {
        char: 't',
        color: 'base',
      },
      {
        char: 's',
        color: 'base',
      },
    ],
  },
};

export const ValidatedWord = {
  args: {
    items: [
      {
        char: 't',
        color: 'success',
      },
      {
        char: 'e',
        color: 'neutral',
      },
      {
        char: 'n',
        color: 'neutral',
      },
      {
        char: 't',
        color: 'warning',
      },
      {
        char: 's',
        color: 'warning',
      },
    ],
  },
};

export const CorrectWord = {
  args: {
    items: [
      {
        char: 't',
        color: 'success',
      },
      {
        char: 'r',
        color: 'success',
      },
      {
        char: 'u',
        color: 'success',
      },
      {
        char: 's',
        color: 'success',
      },
      {
        char: 't',
        color: 'success',
      },
    ],
  },
};

export const SolutionRevealed = {
  args: {
    items: [
      {
        char: 't',
        color: 'info',
      },
      {
        char: 'r',
        color: 'info',
      },
      {
        char: 'u',
        color: 'info',
      },
      {
        char: 's',
        color: 'info',
      },
      {
        char: 't',
        color: 'info',
      },
    ],
  },
};
