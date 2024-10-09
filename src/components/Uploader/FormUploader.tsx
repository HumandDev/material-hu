import { FC } from 'react';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import Uploader, { UploaderProps } from './Uploader';
import { useTranslation } from './i18n';

export type FormUploaderProps = {
  name: string;
  uploaderProps: Omit<UploaderProps, 'value' | 'onChange'>;
  rules?: ControllerProps['rules'];
};

const FormUploader: FC<FormUploaderProps> = ({
  name,
  uploaderProps,
  rules,
}) => {
  const form = useFormContext();
  const { t } = useTranslation();
  return (
    <Controller
      render={({ field, fieldState }) => {
        return (
          <Uploader
            {...field}
            {...uploaderProps}
            onFilesUploaded={files => {
              field.onChange([...field.value, ...files]);
              uploaderProps.onFilesUploaded?.(files);
            }}
            onDropRejected={(files, event) => {
              form.setError(name, { message: t('SOME_FILE_NOT_UPLOADED') });
              uploaderProps.onDropRejected?.(files, event);
            }}
            helperText={fieldState.error?.message || uploaderProps.helperText}
            error={!!fieldState.error}
          />
        );
      }}
      name={name}
      rules={rules}
    />
  );
};

export default FormUploader;
