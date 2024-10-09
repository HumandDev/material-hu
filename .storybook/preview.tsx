import React from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material';
import { createHuGoTheme } from '../src/theme/hugo';

i18next.use(initReactI18next).init({
  supportedLngs: ['es', 'en', 'pt', 'de'],
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

const preview: Preview = {
  decorators: [
    Story => {
      const hugoTheme = createHuGoTheme();
      return (
        <ThemeProvider theme={hugoTheme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
