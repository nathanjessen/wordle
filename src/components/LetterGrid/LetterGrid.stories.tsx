import type { Meta, StoryObj } from '@storybook/react';
import { LetterGrid } from './LetterGrid';
import type { ILetterGrid } from './LetterGrid';

const meta: Meta<typeof LetterGrid> = {
  title: 'Wordle/LetterGrid',
  component: LetterGrid,
  parameters: {
    componentSubtitle: 'Grid display for word guesses',
    docs: {
      description: {
        component: 'A grid component that displays word guesses with color-coded feedback. Supports customizable grid dimensions and automatically fills empty rows.',
      },
    },
  },
  argTypes: {
    lines: {
      control: 'object',
      description: 'Array of lines, where each line contains letter objects with character and color',
      table: {
        type: { summary: 'Array<Array<{ char: string; color: "success" | "warning" | "neutral" }>>' },
        defaultValue: { summary: '[]' },
      },
    },
    cols: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of columns (word length)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    rows: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of rows (maximum attempts)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ILetterGrid>;

// Empty grid
export const Empty: Story = {
  args: {
    lines: [],
    cols: 5,
    rows: 6,
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty grid at game start, showing all available attempt slots.',
      },
    },
  },
};

// First guess
export const FirstGuess: Story = {
  args: {
    lines: [
      [
        { char: 'R', color: 'success' },
        { char: 'E', color: 'warning' },
        { char: 'A', color: 'neutral' },
        { char: 'C', color: 'neutral' },
        { char: 'T', color: 'warning' },
      ],
    ],
    cols: 5,
    rows: 6,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid showing first guess result with color-coded feedback.',
      },
    },
  },
};

// Multiple guesses
export const MultipleGuesses: Story = {
  args: {
    lines: [
      [
        { char: 'B', color: 'neutral' },
        { char: 'R', color: 'neutral' },
        { char: 'E', color: 'warning' },
        { char: 'A', color: 'neutral' },
        { char: 'K', color: 'neutral' },
      ],
      [
        { char: 'S', color: 'neutral' },
        { char: 'T', color: 'warning' },
        { char: 'E', color: 'warning' },
        { char: 'A', color: 'neutral' },
        { char: 'L', color: 'neutral' },
      ],
      [
        { char: 'C', color: 'neutral' },
        { char: 'R', color: 'neutral' },
        { char: 'E', color: 'success' },
        { char: 'A', color: 'success' },
        { char: 'M', color: 'neutral' },
      ],
    ],
    cols: 5,
    rows: 6,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid showing multiple guesses with varying levels of success.',
      },
    },
  },
};

// Custom size - Short word
export const ShortWord: Story = {
  args: {
    lines: [
      [
        { char: 'C', color: 'success' },
        { char: 'A', color: 'neutral' },
        { char: 'T', color: 'warning' },
      ],
    ],
    cols: 3,
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid configured for shorter words, showing adaptability to different word lengths.',
      },
    },
  },
};

// Custom size - Long word
export const LongWord: Story = {
  args: {
    lines: [
      [
        { char: 'P', color: 'success' },
        { char: 'Y', color: 'neutral' },
        { char: 'T', color: 'warning' },
        { char: 'H', color: 'neutral' },
        { char: 'O', color: 'warning' },
        { char: 'N', color: 'success' },
      ],
    ],
    cols: 6,
    rows: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid configured for longer words, demonstrating flexibility in grid dimensions.',
      },
    },
  },
};

// Winning game
export const WinningGame: Story = {
  args: {
    lines: [
      [
        { char: 'B', color: 'neutral' },
        { char: 'R', color: 'neutral' },
        { char: 'E', color: 'warning' },
        { char: 'A', color: 'neutral' },
        { char: 'K', color: 'neutral' },
      ],
      [
        { char: 'S', color: 'success' },
        { char: 'W', color: 'success' },
        { char: 'E', color: 'success' },
        { char: 'E', color: 'success' },
        { char: 'T', color: 'success' },
      ],
    ],
    cols: 5,
    rows: 6,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid showing a winning game where the word was guessed correctly.',
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  args: {
    lines: [
      [
        { char: 'N', color: 'success' },
        { char: 'I', color: 'warning' },
        { char: 'G', color: 'neutral' },
        { char: 'H', color: 'warning' },
        { char: 'T', color: 'success' },
      ],
    ],
    cols: 5,
    rows: 6,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Grid appearance in dark theme, showing color adaptability.',
      },
    },
  },
};
