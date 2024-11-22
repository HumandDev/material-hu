import i18next from 'i18next';
import { useTranslation as usei18nextTranslation } from 'react-i18next';
import { initializeCheck } from '../../utils/i18n';

const NAMESPACE = 'HU_INPUTS';

initializeCheck(() => {
  i18next.addResources('es', NAMESPACE, {
    SELECT: 'Seleccione...',
  });

  i18next.addResources('en', NAMESPACE, {
    SELECT: 'Select...',
  });

  i18next.addResources('pt', NAMESPACE, {
    SELECT: 'Selecione...',
  });

  i18next.addResources('de', NAMESPACE, {
    SELECT: 'Wählen...',
  });
});

export const useTranslation = () => usei18nextTranslation(NAMESPACE);
