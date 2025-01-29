import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Drawer from './Drawer';
import { Typography, Stack, Button } from '@mui/material';
import { useSidesheet } from '../../hooks/useSidesheet';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Drawer',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    title: 'Soy un título del Drawer',
    size: 'medium',
    disableEscapeKeyDown: false,
    primaryButtonProps: {
      children: 'Primary Action',
    },
    secondaryButtonProps: {
      children: 'Secondary Action',
    },
    hasBackButton: false,
  },
  render: props => {
    const {
      title,
      size,
      primaryButtonProps,
      secondaryButtonProps,
      disableEscapeKeyDown,
      hasBackButton,
    } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);

    return (
      <div>
        <Button
          size="small"
          variant="primary"
          onClick={() => setIsOpen(true)}
        >
          Open
        </Button>
        <Drawer
          title={title}
          size={size}
          open={isOpen}
          onClose={onClose}
          primaryButtonProps={primaryButtonProps}
          secondaryButtonProps={secondaryButtonProps}
          disableEscapeKeyDown={disableEscapeKeyDown}
          hasBackButton={hasBackButton}
        >
          <Typography>
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus.
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus.
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus.
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus.
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus.
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus.
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus.
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus.
            Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi. Turpis
            eu ut egestas pharetra bibendum nunc enim velit lectus. Vitae risus
            sed pharetra dui gravida. Proin tellus condimentum varius tempus
          </Typography>
        </Drawer>
      </div>
    );
  },
};

export const Sidesheet: Story = {
  args: {
    title: 'Soy un título del Drawer',
  },
  render: props => {
    const { title } = props;
    const [color, setColor] = useState('green');

    const handleClose = () => {
      setColor('green');
    };

    const { showDrawer, drawer, containerStyles } = useSidesheet(
      () => <Typography>{title}</Typography>,
      {
        title: 'Agregar componente',
        whenClose: handleClose,
      },
      {},
    );

    return (
      <Stack sx={containerStyles}>
        {drawer}
        <Button
          variant="primary"
          size="large"
          sx={{ width: 'fit-content', backgroundColor: color }}
          onClick={() => {
            setColor('blue');
            showDrawer();
          }}
        >
          Open dialog
        </Button>
      </Stack>
    );
  },
};

export const DrawerWithExtraFooter: Story = {
  args: {
    title: 'Drawer Title',
    size: 'medium',
    primaryButtonProps: {
      children: 'Primary Action',
    },
    secondaryButtonProps: {
      children: 'Secondary Action',
    },
  },
  render: props => {
    const { title, size, primaryButtonProps, secondaryButtonProps } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);

    return (
      <div>
        <Button
          size="small"
          variant="primary"
          onClick={() => setIsOpen(true)}
        >
          Open
        </Button>
        <Drawer
          title={title}
          size={size}
          open={isOpen}
          onClose={onClose}
          primaryButtonProps={primaryButtonProps}
          secondaryButtonProps={secondaryButtonProps}
          footer={
            <Stack sx={{ alignItems: 'center', gap: 2 }}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              </Typography>
              <Button
                size="large"
                variant="primary"
              >
                Extra Footer Button
              </Button>
            </Stack>
          }
        >
          <Stack>
            <Typography>
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              bibendum nunc enim velit lectus. Vitae risus sed pharetra dui
              gravida. Proin tellus condimentum varius tempus vulputate risus.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              bibendum nunc enim velit lectus. Vitae risus sed pharetra dui
              gravida. Proin tellus condimentum varius tempus vulputate risus.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              bibendum nunc enim velit lectus. Vitae risus sed pharetra dui
              gravida. Proin tellus condimentum varius tempus vulputate risus.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              bibendum nunc enim velit lectus.
            </Typography>
          </Stack>
        </Drawer>
      </div>
    );
  },
};

export const DrawerWithDoubleLayout: Story = {
  args: {
    title: 'Drawer Title',
    size: 'large',
    primaryButtonProps: {
      children: 'Primary Action',
    },
    secondaryButtonProps: {
      children: 'Secondary Action',
    },
  },
  render: props => {
    const { title, size, primaryButtonProps, secondaryButtonProps } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);

    return (
      <div>
        <Button
          size="small"
          variant="primary"
          onClick={() => setIsOpen(true)}
        >
          Open
        </Button>
        <Drawer
          title={title}
          size={size}
          open={isOpen}
          onClose={onClose}
          primaryButtonProps={primaryButtonProps}
          secondaryButtonProps={secondaryButtonProps}
          primaryContent={
            <Typography>
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              bibendum nunc enim velit lectus. Vitae risus sed pharetra dui
              gravida. Proin tellus condimentum varius tempus vulputate risus.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              bibendum nunc enim velit lectus. Vitae risus sed pharetra dui
              gravida. Proin tellus condimentum varius tempus vulputate risus.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              bibendum nunc enim velit lectus. Vitae risus sed pharetra dui
              gravida. Proin tellus condimentum varius tempus vulputate risus.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              bibendum nunc enim velit lectus. Vitae risus sed pharetra dui
              gravida. Proin tellus condimentum varius tempus vulputate risus.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
            </Typography>
          }
          secondaryContent={
            <Typography>
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
            </Typography>
          }
        />
      </div>
    );
  },
};

export const DrawerWithDoubleLayoutAndExtraFooter: Story = {
  args: {
    title: 'Drawer Title',
    size: 'large',
    primaryButtonProps: {
      children: 'Primary Action',
    },
    secondaryButtonProps: {
      children: 'Secondary Action',
    },
  },
  render: props => {
    const { title, size, primaryButtonProps, secondaryButtonProps } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);

    return (
      <div>
        <Button
          size="small"
          variant="primary"
          onClick={() => setIsOpen(true)}
        >
          Open
        </Button>
        <Drawer
          title={title}
          size={size}
          open={isOpen}
          onClose={onClose}
          primaryButtonProps={primaryButtonProps}
          secondaryButtonProps={secondaryButtonProps}
          primaryContent={
            <Typography>
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              bibendum nunc enim velit lectus. Vitae risus sed pharetra dui
              gravida. Proin tellus condimentum varius tempus vulputate risus.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              bibendum nunc enim velit lectus. Vitae risus sed pharetra dui
              gravida. Proin tellus condimentum varius tempus vulputate risus.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              bibendum nunc enim velit lectus. Vitae risus sed pharetra dui
              gravida. Proin tellus condimentum varius tempus vulputate risus.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              bibendum nunc enim velit lectus. Vitae risus sed pharetra dui
              gravida. Proin tellus condimentum varius tempus vulputate risus.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
            </Typography>
          }
          secondaryContent={
            <Typography>
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra.
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
              Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              Turpis eu ut egestas pharetra bibendum nunc enim velit lectus.
              Vitae risus sed pharetra dui gravida. Proin tellus condimentum
              varius tempus vulputate risus. Lorem ipsum dolor sit amet
              consectetur. In sed ut elit nisi. Turpis eu ut egestas pharetra
            </Typography>
          }
          footer={
            <Stack sx={{ alignItems: 'center', gap: 2 }}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur. In sed ut elit nisi.
              </Typography>
              <Button
                size="large"
                variant="primary"
              >
                Extra Footer Button
              </Button>
            </Stack>
          }
        />
      </div>
    );
  },
};
