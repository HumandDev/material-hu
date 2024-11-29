import { ComponentProps, FC } from 'react';
import { LinearProgress, Stack, useTheme } from '@mui/material';
import {
  IconX,
  IconCheck,
  IconFile,
  IconAlertTriangle,
  IconTrash,
  IconDownload,
  IconExchange,
} from '@tabler/icons-react';
import Title from '../Title/Title';
import Avatar from '../Avatar/Avatar';
import CardContainer, { CardContainerProps } from '../CardContainer';
import { downloadFile } from '../../utils/files';
import { bytesToSize } from '../../utils/bytes';

export type FileCardType = {
  status: 'uploading' | 'success' | 'error';
  file: File;
};

export type FileCardProps = FileCardType & {
  sx?: CardContainerProps['sx'];
  onRemove: () => void;
  onReupload: () => void;
};

const FileCard: FC<FileCardProps> = ({
  status,
  sx,
  onRemove,
  onReupload,
  file,
}) => {
  const theme = useTheme();
  let Icon = null;
  let iconColor: ComponentProps<typeof Avatar>['color'] = 'primary';
  let description = '';
  let descriptionColor = null;
  let RemoveIcon = IconTrash;
  let ReuploadIcon = null;
  let DownloadIcon = null;
  let backgroundColor = null;
  let borderColor = null;
  switch (status) {
    case 'success':
      Icon = IconCheck;
      description = `${bytesToSize(file.size)} • ${file.type}`;
      DownloadIcon = IconDownload;
      break;
    case 'uploading':
      Icon = IconFile;
      description = `${bytesToSize(file.size)} • Cargando...`;
      RemoveIcon = IconX;
      break;
    case 'error':
      Icon = IconAlertTriangle;
      ReuploadIcon = IconExchange;
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
          title={file.name}
          description={description}
          sx={{
            flex: 1,
            '.MuiTypography-globalXS': {
              color: descriptionColor,
            },
          }}
        />
        {ReuploadIcon && (
          <ReuploadIcon
            onClick={onReupload}
            size={24}
          />
        )}
        {DownloadIcon && (
          <DownloadIcon
            onClick={() => downloadFile(file)}
            size={24}
          />
        )}
        <RemoveIcon
          onClick={onRemove}
          size={24}
        />
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
