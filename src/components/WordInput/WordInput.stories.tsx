import type { Meta, StoryObj } from '@storybook/react';
import { WordInput } from './WordInput';

const meta: Meta<typeof WordInput> = {
  title: 'Wordle/WordInput',
  component: WordInput,
  parameters: {
    componentSubtitle: 'Input component for word guesses',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Current input value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    maxLength: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum length of input',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      description: 'Callback when input value changes',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
    onSubmit: {
      description: 'Callback when input is submitted',
      table: {
        type: { summary: '() => void' },
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
type Story = StoryObj<typeof WordInput>;

// Empty state
export const Empty: Story = {
  args: {
    value: '',
    maxLength: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty input field ready for user input.',
      },
    },
  },
};

// Partial input
export const PartialInput: Story = {
  args: {
    value: 'RE',
    maxLength: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with partial word entered.',
      },
    },
  },
};

// Full input
export const FullInput: Story = {
  args: {
    value: 'REACT',
    maxLength: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field with complete word entered.',
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled input field state.',
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  args: {
    value: 'REACT',
    maxLength: 5,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Input field appearance in dark theme.',
      },
    },
  },
};
