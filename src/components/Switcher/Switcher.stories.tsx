import { Meta, StoryObj } from '@storybook/react/*';
import Switcher from './Switcher';

const meta: Meta<typeof Switcher> = {
  component: Switcher,
  title: 'Switcher',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switcher>;

const exampleTitle = 'Chocolate';
const exampleDescription = 'Toggle if you like chocolate';

export const Default: Story = {
  args: {
    title: exampleTitle,
    description: exampleDescription,
  },
};

export const Disabled: Story = {
  args: {
    title: exampleTitle,
    description: exampleDescription,
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    title: exampleTitle,
    description: exampleDescription,
    toggleProps: {
      defaultChecked: true,
    },
  },
};
