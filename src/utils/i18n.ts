import i18next from 'i18next';

export const initializeCheck = async (init: () => void) => {
  if (!i18next.isInitialized) {
    i18next.on('initialized', init);
  } else {
    init();
  }
};
