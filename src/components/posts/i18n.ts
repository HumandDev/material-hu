import i18next from 'i18next';
import { useTranslation as usei18nextTranslation } from 'react-i18next';
import { initializeCheck } from '../../utils/i18n';

const NAMESPACE = 'POSTS';

initializeCheck(() => {
  i18next.addResources('es', NAMESPACE, {
    PUBLISH: 'Publicar',
    WRITE_SOMETHING: 'Escribe algo...',
  });

  i18next.addResources('en', NAMESPACE, {
    PUBLISH: 'Publish',
    WRITE_SOMETHING: 'Write something...',
  });

  i18next.addResources('pt', NAMESPACE, {
    PUBLISH: 'Publicar',
    WRITE_SOMETHING: 'Escreva algo...',
  });

  i18next.addResources('de', NAMESPACE, {
    PUBLISH: 'Veröffentlichen',
    WRITE_SOMETHING: 'Schreibe etwas...',
  });
});

export const useTranslation = () => usei18nextTranslation(NAMESPACE);
