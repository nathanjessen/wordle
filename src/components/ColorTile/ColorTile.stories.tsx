import type { Meta, StoryObj } from '@storybook/react';
import { ColorTile } from './ColorTile';
import { TColor } from '../../typings';

const meta: Meta<typeof ColorTile> = {
  title: 'Wordle/ColorTile',
  component: ColorTile,
  parameters: {
    componentSubtitle: 'A tile component that displays a single character with different states',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['base', 'success', 'warning', 'info', 'neutral'],
      description: 'The color state of the tile',
      table: {
        type: { summary: 'TColor' },
        defaultValue: { summary: "'base'" },
      },
    },
    children: {
      control: 'text',
      description: 'The character to display in the tile',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
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
type Story = StoryObj<typeof ColorTile>;

// Base state - empty tile
export const Empty: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Empty tile with base styling, used for unfilled guesses.',
      },
    },
  },
};

// Base state - with character
export const Base: Story = {
  args: {
    children: 'A',
    color: 'base',
  },
  parameters: {
    docs: {
      description: {
        story: 'Base tile with a character, used for current guess input.',
      },
    },
  },
};

// Correct letter in correct position
export const Success: Story = {
  args: {
    children: 'B',
    color: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Green tile indicating a correct letter in the correct position.',
      },
    },
  },
};

// Correct letter in wrong position
export const Warning: Story = {
  args: {
    children: 'C',
    color: 'warning',
  },
  parameters: {
    docs: {
      description: {
        story: 'Yellow tile indicating a correct letter in the wrong position.',
      },
    },
  },
};

// Letter not in word
export const Neutral: Story = {
  args: {
    children: 'D',
    color: 'neutral',
  },
  parameters: {
    docs: {
      description: {
        story: 'Gray tile indicating a letter not present in the word.',
      },
    },
  },
};

// Animated tile
export const Animated: Story = {
  args: {
    children: 'E',
    color: 'success',
    className: 'animate-flip',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tile with flip animation when revealing the color.',
      },
    },
  },
};

// Custom size
export const CustomSize: Story = {
  args: {
    children: 'F',
    color: 'success',
    className: 'w-20 h-20 text-4xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tile with custom size using className.',
      },
    },
  },
};

// Custom style
export const CustomStyle: Story = {
  args: {
    children: 'G',
    color: 'success',
    style: { 
      transform: 'rotate(45deg)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Tile with custom styles applied.',
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  args: {
    children: 'H',
    color: 'base',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Tile appearance in dark theme.',
      },
    },
  },
};
