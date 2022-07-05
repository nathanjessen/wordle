import { Story, Meta } from '@storybook/react';

import { PropsWithChildren } from 'react';
import { ColorTile, IColorTile } from './ColorTile';

export default {
  title: "Wordle/ColorTile",
  component: ColorTile,
} as Meta;

const Template: Story<PropsWithChildren<IColorTile>> = (args) => <ColorTile {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Neutral = Template.bind({});
Neutral.args = {
  children: 'a',
  color: 'neutral',
};

export const Info = Template.bind({});
Info.args = {
  children: 'a',
  color: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'a',
  color: 'warning',
};

export const Success = Template.bind({});
Success.args = {
  children: 'a',
  color: 'success',
};
