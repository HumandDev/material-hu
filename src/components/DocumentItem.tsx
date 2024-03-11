import { FC, MouseEvent } from 'react';
import {
  Typography,
  Stack,
  Tooltip,
  IconButton,
  Button,
  useTheme,
  colors,
} from '@mui/material';
import { Close, PictureAsPdfOutlined } from '@mui/icons-material';
import { openFile } from '../utils/files';

export type DocumentItemProps = {
  name?: string;
  size?: string;
  url?: string;
  openLabel?: string;
  deleteLabel?: string;
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const DocumentItem: FC<DocumentItemProps> = props => {
  const { name, size, url, openLabel, deleteLabel, onDelete } = props;

  const theme = useTheme();

  const handleOpen = async () => {
    if (!url) return;

    const blob = await fetch(url).then(r => r.blob());
    openFile(blob);
  };

  return (
    <Stack
      sx={{
        gap: 2,
        flexDirection: 'row',
        aligItems: 'center',
        py: 1.5,
        px: 2,
        borderRadius: theme.spacing(1),
        backgroundColor: colors.grey[100],
      }}
    >
      <PictureAsPdfOutlined
        color="primary"
        sx={{
          width: theme.spacing(5),
          height: theme.spacing(5),
        }}
      />
      <Stack
        sx={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        {!!name && (
          <Stack>
            <Typography variant="subtitle2">{name}</Typography>
          </Stack>
        )}
        <Stack
          component={Typography}
          variant="body2"
          sx={{
            gap: 0.5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {!!size && <span>{size}</span>}
          {!!size && !!url && <span>{'•'}</span>}
          {!!url && (
            <Button
              onClick={handleOpen}
              color="primary"
              variant="text"
              size="small"
              sx={{
                p: 0,
                m: 0,
              }}
            >
              {openLabel}
            </Button>
          )}
        </Stack>
      </Stack>
      {onDelete && deleteLabel && (
        <Tooltip title={deleteLabel}>
          <IconButton
            onClick={onDelete}
            aria-label={deleteLabel}
          >
            <Close fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </Stack>
  );
};

export default DocumentItem;
