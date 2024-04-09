import { FC, useMemo } from 'react';
import { useDropzone, ErrorCode, FileRejection } from 'react-dropzone';
import { Controller, useFormContext } from 'react-hook-form';
import {
  FormHelperText,
  Typography,
  Link,
  Stack,
  Button,
  Box,
  useTheme,
  alpha,
} from '@mui/material';
import { Upload } from '@mui/icons-material';
import DocumentItem from './DocumentItem';
import { megabytesToBytes } from '../utils/bytes';

export enum FormDropTypes {
  IMAGE = 'image',
  VIDEO = 'video',
  PDF = 'pdf',
}

const ACCEPT_BY_TYPE = {
  [FormDropTypes.IMAGE]: { 'image/png': [], 'image/jpeg': [] },
  [FormDropTypes.VIDEO]: { 'video/mp4': [] },
  [FormDropTypes.PDF]: { 'application/pdf': [] },
};

const MAX_SIZE_BY_TYPE = {
  [FormDropTypes.IMAGE]: megabytesToBytes(100),
  [FormDropTypes.VIDEO]: megabytesToBytes(150),
  [FormDropTypes.PDF]: megabytesToBytes(100),
};

const RECOMMENDED_WIDTH = 900;
const RECOMMENDED_HEIGHT = 400;

export type FormDropValue = {
  url?: string;
  file?: File;
};

export type FormDropContext = {
  maxSize: number;
  recommendedHeight: number;
  recommendedWidth: number;
  type: FormDropTypes;
  value: FormDropValue;
};

export type FormDropProps = {
  name: string;
  rules?: any;
  maxSize?: number;
  recommendedWidth?: number;
  recommendedHeight?: number;
  getErrorMessage?: (errorCode: ErrorCode, context: FormDropContext) => string;
  altLabel?: (context: FormDropContext) => string;
  deleteLabel?: (context: FormDropContext) => string;
  helpTextLabel?: (context: FormDropContext) => string;
  linkLabel?: (context: FormDropContext) => string;
  label?: (context: FormDropContext) => string;
  sizeLabel?: (context: FormDropContext) => string;
  openLabel?: (context: FormDropContext) => string;
  accept?: Record<string, string[]>;
  type?: FormDropTypes;
};

export const FormDrop: FC<FormDropProps> = props => {
  const {
    name,
    rules,
    maxSize: maxSizeProp,
    recommendedWidth = RECOMMENDED_WIDTH,
    recommendedHeight = RECOMMENDED_HEIGHT,
    getErrorMessage = () => '',
    altLabel = () => '',
    deleteLabel = () => '',
    helpTextLabel = () => '',
    linkLabel = () => '',
    sizeLabel = () => '',
    openLabel = () => '',
    label = () => '',
    accept: acceptProp,
    type = FormDropTypes.IMAGE,
  } = props;

  const theme = useTheme();

  const accept = acceptProp || ACCEPT_BY_TYPE[type];
  const maxSize = maxSizeProp || MAX_SIZE_BY_TYPE[type];

  const { control, trigger, setError, getFieldState } = useFormContext();

  const errorMessage = getFieldState(name)?.error?.message;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => {
        const dropValue = value as FormDropValue;

        const context = {
          maxSize,
          recommendedHeight,
          recommendedWidth,
          type,
          value,
        };

        const handleDrop = (files: File[]) => {
          if (!files[0]) return;

          onChange({ file: files[0], url: null });
          trigger(name);
        };

        const handleDelete = () => {
          onChange(null);
          trigger(name);
        };

        const handleError = (fileRejections: FileRejection[]) => {
          if (!fileRejections?.length && !fileRejections[0]?.errors?.length)
            return;

          setError(name, {
            type: 'custom',
            message: getErrorMessage(
              fileRejections[0].errors[0].code as ErrorCode,
              context,
            ),
          });
        };

        const { getRootProps, getInputProps, isDragActive } = useDropzone({
          onDrop: handleDrop,
          onDropRejected: handleError,
          accept,
          maxFiles: 1,
          multiple: false,
          maxSize,
        });

        const hasValue =
          (dropValue?.url?.length && dropValue.url.length > 0) ||
          !!dropValue?.file;

        const src = useMemo(() => {
          if (!dropValue) return undefined;

          const { url, file } = dropValue;

          return url || (file && URL.createObjectURL(file));
        }, [hasValue]);

        return (
          <Stack
            spacing={3}
            width="100%"
          >
            {hasValue && type !== FormDropTypes.PDF && (
              <>
                <Box
                  component={type === FormDropTypes.IMAGE ? 'img' : 'video'}
                  src={src}
                  alt={altLabel(context)}
                  controls
                  sx={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: `${recommendedWidth}/${recommendedHeight}`,
                    display: 'block',
                    objectFit: 'cover',
                    borderRadius: '20px',
                  }}
                />
                <Button
                  onClick={handleDelete}
                  sx={{ width: 'fit-content' }}
                >
                  {deleteLabel(context)}
                </Button>
              </>
            )}
            {hasValue && type === FormDropTypes.PDF && (
              <Stack
                sx={{
                  gap: 1,
                }}
              >
                <DocumentItem
                  name={value.file?.name || ''}
                  size={sizeLabel(context)}
                  url={src}
                  openLabel={openLabel(context)}
                  deleteLabel={deleteLabel(context)}
                  onDelete={handleDelete}
                />
              </Stack>
            )}
            {!hasValue && (
              <>
                <Box
                  aria-describedby="drop-picture-error-text"
                  sx={{
                    borderWidth: '1px',
                    borderRadius: '20px',
                    borderColor: theme.palette.divider,
                    borderStyle: 'dashed',
                    height: '162px',
                    width: '100%',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: isDragActive
                      ? alpha(theme.palette.action.active, 0.05)
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.action.active, 0.05),
                    },
                  }}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '64px',
                      width: '64px',
                      borderRadius: '64px',
                      backgroundColor: '#e5e7eb',
                      marginRight: theme.spacing(2),
                      '& .MuiSvgIcon-root': {
                        width: '40px',
                        height: '40px',
                        color: theme.palette.action.active,
                      },
                    }}
                  >
                    <Upload />
                  </Box>
                  <Stack spacing={1}>
                    <Typography
                      variant="h6"
                      component="span"
                    >
                      <Link color="primary">{linkLabel(context)}</Link>
                      {label(context)}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="span"
                      color="textSecondary"
                    >
                      {helpTextLabel(context)}
                    </Typography>
                  </Stack>
                </Box>
                {!!errorMessage && (
                  <FormHelperText
                    error
                    id="drop-picture-error-text"
                  >
                    {errorMessage}
                  </FormHelperText>
                )}
              </>
            )}
          </Stack>
        );
      }}
    />
  );
};
export default FormDrop;
