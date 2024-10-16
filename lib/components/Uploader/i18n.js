import i18next from 'i18next';
import { useTranslation as usei18nextTranslation } from 'react-i18next';
import { initializeCheck } from '../../utils/i18n';
const NAMESPACE = 'UPLOADER';
initializeCheck(() => {
    i18next.addResources('es', NAMESPACE, {
        TITLE: 'Elija un archivo o arrástrelo aquí',
        ALLOWED_FORMATS: 'Formatos permitidos: PDF, JPG o PNG hasta {{fileSizeLimit}}',
        UPLOAD_FILE: 'Subir archivo',
        SOME_FILE_NOT_UPLOADED: 'Alguno de tus archivos no pudo ser cargado',
    });
    i18next.addResources('en', NAMESPACE, {
        TITLE: 'Choose a file or drag it here',
        ALLOWED_FORMATS: 'Allowed formats: PDF, JPG or PNG up to {{fileSizeLimit}}',
        UPLOAD_FILE: 'Upload file',
        SOME_FILE_NOT_UPLOADED: 'Some of your files could not be uploaded',
    });
    i18next.addResources('pt', NAMESPACE, {
        TITLE: 'Escolha um arquivo ou arraste-o aqui',
        ALLOWED_FORMATS: 'Formatos permitidos: PDF, JPG ou PNG até {{fileSizeLimit}}',
        UPLOAD_FILE: 'Carregar arquivo',
        SOME_FILE_NOT_UPLOADED: 'Alguns dos seus arquivos não puderam ser carregados',
    });
    i18next.addResources('de', NAMESPACE, {
        TITLE: 'Wählen Sie eine Datei aus oder ziehen Sie sie hierher',
        ALLOWED_FORMATS: 'Zulässige Formate: PDF, JPG oder PNG bis zu {{fileSizeLimit}}',
        UPLOAD_FILE: 'Datei hochladen',
        SOME_FILE_NOT_UPLOADED: 'Einige Ihrer Dateien konnten nicht hochgeladen werden',
    });
});
export const useTranslation = () => usei18nextTranslation(NAMESPACE);
