import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import Uploader from './Uploader';
import { useTranslation } from './i18n';
const FormUploader = ({ name, uploaderProps, rules, }) => {
    const form = useFormContext();
    const { t } = useTranslation();
    return (_jsx(Controller, { render: ({ field, fieldState }) => {
            var _a;
            return (_jsx(Uploader, Object.assign({}, field, uploaderProps, { onFilesUploaded: files => {
                    var _a;
                    field.onChange([...field.value, ...files]);
                    (_a = uploaderProps.onFilesUploaded) === null || _a === void 0 ? void 0 : _a.call(uploaderProps, files);
                }, onDropRejected: (files, event) => {
                    var _a;
                    form.setError(name, { message: t('SOME_FILE_NOT_UPLOADED') });
                    (_a = uploaderProps.onDropRejected) === null || _a === void 0 ? void 0 : _a.call(uploaderProps, files, event);
                }, helperText: ((_a = fieldState.error) === null || _a === void 0 ? void 0 : _a.message) || uploaderProps.helperText, error: !!fieldState.error })));
        }, name: name, rules: rules }));
};
export default FormUploader;
