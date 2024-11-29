import type { Meta, StoryObj } from '@storybook/react';
import { WordLine } from './WordLine';
import { TLine } from '../../typings';

const meta: Meta<typeof WordLine> = {
  title: 'Wordle/WordLine',
  component: WordLine,
  parameters: {
    componentSubtitle: 'A line component that displays a word guess',
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of letter items with color states',
      table: {
        type: { summary: 'Array<{ char: string; color: TColor } | null>' },
        defaultValue: { summary: '[]' },
      },
    },
    length: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Length of the word line',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
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
    style: {
      control: 'object',
      description: 'Additional CSS styles',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '{}' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof WordLine>;

// Empty line
export const Empty: Story = {
  args: {
    items: [],
    length: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty line with default spacing.',
      },
    },
  },
};

// Partial word
export const PartialWord: Story = {
  args: {
    items: [
      { char: 'R', color: 'base' },
      { char: 'E', color: 'base' },
    ],
    length: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Line with partial word entered.',
      },
    },
  },
};

// Complete word - all correct
export const CompleteCorrect: Story = {
  args: {
    items: [
      { char: 'R', color: 'success' },
      { char: 'E', color: 'success' },
      { char: 'A', color: 'success' },
      { char: 'C', color: 'success' },
      { char: 'T', color: 'success' },
    ],
    length: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Line with all letters correct.',
      },
    },
  },
};

// Complete word - mixed results
export const CompleteMixed: Story = {
  args: {
    items: [
      { char: 'S', color: 'neutral' },
      { char: 'T', color: 'warning' },
      { char: 'A', color: 'success' },
      { char: 'R', color: 'neutral' },
      { char: 'T', color: 'success' },
    ],
    length: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Line with mixed letter results.',
      },
    },
  },
};

// Custom spacing
export const CustomSpacing: Story = {
  args: {
    items: [
      { char: 'W', color: 'success' },
      { char: 'O', color: 'success' },
      { char: 'R', color: 'success' },
      { char: 'D', color: 'success' },
    ],
    length: 4,
    className: 'gap-4',
  },
  parameters: {
    docs: {
      description: {
        story: 'Line with custom gap spacing between tiles.',
      },
    },
  },
};

// Custom size
export const CustomSize: Story = {
  args: {
    items: [
      { char: 'B', color: 'success' },
      { char: 'I', color: 'success' },
      { char: 'G', color: 'success' },
    ],
    length: 3,
    style: { transform: 'scale(1.2)' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Line with scaled-up tiles.',
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  args: {
    items: [
      { char: 'N', color: 'success' },
      { char: 'I', color: 'warning' },
      { char: 'G', color: 'neutral' },
      { char: 'H', color: 'success' },
      { char: 'T', color: 'warning' },
    ],
    length: 5,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Line appearance in dark theme.',
      },
    },
  },
};
