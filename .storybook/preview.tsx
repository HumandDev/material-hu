import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material';
import { createHuGoTheme } from '../src/theme/hugo';

const preview: Preview = {
  decorators: [
    Story => {
      const hugoTheme = createHuGoTheme('#FFA500');
      return (
        <ThemeProvider theme={hugoTheme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
