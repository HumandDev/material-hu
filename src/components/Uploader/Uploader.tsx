import {
  Button,
  FormControl,
  FormControlProps,
  Stack,
  Typography,
} from '@mui/material';
import { IconUpload } from '@tabler/icons-react';
import _ from 'lodash';
import { FC } from 'react';
import { DropzoneProps, useDropzone } from 'react-dropzone';
import { bytesToSize, megabytesToBytes } from '../../utils/bytes';
import FileCard, { FileCardType } from '../FileCard/FileCard';
import CustomHelperText from '../Input/CustomHelperText';
import Title from '../Title/Title';
import { useTranslation } from './i18n';

export type UploaderProps = {
  helperText?: string;
  label?: string;
  value?: FileCardType[];
  onChange: (files: FileCardType[]) => void;
  fileSizeLimit?: number;
  uploadFunction: (file: File) => Promise<FileCardType>;
  onDropAccepted?: (files: File[]) => void;
  onFilesUploaded?: (files: FileCardType[]) => void;
  error?: boolean;
  sx?: FormControlProps['sx'];
} & Pick<DropzoneProps, 'onDropRejected'>;

const Uploader: FC<UploaderProps> = ({
  helperText,
  label,
  value = [],
  fileSizeLimit = megabytesToBytes(50),
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
    maxSize: fileSizeLimit,
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
            description={t('ALLOWED_FORMATS', {
              fileSizeLimit: bytesToSize(fileSizeLimit),
            })}
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
            key={u.file.name}
            sx={{ width: '100%', mt: 1 }}
            onRemove={() => onChange(_.without(value, u))}
            onReupload={() => handleDropAccepted([u.file])}
            {...u}
          />
        ))}
      </Stack>
    </FormControl>
  );
};

export default Uploader;
