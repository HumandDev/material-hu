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
    language: string;
    fontsUrl: string;
};
declare function FormRichHU({ editorProps, handleBlur, hideModalButtons, simplifyEditor, placeholder, disabled, language, imagesUploadHandler, addVideoEditorPlugin, fontsUrl, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default FormRichHU;
