import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button.component';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'onClick' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
