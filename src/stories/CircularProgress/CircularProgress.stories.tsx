import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CircularProgress } from './CircularProgress.component';
import { Theme } from '../../Theme/default';

export default {
  title: 'Example/CircularProgress',
  component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: Theme.colors.primary,
  height: '50px',
  width: '50px',
};
