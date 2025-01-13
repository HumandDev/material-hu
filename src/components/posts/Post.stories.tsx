import type { Meta, StoryObj } from '@storybook/react';
import Post from './Post';

const meta: Meta<typeof Post> = {
  component: Post,
  title: 'Posts/Post',
  tags: ['autodocs'],
  args: {
    fullName: 'Juane Algebra',
    text: 'Celebrando el Karaoke Pizza Party\nGracias a todos los quienes disfrutaron y participaron de esta actividad."Karaoke Pizza Party" es una dinámica empresarial que combina música y comida para fomentar el trabajo en equipo. Los participantes disfrutan compartiendo y degustando pizzas mientras cantan juntos en un ambiente relajado y divertido. Ideal para fortalecer relaciones y mejorar la comunicación.',
  },
};

export default meta;

type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {},
};
