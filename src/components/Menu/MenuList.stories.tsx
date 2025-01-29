import type { Meta, StoryObj } from '@storybook/react';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import { MenuList } from './MenuList';

const defaultOptions = [
  {
    Icon: IconEdit,
    title: 'Editar',
  },
  {
    Icon: IconTrash,
    title: 'Eliminar',
  },
  { Icon: IconEye, title: 'Ver detalle', description: 'Descripción' },
  { title: 'Sin ícono ni descripción' },
  { title: 'Sin ícono', description: 'Descripción' },
].map(o => ({ ...o, onClick: () => alert(o.title) }));

const meta: Meta<typeof MenuList> = {
  component: MenuList,
  title: 'MenuList',
  tags: ['autodocs'],
  args: {
    options: defaultOptions,
  },
};

export default meta;

type Story = StoryObj<typeof MenuList>;

export const Default: Story = {
  args: {},
};
