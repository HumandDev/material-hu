import type { Meta, StoryObj } from '@storybook/react';
import Post from './Post';

const meta: Meta<typeof Post> = {
  component: Post,
  title: 'Posts/Post',
  tags: ['autodocs'],
  args: {
    fullName: 'Juane Algebra',
    body: 'Celebrando el Karaoke Pizza Party\nGracias a todos los quienes disfrutaron y participaron de esta actividad."Karaoke Pizza Party" es una dinámica empresarial que combina música y comida para fomentar el trabajo en equipo. Los participantes disfrutan compartiendo y degustando pizzas mientras cantan juntos en un ambiente relajado y divertido. Ideal para fortalecer relaciones y mejorar la comunicación.',
    publicationDatetime: '2022-01-01T12:00:00Z',
  },
  argTypes: {
    publicationDatetime: { control: 'date' },
  },
};

export default meta;

type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {},
};
