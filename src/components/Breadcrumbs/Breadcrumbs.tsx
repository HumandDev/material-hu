import {
  Box,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Typography,
  useTheme,
} from '@mui/material';
import { useMemo } from 'react';
import { CustomCollapsedIcon } from './CustomCollapsedIcon';
import { BreadcrumbLink } from './types';
import React from 'react';

type LinkBoxProps = {
  children: React.ReactNode;
  darkBackground?: boolean;
  breadcrumbIcon?: BreadcrumbLink['icon'];
};
const LinkBox = ({
  children,
  darkBackground,
  breadcrumbIcon,
}: LinkBoxProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
      {/* Creating the icon component here allows us to pass properties more easily if needed */}
      {breadcrumbIcon
        ? React.createElement(breadcrumbIcon, {
            sx: {
              ml: 0.25,
              width: 16,
              height: 16,
              color: darkBackground
                ? theme.palette.base?.white
                : theme.palette.base?.blueBrand[400],
            },
          })
        : null}
    </Box>
  );
};

type Props = {
  links: BreadcrumbLink[];
  darkBackground?: boolean;
};

const BreadCrumbs = ({ links, darkBackground }: Props) => {
  const theme = useTheme();
  const collapsedLinks = useMemo(() => links.slice(1, -2), [links]);

  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      sx={{
        '& .MuiLink-root': {
          textDecoration: 'underline',
          cursor: 'pointer',
        },
        '& .MuiButtonBase-root': {
          '&, &:hover': {
            backgroundColor: 'transparent',
          },
        },
        '& .MuiBreadcrumbs-separator': {
          mx: 0.5,
          color: darkBackground ? theme.palette.base?.white : 'inherit',
        },
      }}
      maxItems={4}
      itemsAfterCollapse={2}
      separator={
        <Typography
          variant="globalS"
          mx={0.5}
        >
          /
        </Typography>
      }
      slots={{ CollapsedIcon: CustomCollapsedIcon }}
      // @ts-ignore - Mui does not recognize the CustomCollapsedIcon props
      slotProps={{ collapsedIcon: { collapsedLinks, darkBackground } }}
    >
      {links.map((link, index) => (
        <LinkBox
          key={index}
          breadcrumbIcon={link.icon}
          darkBackground={darkBackground}
        >
          {index < links.length - 1 ? (
            <Link
              color={
                darkBackground ? theme.palette.base?.white : 'primary.main'
              }
              href={link.href}
            >
              {link.title}
            </Link>
          ) : (
            <Typography
              variant="globalS"
              color={
                darkBackground
                  ? theme.palette.base?.white
                  : theme.palette.base?.grey[800]
              }
            >
              {link.title}
            </Typography>
          )}
        </LinkBox>
      ))}
    </MuiBreadcrumbs>
  );
};

export default BreadCrumbs;
