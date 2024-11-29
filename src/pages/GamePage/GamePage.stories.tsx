import type { Meta, StoryObj } from '@storybook/react';
import { GamePage } from './GamePage';

const meta: Meta<typeof GamePage> = {
  title: 'Pages/GamePage',
  component: GamePage,
  parameters: {
    componentSubtitle: 'Main game page component',
    layout: 'fullscreen',
  },
  argTypes: {
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
type Story = StoryObj<typeof GamePage>;

// Default view
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Main game page with default settings.',
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  args: {},
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Main game page in dark theme.',
      },
    },
  },
};
