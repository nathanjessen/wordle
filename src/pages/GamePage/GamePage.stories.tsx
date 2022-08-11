import { Meta, Story } from '@storybook/react';
import { GamePage } from './GamePage';

export default {
  title: 'Pages/Wordle',
  component: GamePage,
} as Meta;

const Template: Story = (args) => <GamePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
