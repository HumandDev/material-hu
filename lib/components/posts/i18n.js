import i18next from 'i18next';
import { useTranslation as usei18nextTranslation } from 'react-i18next';
import { initializeCheck } from '../../utils/i18n';
const NAMESPACE = 'POSTS';
initializeCheck(() => {
    i18next.addResources('es', NAMESPACE, {
        PUBLISH: 'Publicar',
        WRITE_SOMETHING: 'Escribe algo...',
        TIME_DISTANCE: 'Hace {{distance}}',
        EDIT: 'Editar',
        DELETE: 'Eliminar',
    });
    i18next.addResources('en', NAMESPACE, {
        PUBLISH: 'Publish',
        WRITE_SOMETHING: 'Write something...',
        TIME_DISTANCE: '{{distance}} ago',
        EDIT: 'Edit',
        DELETE: 'Delete',
    });
    i18next.addResources('pt', NAMESPACE, {
        PUBLISH: 'Publicar',
        WRITE_SOMETHING: 'Escreva algo...',
        TIME_DISTANCE: 'Há {{distance}}',
        EDIT: 'Editar',
        DELETE: 'Excluir',
    });
    i18next.addResources('de', NAMESPACE, {
        PUBLISH: 'Veröffentlichen',
        WRITE_SOMETHING: 'Schreibe etwas...',
        TIME_DISTANCE: 'Vor {{distance}}',
        EDIT: 'Bearbeiten',
        DELETE: 'Löschen',
    });
});
export const useTranslation = () => usei18nextTranslation(NAMESPACE);
