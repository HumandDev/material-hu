import i18next from 'i18next';
export const initializeCheck = (init) => {
    if (!i18next.isInitialized) {
        i18next.on('initialized', init);
    }
    else {
        init();
    }
};
