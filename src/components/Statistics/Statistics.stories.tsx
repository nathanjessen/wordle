import type { Meta, StoryObj } from '@storybook/react';
import { Statistics } from './Statistics';

const withLocalStorage = (Story: any, context: any) => {
  const stats = {
    gamesPlayed: context.args.gamesPlayed,
    gamesWon: context.args.gamesWon,
    currentStreak: context.args.currentStreak,
    maxStreak: context.args.maxStreak,
    guessDistribution: Object.entries(context.args.distribution).map(([key, value]) => value),
  };

  localStorage.setItem('gameStats', JSON.stringify(stats));
  return <Story {...context.args} />;
};

const meta: Meta<typeof Statistics> = {
  title: 'Wordle/Statistics',
  component: Statistics,
  parameters: {
    componentSubtitle: 'Statistics panel showing game performance',
  },
  decorators: [withLocalStorage],
  argTypes: {
    gamesPlayed: {
      control: { type: 'number', min: 0, max: 1000, step: 1 },
      description: 'Total number of games played',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    gamesWon: {
      control: { type: 'number', min: 0, max: 1000, step: 1 },
      description: 'Total number of games won',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    currentStreak: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Current winning streak',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    maxStreak: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Longest winning streak',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    distribution: {
      control: 'object',
      description: 'Distribution of guesses for won games',
      table: {
        type: { summary: 'Record<number, number>' },
        defaultValue: { summary: '{}' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Statistics>;

// New player
export const NewPlayer: Story = {
  args: {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    distribution: {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics display for a new player with no games played.',
      },
    },
  },
};

// First win
export const FirstWin: Story = {
  args: {
    gamesPlayed: 1,
    gamesWon: 1,
    currentStreak: 1,
    maxStreak: 1,
    distribution: {
      4: 1,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics after winning the first game in 4 guesses.',
      },
    },
  },
};

// Beginner player
export const BeginnerPlayer: Story = {
  args: {
    gamesPlayed: 10,
    gamesWon: 6,
    currentStreak: 2,
    maxStreak: 2,
    distribution: {
      3: 1,
      4: 2,
      5: 2,
      6: 1,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics for a beginner player with a 60% win rate.',
      },
    },
  },
};

// Casual player
export const CasualPlayer: Story = {
  args: {
    gamesPlayed: 50,
    gamesWon: 45,
    currentStreak: 12,
    maxStreak: 15,
    distribution: {
      1: 5,
      2: 10,
      3: 15,
      4: 8,
      5: 5,
      6: 2,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics for a casual player with a 90% win rate.',
      },
    },
  },
};

// Expert player
export const ExpertPlayer: Story = {
  args: {
    gamesPlayed: 200,
    gamesWon: 195,
    currentStreak: 50,
    maxStreak: 75,
    distribution: {
      1: 25,
      2: 55,
      3: 65,
      4: 35,
      5: 10,
      6: 5,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics for an expert player with a 97.5% win rate and high efficiency.',
      },
    },
  },
};

// Perfect player
export const PerfectPlayer: Story = {
  args: {
    gamesPlayed: 100,
    gamesWon: 100,
    currentStreak: 100,
    maxStreak: 100,
    distribution: {
      1: 20,
      2: 30,
      3: 25,
      4: 15,
      5: 8,
      6: 2,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics for a perfect player who has won every game.',
      },
    },
  },
};

// Lost streak
export const LostStreak: Story = {
  args: {
    gamesPlayed: 75,
    gamesWon: 60,
    currentStreak: 0,
    maxStreak: 20,
    distribution: {
      2: 15,
      3: 20,
      4: 15,
      5: 7,
      6: 3,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics for a player who just lost their winning streak.',
      },
    },
  },
};

// Struggling player
export const StrugglingPlayer: Story = {
  args: {
    gamesPlayed: 30,
    gamesWon: 10,
    currentStreak: 1,
    maxStreak: 2,
    distribution: {
      4: 2,
      5: 3,
      6: 5,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Statistics for a player with a 33% win rate, mostly winning in later guesses.',
      },
    },
  },
};

// Dark theme
export const DarkTheme: Story = {
  args: {
    gamesPlayed: 50,
    gamesWon: 45,
    currentStreak: 12,
    maxStreak: 15,
    distribution: {
      1: 5,
      2: 10,
      3: 15,
      4: 8,
      5: 5,
      6: 2,
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'Statistics display in dark theme.',
      },
    },
  },
};
