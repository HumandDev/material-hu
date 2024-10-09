import i18next from 'i18next';
import { useTranslation as usei18nextTranslation } from 'react-i18next';
import { initializeCheck } from '../../utils/i18n';

const NAMESPACE = 'UPLOADER';

initializeCheck(() => {
  i18next.addResources('es', NAMESPACE, {
    TITLE: 'Elija un archivo o arrástrelo aquí',
    ALLOWED_FORMATS:
      'Formatos permitidos: PDF, JPG o PNG hasta {{fileSizeLimitInMB}} MB',
    UPLOAD_FILE: 'Subir archivo',
  });

  i18next.addResources('en', NAMESPACE, {
    TITLE: 'Choose a file or drag it here',
    ALLOWED_FORMATS:
      'Allowed formats: PDF, JPG or PNG up to {{fileSizeLimitInMB}} MB',
    UPLOAD_FILE: 'Upload file',
  });

  i18next.addResources('pt', NAMESPACE, {
    TITLE: 'Escolha um arquivo ou arraste-o aqui',
    ALLOWED_FORMATS:
      'Formatos permitidos: PDF, JPG ou PNG até {{fileSizeLimitInMB}} MB',
    UPLOAD_FILE: 'Carregar arquivo',
  });

  i18next.addResources('de', NAMESPACE, {
    TITLE: 'Wählen Sie eine Datei aus oder ziehen Sie sie hierher',
    ALLOWED_FORMATS:
      'Zulässige Formate: PDF, JPG oder PNG bis zu {{fileSizeLimitInMB}} MB',
    UPLOAD_FILE: 'Datei hochladen',
  });
});

export const useTranslation = () => usei18nextTranslation(NAMESPACE);
