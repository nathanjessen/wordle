import { Story, Meta } from '@storybook/react';

import { WordInput, IWordInput } from './WordInput';

export default {
  title: "Wordle/WordInput",
  component: WordInput,
} as Meta;

const Template: Story<IWordInput> = (args) => <WordInput {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const OnGuess = Template.bind({});
OnGuess.args = {
  onGuess: (val: string) => alert(val),
};
