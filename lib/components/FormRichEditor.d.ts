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
    fontsUrl: string;
};
declare function FormRichEditor({ editorProps, handleBlur, hideModalButtons, simplifyEditor, placeholder, disabled, imagesUploadHandler, addVideoEditorPlugin, fontsUrl, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default FormRichEditor;
