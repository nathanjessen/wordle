import { Meta } from '@storybook/react';
import { ColorTile } from './ColorTile';

export default {
  title: 'Wordle/ColorTile',
  component: ColorTile,
} as Meta;

export const Default = {
  args: {},
};

export const Neutral = {
  args: {
    children: 'a',
    color: 'neutral',
  },
};

export const Info = {
  args: {
    children: 'a',
    color: 'info',
  },
};

export const Warning = {
  args: {
    children: 'a',
    color: 'warning',
  },
};

export const Success = {
  args: {
    children: 'a',
    color: 'success',
  },
};
