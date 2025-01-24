import i18next from 'i18next';
import { useTranslation as usei18nextTranslation } from 'react-i18next';
import { initializeCheck } from '../../utils/i18n';

const NAMESPACE = 'HU_INPUTS';

initializeCheck(() => {
  i18next.addResources('es', NAMESPACE, {
    SELECT: 'Seleccione...',
    NO_RESULTS_FOUND: 'No se encontraron resultados',
    SELECT_OPTION_IN_LIST: 'Selecciona dentro de la lista',
  });

  i18next.addResources('en', NAMESPACE, {
    SELECT: 'Select...',
    NO_RESULTS_FOUND: 'No results found',
    SELECT_OPTION_IN_LIST: 'Select an option from the list',
  });

  i18next.addResources('pt', NAMESPACE, {
    SELECT: 'Selecione...',
    NO_RESULTS_FOUND: 'Nenhum resultado encontrado',
    SELECT_OPTION_IN_LIST: 'Selecione uma opção na lista',
  });

  i18next.addResources('de', NAMESPACE, {
    SELECT: 'Wählen...',
    NO_RESULTS_FOUND: 'Keine Ergebnisse gefunden',
    SELECT_OPTION_IN_LIST: 'Wähle eine Option aus der Liste',
  });
});

export const useTranslation = () => usei18nextTranslation(NAMESPACE);
