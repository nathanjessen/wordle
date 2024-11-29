import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Wordle/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    componentSubtitle: 'Toggle switch for dark/light theme',
  },
  argTypes: {
    isDark: {
      control: 'boolean',
      description: 'Current theme state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onToggle: {
      description: 'Callback when theme is toggled',
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
type Story = StoryObj<typeof ThemeToggle>;

// Light theme
export const Light: Story = {
  args: {
    isDark: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle in light theme state.',
      },
    },
  },
};

// Dark theme
export const Dark: Story = {
  args: {
    isDark: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Toggle in dark theme state.',
      },
    },
  },
};
