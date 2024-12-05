import type { Meta, StoryObj } from '@storybook/react';
import CardContainer from './CardContainer';
import { Typography } from '@mui/material';

const meta: Meta<typeof CardContainer> = {
  component: CardContainer,
  title: 'CardContainer',
  tags: ['autodocs'],
  args: {
    badge: {
      label: 'Badge',
      type: 'success',
      hasIcon: true,
    },
    children: (
      <Typography variant="body1">
        This is an example of content inside the CardContainer.
      </Typography>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof CardContainer>;

export const Default: Story = {
  args: {
    badge: undefined,
    children: (
      <Typography variant="body1">
        This is a default CardContainer with no badge or footer.
      </Typography>
    ),
  },
};

export const WithOnClick: Story = {
  args: {
    badge: undefined,
    children: (
      <Typography variant="body1">
        You can click me! But this is also a default CardContainer with no badge
        or footer.
      </Typography>
    ),
    onClick: () => alert('Default clicking'),
  },
};

export const WithBadge: Story = {
  args: {
    badge: {
      label: 'Info Badge',
      type: 'info',
      hasIcon: true,
    },
  },
};

export const Error: Story = {
  args: {
    badge: {
      label: 'Error Badge',
      type: 'error',
      hasIcon: true,
    },
    children: (
      <Typography variant="body1">Container with an error badge.</Typography>
    ),
  },
};

export const Success: Story = {
  args: {
    badge: {
      label: 'Success Badge',
      type: 'success',
      hasIcon: true,
    },
    children: (
      <Typography variant="body1">Container with a success badge.</Typography>
    ),
  },
};

export const Warning: Story = {
  args: {
    badge: {
      label: 'Warning Badge',
      type: 'warning',
      hasIcon: true,
    },
    children: (
      <Typography variant="body1">Container with a warning badge.</Typography>
    ),
  },
};

export const Info: Story = {
  args: {
    badge: {
      label: 'Info Badge',
      type: 'info',
      hasIcon: true,
    },
    children: (
      <Typography variant="body1">Container with an info badge.</Typography>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    badge: {
      label: 'Info Badge',
      type: 'info',
      hasIcon: true,
    },
    fullWidth: true,
    children: (
      <Typography variant="body1">Container with an info badge.</Typography>
    ),
  },
};

export const Highlight: Story = {
  args: {
    badge: {
      label: 'Highlight Badge',
      type: 'highlight',
      hasIcon: true,
    },
    children: (
      <Typography variant="body1">Container with a highlight badge.</Typography>
    ),
  },
};

export const WithFooterSingleAction: Story = {
  args: {
    badge: undefined,
    footer: {
      action1: {
        title: 'Learn More',
        onClick: () => alert('Learn More clicked'),
      },
      text: 'This is footer text.',
    },
  },
};

export const WithFooterDoubleAction: Story = {
  args: {
    badge: undefined,
    footer: {
      action1: {
        title: 'Accept',
        onClick: () => alert('Accept clicked'),
      },
      action2: {
        title: 'Decline',
        onClick: () => alert('Decline clicked'),
      },
    },
  },
};

export const WithBadgeAndFooter: Story = {
  args: {
    badge: {
      label: 'Success Badge',
      type: 'success',
      hasIcon: true,
    },
    footer: {
      action1: {
        title: 'Accept',
        onClick: () => alert('Accept clicked'),
      },
      action2: {
        title: 'Decline',
        onClick: () => alert('Decline clicked'),
      },
    },
  },
};
