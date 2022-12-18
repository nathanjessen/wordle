import { Meta } from '@storybook/react';
import { WordInput } from './WordInput';

export default {
  title: 'Wordle/WordInput',
  component: WordInput,
} as Meta;

export const Default = {
  args: {},
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
