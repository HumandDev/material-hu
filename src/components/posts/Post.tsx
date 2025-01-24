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
import { IconDots } from '@tabler/icons-react';

export type PostProps = {
  profilePicture?: string;
  fullName: string;
  body: string;
  publicationDatetime: string;
  sx?: CardContainerProps['sx'];
  showActions?: boolean;
};

export const Post: FC<PostProps> = ({
  profilePicture,
  fullName,
  body,
  publicationDatetime,
  sx,
  showActions,
}) => {
  const { t } = useTranslation();
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
          action={showActions ? { Icon: IconDots, color: 'red' } : undefined}
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
