import {
  Popper,
  Paper,
  Link,
  Typography,
  ClickAwayListener,
  Box,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { colorPalette } from '../../theme/hugo/colors';
import { BreadcrumbLink } from './types';

type CollapsedItemsPopperProps = {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLElement | null;
  collapsedLinks: BreadcrumbLink[];
};

const CollapsedItemsPopper = ({
  id,
  open,
  anchorEl,
  collapsedLinks,
}: CollapsedItemsPopperProps) => {
  return (
    <Popper
      id={id}
      open={open}
      anchorEl={anchorEl}
    >
      <Paper
        sx={{
          mt: 1,
          maxWidth: 200,
          display: 'flex',
          flexDirection: 'column',
        }}
        elevation={2}
      >
        {collapsedLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            sx={{
              p: 1,
              ':hover': {
                backgroundColor: colorPalette.background.neutralBgSecondary,
              },
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Typography
              variant="globalS"
              fontWeight={600}
            >
              {link.title}
            </Typography>
          </Link>
        ))}
      </Paper>
    </Popper>
  );
};

type CustomCollapsedIconProps = {
  collapsedLinks: BreadcrumbLink[];
  darkBackground?: boolean;
};
export const CustomCollapsedIcon = ({
  collapsedLinks,
  darkBackground,
}: CustomCollapsedIconProps) => {
  const [popperAnchorEl, setPopperAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const theme = useTheme();

  const open = Boolean(popperAnchorEl);
  const id = open ? 'simple-popper' : undefined;

  const onClickEllipsis = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    setPopperAnchorEl(popperAnchorEl ? null : event.currentTarget);
  };
  const onClickAway = () => {
    setPopperAnchorEl(null);
  };

  return (
    <Link
      sx={{
        textDecoration: 'underline',
        // make underline white
        color: darkBackground ? theme.palette.base?.white : 'inherit',
        cursor: 'pointer',
      }}
      aria-describedby={id}
    >
      <ClickAwayListener onClickAway={onClickAway}>
        <Box sx={{ position: 'relative' }}>
          <Box onClick={onClickEllipsis}>...</Box>
          {popperAnchorEl ? (
            <CollapsedItemsPopper
              id={id}
              open={open}
              anchorEl={popperAnchorEl}
              collapsedLinks={collapsedLinks}
            />
          ) : null}
        </Box>
      </ClickAwayListener>
    </Link>
  );
};
