import { Story, Meta } from '@storybook/react';

import { WordInput, IWordInput } from './WordInput';

export default {
  title: "Wordle/WordInput",
  component: WordInput,
} as Meta;

const Template: Story<IWordInput> = (args) => <WordInput {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
