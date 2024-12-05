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

const renderStory = (customProps: any = {}, dialogProps: any = {}) =>
  function Component() {
    const { modal, showModal, closeModal } = useModal(
      Dialog,
      {
        maxWidth: 'sm',
        ...dialogProps,
      },
      {
        title: 'Soy un título del Dialog',
        textBody:
          'Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.',
        actionInfo: 'Soy un texto de información',
        ...customProps,
        primaryButtonProps: {
          children: 'Confirm',
          onClick: () => closeModal(),
          ...customProps.primaryButtonProps,
        },
        secondaryButtonProps: {
          children: 'Cancel',
          onClick: () => closeModal(),
          ...customProps.secondaryButtonProps,
        },
      },
    );

    return (
      <Stack>
        {modal}
        <Button
          variant="primary"
          size="large"
          sx={{ width: 'fit-content' }}
          onClick={() => showModal()}
        >
          Open dialog
        </Button>
      </Stack>
    );
  };

const Body = () => (
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

export const Default: Story = {
  render: renderStory(),
};

export const WithBody: Story = {
  render: renderStory({ body: <Body />, textBody: undefined }),
};

export const ScrollTextBody: Story = {
  render: renderStory({
    textBody:
      'Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora, se perderán los datos que ingresaste y deberás completarlos nuevamente.Si sales del formulario ahora.  ahora, se perderán los datos que ingresaste y deberás compl ahora, se perderán los datos que ingresaste y deberás compl',
  }),
};

export const ControllingWidth: Story = {
  render: renderStory(undefined, {
    fullWidth: true,
    maxWidth: 'lg',
  }),
};

export const LoadingButton: Story = {
  render: renderStory({
    primaryButtonProps: {
      loading: true,
    },
  }),
};
