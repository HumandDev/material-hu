import { FC } from 'react';
import { Stack, Typography, Button } from '@mui/material';
import { IconUpload } from '@tabler/icons-react';
import CustomHelperText from '../Input/CustomHelperText';
import Title from '../Title/Title';
import FileCard, { FileCardProps } from '../FileCard/FileCard';
import { useTranslation } from './i18n';

export type UploaderProps = {
  helperText?: string;
  label?: string;
  uploads?: FileCardProps[];
};

const Uploader: FC<UploaderProps> = ({ helperText, label, uploads = [] }) => {
  const { t } = useTranslation();
  return (
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
      >
        <Title
          centered
          variant="S"
          title={t('TITLE')}
          description="Formatos permitidos: PDF, JPG o PNG hasta 50mb"
        />
        <Button
          variant="outlined"
          size="small"
          endIcon={<IconUpload size={16} />}
        >
          Subir archivo
        </Button>
      </Stack>
      {!!uploads?.length && (
        <CustomHelperText
          value=""
          helperText={helperText}
        />
      )}
      {uploads?.map(u => (
        <FileCard
          key={u.name}
          sx={{ width: '100%', mt: 1 }}
          {...u}
        />
      ))}
    </Stack>
  );
};

export default Uploader;
