import { FC, MouseEvent } from 'react';
import {
  Typography,
  Stack,
  Tooltip,
  IconButton,
  Link,
  useTheme,
  colors,
} from '@mui/material';
import {
  Close,
  PictureAsPdfOutlined,
  FolderZipOutlined,
} from '@mui/icons-material';

export enum DocumentItemTypes {
  PDF = 'pdf',
  FILE = 'file',
}

const DOCUMENT_ICONS = {
  [DocumentItemTypes.PDF]: PictureAsPdfOutlined,
  [DocumentItemTypes.FILE]: FolderZipOutlined,
};

export type DocumentItemProps = {
  name?: string;
  size?: string;
  url?: string;
  openLabel?: string;
  deleteLabel?: string;
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: DocumentItemTypes;
};

export const DocumentItem: FC<DocumentItemProps> = props => {
  const {
    name,
    size,
    url,
    openLabel,
    deleteLabel,
    onDelete,
    type = DocumentItemTypes.FILE,
  } = props;

  const theme = useTheme();

  const Icon = DOCUMENT_ICONS[type];

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
      <Icon
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
            <Link
              href={url}
              underline="none"
              color="primary"
              target="_blank"
              rel="noreferrer"
              sx={{
                p: 0,
                m: 0,
              }}
            >
              {openLabel}
            </Link>
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
