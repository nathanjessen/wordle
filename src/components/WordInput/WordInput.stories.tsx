import { Meta, Story } from '@storybook/react';

import { IWordInput, WordInput } from './WordInput';

export default {
  title: 'Wordle/WordInput',
  component: WordInput,
} as Meta;

const Template: Story<IWordInput> = (args) => <WordInput {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
