import { ComponentProps, FC } from 'react';
import { LinearProgress, Stack, useTheme } from '@mui/material';
import {
  IconX,
  IconCheck,
  IconFile,
  IconAlertTriangle,
  IconTrash,
  IconDownload,
} from '@tabler/icons-react';
import Title from '../Title/Title';
import Avatar from '../Avatar/Avatar';
import CardContainer, { CardContainerProps } from '../CardContainer';

export type FileCardProps = {
  status: 'uploading' | 'success' | 'error';
  name: string;
  size: number;
  format: string;
  sx?: CardContainerProps['sx'];
};

const FileCard: FC<FileCardProps> = ({ status, name, size, format, sx }) => {
  const theme = useTheme();
  let Icon = null;
  let iconColor: ComponentProps<typeof Avatar>['color'] = 'primary';
  let description = '';
  let descriptionColor = null;
  let RemoveIcon = IconTrash;
  let ExtraIcon = null;
  let backgroundColor = null;
  let borderColor = null;
  switch (status) {
    case 'success':
      Icon = IconCheck;
      description = `${size} mb • ${format}`;
      ExtraIcon = IconDownload;
      break;
    case 'uploading':
      Icon = IconFile;
      description = `${size} mb • Cargando...`;
      RemoveIcon = IconX;
      break;
    case 'error':
      Icon = IconAlertTriangle;
      iconColor = 'error';
      backgroundColor = theme.palette.hugoBackground?.errorBg;
      borderColor = theme.palette.graphics?.errorText;
      description = 'Error de carga';
      descriptionColor = theme.palette.textColors?.errorText;
      break;
  }
  return (
    <CardContainer sx={{ backgroundColor, borderColor, ...sx }}>
      <Stack
        sx={{
          flexDirection: 'row',
          gap: 1,
          alignItems: 'center',
        }}
      >
        <Avatar
          color={iconColor}
          size="medium"
          Icon={Icon}
        />
        <Title
          variant="S"
          title={name}
          description={description}
          sx={{
            flex: 1,
            '.MuiTypography-globalXS': {
              color: descriptionColor,
            },
          }}
        />
        <RemoveIcon size={24} />
        {ExtraIcon && <ExtraIcon size={24} />}
      </Stack>
      {status === 'uploading' && (
        <LinearProgress
          sx={{ mt: 2, borderRadius: 1 }}
          variant="indeterminate"
        />
      )}
    </CardContainer>
  );
};

export default FileCard;
