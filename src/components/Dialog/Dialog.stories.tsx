import type { Meta, StoryObj } from '@storybook/react';

import { Button, Stack } from '@mui/material';
import Dialog from './Dialog';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Dialog',
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const { modal, showModal, closeModal } = useModal(
      Dialog,
      {
        maxWidth: 'sm',
      },
      {
        title: 'Soy un título del Dialog',
        textBody:
          'Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.',
        actionInfo: 'Soy un texto de información',
        primaryButtonProps: {
          children: 'Confirm',
          onClick: () => closeModal(),
        },
        secondaryButtonProps: {
          children: 'Cancel',
          onClick: () => closeModal(),
        },
      },
    );

    return (
      <Stack>
        {modal}
        <Button
          color="primary"
          variant="contained"
          size="large"
          sx={{ width: 'fit-content' }}
          onClick={() => showModal()}
        >
          Open dialog
        </Button>
      </Stack>
    );
  },
};

export const Body: Story = {
  render: () => {
    const Body = (
      <Stack
        sx={{
          width: 1,
          border: '1px dashed #CAD5FE',
          backgroundColor: '#EFF2FF',
          height: '200px',
          borderRadius: '8px',
        }}
      />
    );

    const { modal, showModal, closeModal } = useModal(
      Dialog,
      {
        maxWidth: 'sm',
      },
      {
        title: 'Soy un título del Dialog',
        body: Body,
        actionInfo: 'Soy un texto de información',
        primaryButtonProps: {
          children: 'Confirm',
          onClick: () => closeModal(),
        },
        secondaryButtonProps: {
          children: 'Cancel',
          onClick: () => closeModal(),
        },
      },
    );

    return (
      <Stack>
        {modal}
        <Button
          color="primary"
          variant="contained"
          size="large"
          sx={{ width: 'fit-content' }}
          onClick={() => showModal()}
        >
          Open dialog
        </Button>
      </Stack>
    );
  },
};

export const ScrollTextBody: Story = {
  render: () => {
    const { modal, showModal, closeModal } = useModal(
      Dialog,
      {
        maxWidth: 'sm',
      },
      {
        title: 'Soy un título del Dialog',
        textBody:
          'Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora.  ahora, se perderán los datos que ingresaste y deberás compl ahora, se perderán los datos que ingresaste y deberás compl',
        actionInfo: 'Soy un texto de información',
        primaryButtonProps: {
          children: 'Confirm',
          onClick: () => closeModal(),
        },
        secondaryButtonProps: {
          children: 'Cancel',
          onClick: () => closeModal(),
        },
      },
    );

    return (
      <Stack>
        {modal}
        <Button
          color="primary"
          variant="contained"
          size="large"
          sx={{ width: 'fit-content' }}
          onClick={() => showModal()}
        >
          Open dialog
        </Button>
      </Stack>
    );
  },
};

export const ControllingWidth: Story = {
  render: () => {
    const { modal, showModal, closeModal } = useModal(
      Dialog,
      {
        fullWidth: true,
        maxWidth: 'lg',
      },
      {
        title: 'Soy un título del Dialog',
        textBody: 'Soy un texto de información',
        primaryButtonProps: {
          children: 'Confirm',
          onClick: () => closeModal(),
        },
        secondaryButtonProps: {
          children: 'Cancel',
          onClick: () => closeModal(),
        },
      },
    );

    return (
      <Stack>
        {modal}
        <Button
          color="primary"
          variant="contained"
          size="large"
          sx={{ width: 'fit-content' }}
          onClick={() => showModal()}
        >
          Open dialog
        </Button>
      </Stack>
    );
  },
};
