import { FC } from 'react';
import {
  Stack,
  Typography,
  Button,
  FormControl,
  FormControlProps,
} from '@mui/material';
import { useDropzone, DropzoneProps } from 'react-dropzone';
import { IconUpload } from '@tabler/icons-react';
import CustomHelperText from '../Input/CustomHelperText';
import Title from '../Title/Title';
import FileCard, { FileCardProps } from '../FileCard/FileCard';
import { useTranslation } from './i18n';

export type UploaderProps = {
  helperText?: string;
  label?: string;
  value?: FileCardProps[];
  onChange: (files: FileCardProps[]) => void;
  fileSizeLimitInMB: number;
  uploadFunction: (file: File) => Promise<FileCardProps>;
  onDropAccepted?: (files: File[]) => void;
  onFilesUploaded?: (files: FileCardProps[]) => void;
  error?: boolean;
  sx?: FormControlProps['sx'];
} & Pick<DropzoneProps, 'onDropRejected'>;

const Uploader: FC<UploaderProps> = ({
  helperText,
  label,
  value = [],
  fileSizeLimitInMB = 50,
  onDropRejected,
  onDropAccepted,
  uploadFunction,
  onChange,
  error,
  sx,
}) => {
  const { t } = useTranslation();

  const handleDropAccepted = async (files: File[]) => {
    onDropAccepted?.(files);
    const fileCards = await Promise.all(files.map(uploadFunction));
    onChange(fileCards);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted: handleDropAccepted,
    onDropRejected,
    accept: {
      'image/*': ['.jpg', '.png'],
      'application/pdf': ['.pdf'],
    },
    maxFiles: 10,
    multiple: true,
    maxSize: fileSizeLimitInMB * 1024 * 1024,
  });

  return (
    <FormControl
      error={error}
      sx={sx}
    >
      <Stack>
        <Typography
          variant="globalS"
          fontWeight="fontWeightSemiBold"
          sx={{
            color: theme => theme.palette.textColors?.neutralText,
            mb: 1,
          }}
        >
          {label}
        </Typography>
        <Stack
          sx={{
            borderStyle: 'dashed',
            borderColor: theme => theme.palette.border?.neutralBorder,
            py: 3,
            alignItems: 'center',
            gap: 1,
            borderRadius: 2,
          }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <Title
            centered
            variant="S"
            title={t('TITLE')}
            description={t('ALLOWED_FORMATS', { fileSizeLimitInMB })}
          />
          <Button
            variant="outlined"
            size="small"
            endIcon={<IconUpload size={16} />}
          >
            {t('UPLOAD_FILE')}
          </Button>
        </Stack>
        {(error || !value.length) && (
          <CustomHelperText
            value=""
            helperText={helperText}
          />
        )}
        {value?.map(u => (
          <FileCard
            key={u.name}
            sx={{ width: '100%', mt: 1 }}
            {...u}
          />
        ))}
      </Stack>
    </FormControl>
  );
};

export default Uploader;
