import {
  BreadcrumbsProps,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
} from '@mui/material';

const CustomCollapsedIcon = () => {
  return (
    <Link
      sx={{
        backgroundColor: 'inherit',
        textDecoration: 'underline',
        cursor: 'pointer',
      }}
      onClick={e => {
        e.stopPropagation();
        alert('hola vic');
      }}
    >
      ...
    </Link>
  );
};

type Props = Pick<BreadcrumbsProps, 'children' | 'sx'>;

const BreadCrumbs = ({ children, sx, ...props }: Props) => {
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      sx={{
        '& .MuiLink-root': {
          textDecoration: 'underline',
          cursor: 'pointer',
        },
        '& .MuiButtonBase-root': {
          backgroundColor: 'transparent',
        },
        '& .MuiBreadcrumbs-separator': {
          mx: 0.5,
        },
        ...sx,
      }}
      maxItems={4}
      itemsAfterCollapse={2}
      slots={{ CollapsedIcon: CustomCollapsedIcon }}
      // slotProps={{ collapsedIcon: { children: '.-.' } }}
      // {...props}
    >
      {children}
    </MuiBreadcrumbs>
  );
};

export default BreadCrumbs;
