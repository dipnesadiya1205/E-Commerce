import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ItemCard } from './Cards.component';

export default {
  title: 'Example/Cards',
  component: ItemCard,
} as ComponentMeta<typeof ItemCard>;

const Template: ComponentStory<typeof ItemCard> = (args) => (
  <ItemCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  height: '400px',
  width: '345px',
  image: 'https://via.placeholder.com/600/28fa51',
  heading: 'Heading',
  content: 'Write here content of card',
};
