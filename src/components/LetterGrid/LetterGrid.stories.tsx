import { Meta } from '@storybook/react';
import { LetterGrid } from './LetterGrid';

export default {
  title: 'Wordle/LetterGrid',
  component: LetterGrid,
} as Meta;

export const Default = {
  args: {},
};

export const FourCols = {
  args: {
    cols: 4,
  },
};

export const SixCols = {
  args: {
    cols: 6,
  },
};

export const FourRows = {
  args: {
    rows: 4,
  },
};

export const SixRows = {
  args: {
    rows: 6,
  },
};

export const SingleLineAttempt = {
  args: {
    lines: [
      [
        {
          char: 's',
          color: 'neutral',
        },
        {
          char: 't',
          color: 'neutral',
        },
        {
          char: 'a',
          color: 'neutral',
        },
        {
          char: 't',
          color: 'neutral',
        },
        {
          char: 's',
          color: 'neutral',
        },
      ],
    ],
  },
};

export const TwoLineAttempts = {
  args: {
    lines: [
      [
        {
          char: 's',
          color: 'neutral',
        },
        {
          char: 't',
          color: 'neutral',
        },
        {
          char: 'a',
          color: 'neutral',
        },
        {
          char: 't',
          color: 'neutral',
        },
        {
          char: 's',
          color: 'neutral',
        },
      ],
      [
        {
          char: 'g',
          color: 'success',
        },
        {
          char: 'r',
          color: 'success',
        },
        {
          char: 'o',
          color: 'success',
        },
        {
          char: 's',
          color: 'neutral',
        },
        {
          char: 's',
          color: 'neutral',
        },
      ],
    ],
  },
};

export const ThreeLineAttempts = {
  args: {
    lines: [
      [
        {
          char: 's',
          color: 'neutral',
        },
        {
          char: 't',
          color: 'neutral',
        },
        {
          char: 'a',
          color: 'neutral',
        },
        {
          char: 't',
          color: 'neutral',
        },
        {
          char: 's',
          color: 'neutral',
        },
      ],
      [
        {
          char: 'g',
          color: 'success',
        },
        {
          char: 'r',
          color: 'success',
        },
        {
          char: 'o',
          color: 'success',
        },
        {
          char: 's',
          color: 'neutral',
        },
        {
          char: 's',
          color: 'neutral',
        },
      ],
      [
        {
          char: 'g',
          color: 'success',
        },
        {
          char: 'r',
          color: 'success',
        },
        {
          char: 'o',
          color: 'success',
        },
        {
          char: 'u',
          color: 'success',
        },
        {
          char: 't',
          color: 'neutral',
        },
      ],
    ],
  },
};

export const FourLineAttempts = {
  args: {
    lines: [
      [
        {
          char: 's',
          color: 'neutral',
        },
        {
          char: 't',
          color: 'neutral',
        },
        {
          char: 'a',
          color: 'neutral',
        },
        {
          char: 't',
          color: 'neutral',
        },
        {
          char: 's',
          color: 'neutral',
        },
      ],
      [
        {
          char: 'g',
          color: 'success',
        },
        {
          char: 'r',
          color: 'success',
        },
        {
          char: 'o',
          color: 'success',
        },
        {
          char: 's',
          color: 'neutral',
        },
        {
          char: 's',
          color: 'neutral',
        },
      ],
      [
        {
          char: 'g',
          color: 'success',
        },
        {
          char: 'r',
          color: 'success',
        },
        {
          char: 'o',
          color: 'success',
        },
        {
          char: 'u',
          color: 'success',
        },
        {
          char: 't',
          color: 'neutral',
        },
      ],
      [
        {
          char: 'g',
          color: 'success',
        },
        {
          char: 'r',
          color: 'success',
        },
        {
          char: 'o',
          color: 'success',
        },
        {
          char: 'u',
          color: 'success',
        },
        {
          char: 'm',
          color: 'neutral',
        },
      ],
    ],
  },
};

export const FiveLineAttempts = {
  args: {
    lines: [
      [
        {
          char: 's',
          color: 'neutral',
        },
        {
          char: 't',
          color: 'neutral',
        },
        {
          char: 'a',
          color: 'neutral',
        },
        {
          char: 't',
          color: 'neutral',
        },
        {
          char: 's',
          color: 'neutral',
        },
      ],
      [
        {
          char: 'g',
          color: 'success',
        },
        {
          char: 'r',
          color: 'success',
        },
        {
          char: 'o',
          color: 'success',
        },
        {
          char: 's',
          color: 'neutral',
        },
        {
          char: 's',
          color: 'neutral',
        },
      ],
      [
        {
          char: 'g',
          color: 'success',
        },
        {
          char: 'r',
          color: 'success',
        },
        {
          char: 'o',
          color: 'success',
        },
        {
          char: 'u',
          color: 'success',
        },
        {
          char: 't',
          color: 'neutral',
        },
      ],
      [
        {
          char: 'g',
          color: 'success',
        },
        {
          char: 'r',
          color: 'success',
        },
        {
          char: 'o',
          color: 'success',
        },
        {
          char: 'u',
          color: 'success',
        },
        {
          char: 'm',
          color: 'neutral',
        },
      ],
      [
        {
          char: 'g',
          color: 'success',
        },
        {
          char: 'r',
          color: 'success',
        },
        {
          char: 'o',
          color: 'success',
        },
        {
          char: 'u',
          color: 'success',
        },
        {
          char: 'p',
          color: 'success',
        },
      ],
    ],
  },
};

export const EarlyReveal = {
  args: {
    lines: [
      [
        {
          char: 's',
          color: 'neutral',
        },
        {
          char: 't',
          color: 'neutral',
        },
        {
          char: 'a',
          color: 'neutral',
        },
        {
          char: 't',
          color: 'neutral',
        },
        {
          char: 's',
          color: 'neutral',
        },
      ],
      [
        {
          char: 'g',
          color: 'success',
        },
        {
          char: 'r',
          color: 'success',
        },
        {
          char: 'o',
          color: 'success',
        },
        {
          char: 's',
          color: 'neutral',
        },
        {
          char: 's',
          color: 'neutral',
        },
      ],
      [
        {
          char: 'g',
          color: 'info',
        },
        {
          char: 'r',
          color: 'info',
        },
        {
          char: 'o',
          color: 'info',
        },
        {
          char: 'u',
          color: 'info',
        },
        {
          char: 't',
          color: 'info',
        },
      ],
    ],
  },
};
