import type { Meta, StoryObj } from '@storybook/react';
import { LetterGrid } from './LetterGrid';
import { TLine } from '../../typings';

const meta: Meta<typeof LetterGrid> = {
  title: 'Wordle/LetterGrid',
  component: LetterGrid,
  parameters: {
    componentSubtitle: 'Grid display for word guesses',
  },
  argTypes: {
    lines: {
      control: 'object',
      description: 'Array of word lines with color states',
      table: {
        type: { summary: 'TLine[]' },
        defaultValue: { summary: '[]' },
      },
    },
    currentLine: {
      control: { type: 'number', min: 0, max: 6 },
      description: 'Index of current active line',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    wordLength: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Length of word to guess',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    maxAttempts: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum number of attempts allowed',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '6' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LetterGrid>;

// Empty grid
export const Empty: Story = {
  args: {
    lines: [],
    currentLine: 0,
    wordLength: 5,
    maxAttempts: 6,
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty grid at game start.',
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
    currentLine: 1,
    wordLength: 5,
    maxAttempts: 6,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid showing first guess result.',
      },
    },
  },
};

// Multiple guesses
export const MultipleGuesses: Story = {
  args: {
    lines: [
      [
        { char: 'R', color: 'success' },
        { char: 'E', color: 'warning' },
        { char: 'A', color: 'neutral' },
        { char: 'C', color: 'neutral' },
        { char: 'T', color: 'warning' },
      ],
      [
        { char: 'S', color: 'neutral' },
        { char: 'T', color: 'warning' },
        { char: 'A', color: 'success' },
        { char: 'R', color: 'neutral' },
        { char: 'T', color: 'success' },
      ],
      [
        { char: 'T', color: 'success' },
        { char: 'R', color: 'success' },
        { char: 'A', color: 'success' },
        { char: 'C', color: 'success' },
        { char: 'T', color: 'success' },
      ],
    ],
    currentLine: 3,
    wordLength: 5,
    maxAttempts: 6,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with multiple guesses, including a winning guess.',
      },
    },
  },
};

// Custom word length
export const CustomLength: Story = {
  args: {
    lines: [
      [
        { char: 'W', color: 'success' },
        { char: 'O', color: 'success' },
        { char: 'R', color: 'success' },
        { char: 'D', color: 'success' },
        { char: 'L', color: 'success' },
        { char: 'E', color: 'success' },
      ],
    ],
    currentLine: 1,
    wordLength: 6,
    maxAttempts: 6,
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with custom word length of 6.',
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
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
    currentLine: 1,
    wordLength: 5,
    maxAttempts: 6,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Grid appearance in dark theme.',
      },
    },
  },
};
