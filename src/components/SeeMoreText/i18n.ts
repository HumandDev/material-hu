import i18next from 'i18next';
import { useTranslation as usei18nextTranslation } from 'react-i18next';
import { initializeCheck } from '../../utils/i18n';

const NAMESPACE = 'SEE_MORE_TEXT';

initializeCheck(() => {
  i18next.addResources('es', NAMESPACE, {
    SEE_MORE: 'Ver más',
    SEE_LESS: 'Ver menos',
  });

  i18next.addResources('en', NAMESPACE, {
    SEE_MORE: 'See more',
    SEE_LESS: 'See less',
  });

  i18next.addResources('pt', NAMESPACE, {
    SEE_MORE: 'Ver mais',
    SEE_LESS: 'Ver menos',
  });

  i18next.addResources('de', NAMESPACE, {
    SEE_MORE: 'Mehr sehen',
    SEE_LESS: 'Weniger sehen',
  });
});

export const useTranslation = () => usei18nextTranslation(NAMESPACE);
