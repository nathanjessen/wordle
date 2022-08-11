import { Meta, Story } from '@storybook/react';
import { IWordLine, WordLine } from './WordLine';

export default {
  title: 'Wordle/WordLine',
  component: WordLine,
} as Meta;

const Template: Story<IWordLine> = (args) => <WordLine {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const SingleItem = Template.bind({});
SingleItem.args = {
  items: [
    {
      char: 'a',
      color: 'success',
    },
  ],
};

export const ItemAndNulls = Template.bind({});
ItemAndNulls.args = {
  items: [
    {
      char: 'a',
      color: 'base',
    },
    null,
    null,
    null,
    null,
  ],
};

export const FullWord = Template.bind({});
FullWord.args = {
  items: [
    {
      char: 't',
      color: 'base',
    },
    {
      char: 'e',
      color: 'base',
    },
    {
      char: 'n',
      color: 'base',
    },
    {
      char: 't',
      color: 'base',
    },
    {
      char: 's',
      color: 'base',
    },
  ],
};

export const ValidatedWord = Template.bind({});
ValidatedWord.args = {
  items: [
    {
      char: 't',
      color: 'success',
    },
    {
      char: 'e',
      color: 'neutral',
    },
    {
      char: 'n',
      color: 'neutral',
    },
    {
      char: 't',
      color: 'warning',
    },
    {
      char: 's',
      color: 'warning',
    },
  ],
};

export const CorrectWord = Template.bind({});
CorrectWord.args = {
  items: [
    {
      char: 't',
      color: 'success',
    },
    {
      char: 'r',
      color: 'success',
    },
    {
      char: 'u',
      color: 'success',
    },
    {
      char: 's',
      color: 'success',
    },
    {
      char: 't',
      color: 'success',
    },
  ],
};

export const SolutionRevealed = Template.bind({});
SolutionRevealed.args = {
  items: [
    {
      char: 't',
      color: 'info',
    },
    {
      char: 'r',
      color: 'info',
    },
    {
      char: 'u',
      color: 'info',
    },
    {
      char: 's',
      color: 'info',
    },
    {
      char: 't',
      color: 'info',
    },
  ],
};
