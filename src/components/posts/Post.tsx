import { FC } from 'react';
import { Stack } from '@mui/material';
import CardContainer, {
  CardContainerProps,
} from '../CardContainer/CardContainer';
import { getInitials } from '../../utils/user';
import SeeMoreText from '../SeeMoreText/SeeMoreText';
import ListItem from '../List/ListItem';
import { getDistanceToNow } from '../../utils/time';
import { useTranslation } from './i18n';
import { IconDots, IconEdit, IconTrash } from '@tabler/icons-react';
import { MenuList } from '../Menu/MenuList';
import { insertIf } from '../../utils/array';

export type PostProps = {
  profilePicture?: string;
  fullName: string;
  body: string;
  publicationDatetime: string;
  sx?: CardContainerProps['sx'];
  actions?: {
    onEdit?: () => void;
    onDelete?: () => void;
  };
};

export const Post: FC<PostProps> = ({
  profilePicture,
  fullName,
  body,
  publicationDatetime,
  sx,
  actions,
}) => {
  const { t } = useTranslation();

  const actionsList = [
    ...insertIf(!!actions?.onEdit, {
      title: t('EDIT'),
      Icon: IconEdit,
      onClick: actions!.onEdit!,
    }),
    ...insertIf(!!actions?.onDelete, {
      title: t('DELETE'),
      Icon: IconTrash,
      onClick: actions!.onDelete!,
    }),
  ];

  return (
    <CardContainer
      fullWidth
      padding={24}
      sx={sx}
    >
      <Stack sx={{ gap: 2 }}>
        <ListItem
          avatar={{ src: profilePicture, text: getInitials(fullName) }}
          text={{
            title: fullName,
            description: t('TIME_DISTANCE', {
              distance: getDistanceToNow(publicationDatetime),
            }),
          }}
          actionMenuList={
            actions ? (
              <MenuList
                Icon={IconDots}
                options={actionsList}
              />
            ) : undefined
          }
          sx={{ '.MuiListItem-root': { p: 0 } }}
        />
        <SeeMoreText
          text={body}
          lines={6}
        />
      </Stack>
    </CardContainer>
  );
};

export default Post;
