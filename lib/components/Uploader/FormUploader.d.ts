import { FC } from 'react';
import { ControllerProps } from 'react-hook-form';
import { UploaderProps } from './Uploader';
export type FormUploaderProps = {
    name: string;
    uploaderProps: Omit<UploaderProps, 'value' | 'onChange'>;
    rules?: ControllerProps['rules'];
};
declare const FormUploader: FC<FormUploaderProps>;
export default FormUploader;
