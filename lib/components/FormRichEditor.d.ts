import { UseControllerProps } from 'react-hook-form';
import { IAllProps } from '@tinymce/tinymce-react';
type Props = UseControllerProps & {
    editorProps?: IAllProps;
    handleBlur?: Function;
    hideModalButtons?: boolean;
    simplifyEditor?: boolean;
    disabled?: boolean;
    placeholder?: string;
    imagesUploadHandler: any;
    addVideoEditorPlugin: Function;
    tinyKey: string;
};
declare function FormRichEditor({ editorProps, handleBlur, hideModalButtons, simplifyEditor, placeholder, disabled, imagesUploadHandler, addVideoEditorPlugin, tinyKey, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default FormRichEditor;
