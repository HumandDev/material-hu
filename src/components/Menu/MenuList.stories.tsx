import type { Meta, StoryObj } from '@storybook/react';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import { MenuList } from './MenuList';
import { Button } from '@mui/material';

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
  { title: 'Sin icono ni descripción' },
  { title: 'Sin icono', description: 'Descripción' },
  { title: 'Sin icono ni descripción pero muchísimo más largo' },
  {
    title: 'Sin icono pero muchísimo más largo',
    description: 'Descripción pero muchísimo más larga',
  },
  {
    Icon: IconEye,
    title: 'Disabled',
    description: 'Disabled',
    disabled: true,
  },
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

export const WithCustomButton: Story = {
  args: {
    customButton: <Button variant="secondary">Soy un boton custom!</Button>,
  },
};

export const WithDisabledCustomButton: Story = {
  args: {
    customButton: (
      <Button
        disabled
        variant="secondary"
      >
        Soy un boton custom deshabilitado :(
      </Button>
    ),
    disableMenu: true,
  },
};
