import { FC, ReactNode, MouseEvent } from 'react';
import {
  Stack,
  StackProps,
  Divider,
  ListItem as MuiListItem,
  ListItemProps as MuiLisItemProps,
  ListItemButton as MuiListItemButton,
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material';
import ListItemSkeleton from './ListItemSkeleton';
import { Title, TitleProps } from '../Title/Title';
import { Avatar, AvatarProps } from '../Avatar/Avatar';
import { TablerIcon } from '@tabler/icons-react';

type ContainerProps = Pick<MuiLisItemProps, 'children' | 'divider' | 'sx'>;

export type ListItemProps = Omit<ContainerProps, 'children' | 'sx'> &
  Pick<StackProps, 'id' | 'sx'> & {
    loading?: boolean;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    text?: Pick<TitleProps, 'copetin' | 'title' | 'description'>;
    avatar?: Pick<AvatarProps, 'src' | 'alt' | 'text' | 'Icon' | 'color'>;
    action?: Pick<
      MuiIconButtonProps,
      'id' | 'color' | 'disabled' | 'onClick' | 'aria-label'
    > & {
      Icon: TablerIcon;
    };
    sideContent?: ReactNode;
  };

export const ListItem: FC<ListItemProps> = ({
  id,
  sx,
  loading = false,
  onClick,
  text,
  avatar,
  action,
  divider,
  sideContent,
}) => {
  const Container = onClick
    ? (props: ContainerProps) => (
        <MuiListItemButton
          {...props}
          onClick={onClick}
        />
      )
    : (props: ContainerProps) => <MuiListItem {...props} />;

  const handleClick = (callback: any) => (event: any) => {
    event.stopPropagation();
    callback && callback(event);
  };

  return (
    <Stack
      id={id}
      sx={{
        minHeight: '40px',
        flexDirection: 'column',
        ...sx,
      }}
    >
      {loading && <ListItemSkeleton />}
      {!loading && (
        <Container
          sx={{
            p: 2,
            gap: 0.5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Stack
            sx={{
              gap: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            {avatar && <Avatar {...avatar} />}
            {text && (
              <Title
                {...text}
                variant="S"
              />
            )}
          </Stack>
          <Stack
            sx={{
              gap: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            {sideContent}
            {action && (
              <MuiIconButton
                edge="end"
                size="small"
                {...action}
                onClick={handleClick(action.onClick)}
              >
                <action.Icon />
              </MuiIconButton>
            )}
          </Stack>
        </Container>
      )}
      {divider && <Divider variant="middle" />}
    </Stack>
  );
};

export default ListItem;
