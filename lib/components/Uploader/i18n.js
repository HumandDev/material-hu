var _a;
import i18next from 'i18next';
import { useTranslation as usei18nextTranslation } from 'react-i18next';
const NAMESPACE = 'UPLOADER';
const isInitialized = !!((_a = i18next.options.ns) === null || _a === void 0 ? void 0 : _a.length);
if (isInitialized) {
    i18next.addResources('es', NAMESPACE, {
        TITLE: 'Elija un archivo o arrástrelo aquí',
    });
    i18next.addResources('en', NAMESPACE, {
        TITLE: 'Choose a file or drag it here',
    });
    i18next.addResources('pt', NAMESPACE, {
        TITLE: 'Escolha um arquivo ou arraste-o aqui',
    });
}
export const useTranslation = () => usei18nextTranslation(NAMESPACE);
