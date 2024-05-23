import { UseControllerProps } from 'react-hook-form';
import { IAllProps } from '@tinymce/tinymce-react';
import { Editor as EditorType } from 'tinymce';
type Props = UseControllerProps & {
    editorProps?: IAllProps;
    onEditorChange?: (value: string, editor: EditorType) => string;
    onInit?: (event: any, editor: EditorType) => void;
    handleBlur?: Function;
    hideModalButtons?: boolean;
    simplifyEditor?: boolean;
    disabled?: boolean;
    placeholder?: string;
    imagesUploadHandler: any;
    addVideoEditorPlugin: Function;
    tinyKey: string;
    fontsURL: string;
};
declare function FormRichEditor({ editorProps, onEditorChange, onInit, handleBlur, hideModalButtons, simplifyEditor, placeholder, disabled, imagesUploadHandler, addVideoEditorPlugin, tinyKey, fontsURL, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export default FormRichEditor;
