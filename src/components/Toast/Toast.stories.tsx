import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Wordle/Toast',
  component: Toast,
  parameters: {
    componentSubtitle: 'Toast notification component for game messages',
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Message to display in the toast',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
      description: 'Type of toast message',
      table: {
        type: { summary: "'success' | 'error' | 'info' | 'warning'" },
        defaultValue: { summary: "'info'" },
      },
    },
    duration: {
      control: { type: 'number', min: 0, max: 10000, step: 500 },
      description: 'Duration in milliseconds before toast auto-dismisses',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3000' },
      },
    },
    visible: {
      control: 'boolean',
      description: 'Whether the toast is visible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onDismiss: {
      description: 'Callback when toast is dismissed',
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
type Story = StoryObj<typeof Toast>;

// Success toast
export const Success: Story = {
  args: {
    message: 'Great job! You won the game!',
    type: 'success',
    visible: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Success toast notification for winning the game.',
      },
    },
  },
};

// Error toast
export const Error: Story = {
  args: {
    message: 'Not enough letters',
    type: 'error',
    visible: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Error toast notification for invalid input.',
      },
    },
  },
};

// Info toast
export const Info: Story = {
  args: {
    message: 'Game started! Good luck!',
    type: 'info',
    visible: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Info toast notification for game status.',
      },
    },
  },
};

// Warning toast
export const Warning: Story = {
  args: {
    message: 'Word not in dictionary',
    type: 'warning',
    visible: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning toast notification for invalid word.',
      },
    },
  },
};

// Hidden toast
export const Hidden: Story = {
  args: {
    message: 'This toast is hidden',
    type: 'info',
    visible: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hidden toast state.',
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  args: {
    message: 'Toast in dark theme',
    type: 'success',
    visible: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Toast notification appearance in dark theme.',
      },
    },
  },
};
