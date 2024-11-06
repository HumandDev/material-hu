import { LinkProps } from '../Link/Link';

export type BreadcrumbLink = Pick<LinkProps, 'href' | 'onClick'> & {
  title: string;
  icon?: React.ElementType;
};
