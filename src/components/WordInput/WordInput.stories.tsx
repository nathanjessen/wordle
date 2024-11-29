import type { Meta, StoryObj } from '@storybook/react';
import { WordInput } from './WordInput';
import type { IWordInput } from './WordInput';

const meta: Meta<typeof WordInput> = {
  title: 'Wordle/WordInput',
  component: WordInput,
  parameters: {
    componentSubtitle: 'Input component for word guesses',
    docs: {
      description: {
        component: 'A controlled input component that handles word guesses in the Wordle game. It supports uppercase letters only, custom length limits, and provides callbacks for value changes and submissions.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Current input value (automatically converted to uppercase)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    onChange: {
      description: 'Callback when input value changes (value is already uppercase)',
      table: {
        type: { summary: '(value: string) => void' },
      },
      action: 'onChange',
    },
    onSubmit: {
      description: 'Callback when input is submitted (Enter key or button click)',
      table: {
        type: { summary: '() => void' },
      },
      action: 'onSubmit',
    },
    maxLength: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum length of input (typically 5 for standard Wordle)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled (e.g., when game is over)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<IWordInput>;

// Empty state
export const Empty: Story = {
  args: {
    value: '',
    maxLength: 5,
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty input field ready for user input. Only accepts uppercase letters.',
      },
    },
  },
};

// Partial input
export const PartialInput: Story = {
  args: {
    value: 'RE',
    maxLength: 5,
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with partial word entered. Shows how the component handles incomplete words.',
      },
    },
  },
};

// Full input
export const FullInput: Story = {
  args: {
    value: 'REACT',
    maxLength: 5,
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with complete word entered, ready for submission.',
      },
    },
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    value: 'REACT',
    maxLength: 5,
    disabled: true,
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled input field state, typically shown when the game is over or between rounds.',
      },
    },
  },
};

// Custom length - Short
export const ShortWord: Story = {
  args: {
    value: 'CAT',
    maxLength: 3,
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Input configured for shorter word length, demonstrating length customization.',
      },
    },
  },
};

// Custom length - Long
export const LongWord: Story = {
  args: {
    value: 'PYTHON',
    maxLength: 6,
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Input configured for longer word length, showing flexibility in word size.',
      },
    },
  },
};

// With error styling
export const WithError: Story = {
  args: {
    value: 'WRONG',
    maxLength: 5,
    className: 'border-2 border-red-500',
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with error styling applied, useful for indicating invalid words.',
      },
    },
  },
};

// With success styling
export const WithSuccess: Story = {
  args: {
    value: 'RIGHT',
    maxLength: 5,
    className: 'border-2 border-green-500',
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with success styling applied, useful for indicating valid words.',
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  args: {
    value: 'NIGHT',
    maxLength: 5,
    onChange: () => {},
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Input field appearance in dark theme, showing theme adaptability.',
      },
    },
  },
};
