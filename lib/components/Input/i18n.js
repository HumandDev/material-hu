import i18next from 'i18next';
import { useTranslation as usei18nextTranslation } from 'react-i18next';
import { initializeCheck } from '../../utils/i18n';
const NAMESPACE = 'HU_INPUTS';
initializeCheck(() => {
    i18next.addResources('es', NAMESPACE, {
        SELECT: 'Seleccione...',
        SEARCH_PLACEHOLDER: 'Buscar',
        PREVIOUS: 'Anterior',
        NEXT: 'Siguiente',
        LIMIT_LABEL: '{{limit}}/página',
    });
    i18next.addResources('en', NAMESPACE, {
        SELECT: 'Select...',
        SEARCH_PLACEHOLDER: 'Search',
        PREVIOUS: 'Previous',
        NEXT: 'Next',
        LIMIT_LABEL: '{{limit}}/page',
    });
    i18next.addResources('pt', NAMESPACE, {
        SELECT: 'Selecione...',
        SEARCH_PLACEHOLDER: 'Pesquisar',
        PREVIOUS: 'Anterior',
        NEXT: 'Próximo',
        LIMIT_LABEL: '{{limit}}/página',
    });
    i18next.addResources('de', NAMESPACE, {
        SELECT: 'Wählen...',
        SEARCH_PLACEHOLDER: 'Suchen',
        PREVIOUS: 'Vorherige',
        NEXT: 'Weiter',
        LIMIT_LABEL: '{{limit}}/Seite',
    });
});
export const useTranslation = () => usei18nextTranslation(NAMESPACE);
