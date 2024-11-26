import { ReactNode } from 'react';
import {
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import {
  default as Button,
  type LoadingButtonProps as ButtonProps,
} from '@mui/lab/LoadingButton';
import { IconX, IconInfoCircle } from '@tabler/icons-react';
import { colorPalette } from '../../theme/hugo/colors';

type Props = {
  title?: string;
  body?: ReactNode;
  actionInfo?: string;
  textBody?: string;
  primaryButtonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
  onClose: () => void;
};

const Dialog = ({
  title,
  onClose,
  body,
  textBody,
  primaryButtonProps,
  secondaryButtonProps,
  actionInfo,
}: Props) => {
  const hasFooter = primaryButtonProps || secondaryButtonProps || actionInfo;

  return (
    <Stack sx={{ maxHeight: '600px' }}>
      <Stack
        sx={{
          alignItems: 'center',
          flexDirection: 'row',
          gap: '8px',
          justifyContent: title ? 'space-between' : 'flex-end',
          p: 3,
        }}
      >
        {title && (
          <Typography
            variant="globalS"
            fontWeight="fontWeightSemiBold"
          >
            {title}
          </Typography>
        )}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ p: 0 }}
        >
          <IconX color={colorPalette.textColors.neutralText} />
        </IconButton>
      </Stack>
      <DialogContent
        sx={{ px: 3, py: 2, maxHeight: '400px', overflowY: 'auto' }}
      >
        {textBody && <Typography variant={'globalS'}>{textBody}</Typography>}
        {body}
      </DialogContent>
      {hasFooter && (
        <DialogActions
          sx={{
            p: 3,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: actionInfo ? 'space-between' : 'flex-end',
            borderTop: `1px solid ${colorPalette.border.neutralBorder}`,
          }}
        >
          {actionInfo && (
            <Stack
              sx={{ flexDirection: 'row', gap: '4px', alignItems: 'center' }}
            >
              <IconInfoCircle
                size={16}
                color={colorPalette.textColors.neutralTextLighter}
              />
              <Typography
                variant="globalXS"
                sx={{ color: colorPalette.textColors.neutralTextLighter }}
              >
                {actionInfo}
              </Typography>
            </Stack>
          )}
          <Stack sx={{ flexDirection: 'row', gap: '8px' }}>
            {secondaryButtonProps && (
              <Button
                variant="tertiary"
                size="small"
                {...secondaryButtonProps}
              />
            )}
            {primaryButtonProps && (
              <Button
                size="small"
                variant="primary"
                {...primaryButtonProps}
              />
            )}
          </Stack>
        </DialogActions>
      )}
    </Stack>
  );
};

export default Dialog;
