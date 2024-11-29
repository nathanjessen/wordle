import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import type { ToastType } from './Toast';

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number;
  onClose: () => void;
}

const meta: Meta<typeof Toast> = {
  title: 'Wordle/Toast',
  component: Toast,
  parameters: {
    componentSubtitle: 'Toast notification component for game messages',
    docs: {
      description: {
        component: 'A toast notification component that automatically dismisses itself after a specified duration. Supports success, error, and info message types with appropriate icons.',
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Message to display in the toast',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'info'],
      description: 'Type of toast message',
      table: {
        type: { summary: "'success' | 'error' | 'info'" },
      },
    },
    duration: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Duration in milliseconds before toast auto-dismisses',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3000' },
      },
    },
    onClose: {
      description: 'Callback when toast is dismissed',
      table: {
        type: { summary: '() => void' },
      },
      action: 'onClose',
    },
  },
};

export default meta;
type Story = StoryObj<ToastProps>;

// Success toast
export const Success: Story = {
  args: {
    message: 'Great job! You won the game!',
    type: 'success',
    duration: 3000,
    onClose: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Success toast notification with checkmark icon, typically used for game completion or correct guesses.',
      },
    },
  },
};

// Error toast
export const Error: Story = {
  args: {
    message: 'Not enough letters',
    type: 'error',
    duration: 3000,
    onClose: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Error toast notification with X icon, used for invalid inputs or game rule violations.',
      },
    },
  },
};

// Info toast
export const Info: Story = {
  args: {
    message: 'Game started! Good luck!',
    type: 'info',
    duration: 3000,
    onClose: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Info toast notification with information icon, used for game status updates and hints.',
      },
    },
  },
};

// Quick toast
export const QuickDismiss: Story = {
  args: {
    message: 'This message will disappear quickly',
    type: 'info',
    duration: 1000,
    onClose: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast with shorter duration for quick feedback messages.',
      },
    },
  },
};

// Long toast
export const LongDuration: Story = {
  args: {
    message: 'This is an important message that stays longer',
    type: 'info',
    duration: 5000,
    onClose: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast with longer duration for important messages that need more reading time.',
      },
    },
  },
};

// Long message
export const LongMessage: Story = {
  args: {
    message: 'This is a very long message that demonstrates how the toast component handles multiple lines of text and ensures proper wrapping.',
    type: 'info',
    duration: 4000,
    onClose: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast with a long message to demonstrate text wrapping behavior.',
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  args: {
    message: 'Dark theme toast message',
    type: 'success',
    duration: 3000,
    onClose: () => {},
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Toast appearance in dark theme.',
      },
    },
  },
};
