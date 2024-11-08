import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';
import { Stack } from '@mui/material';

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Title',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    copetin: 'Copetin',
    description: 'Description',
    title: 'Title',
    variant: 'XL',
    descriptionTooltip: 'Description Tooltip',
    copetinTooltip: 'Copetin Tooltip',
  },
};

export const UnlimitedWidth: Story = {
  render: () => (
    <Stack sx={{ width: 300 }}>
      <Title
        variant="XL"
        copetin="Hoy hoy hoy hoy hoy hoy hoy hoy hoy hoy hoy"
        title="Un titulo mucho menos una linea"
        description="Mucha descripcion mucho texto pero quiero dos renglones, osea hasta aca"
      />
    </Stack>
  ),
};

export const LimitedWidth: Story = {
  render: () => (
    <Stack sx={{ width: 300 }}>
      <Title
        variant="XL"
        copetin="Hoy hoy hoy hoy hoy hoy hoy hoy hoy hoy hoy"
        title="Un titulo mucho menos una linea"
        description="Mucha descripcion mucho texto pero quiero dos renglones, osea hasta aca"
        withEllipsis
      />
    </Stack>
  ),
};
