import { FC } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import CardContainer, {
  CardContainerProps,
} from '../CardContainer/CardContainer';
import Avatar from '../Avatar/Avatar';
import FormInputClassic from '../Input/FormInputClassic';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from './i18n';
import { getInitials } from '../../utils/user';

type FieldValues = {
  body: string;
};

export type CreatePostProps = {
  profilePicture?: string;
  fullName: string;
  handlePost: SubmitHandler<FieldValues>;
  sx?: CardContainerProps['sx'];
};

export const CreatePost: FC<CreatePostProps> = ({
  profilePicture,
  fullName,
  handlePost,
  sx,
}) => {
  const { t } = useTranslation();

  const form = useForm<FieldValues>({
    defaultValues: {
      body: '',
    },
  });

  return (
    <FormProvider {...form}>
      <CardContainer
        fullWidth
        sx={sx}
      >
        <Stack>
          <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
            <Avatar
              src={profilePicture}
              text={getInitials(fullName)}
            />
            <Typography sx={{ flex: 1 }}>{fullName}</Typography>
          </Stack>
          <FormInputClassic
            name="body"
            inputProps={{
              sx: {
                mt: 2,
                mb: 1,
              },
              placeholder: t('WRITE_SOMETHING'),
            }}
          />
          <Button
            variant="primary"
            sx={{ alignSelf: 'flex-end' }}
            onClick={form.handleSubmit(handlePost)}
            disabled={!form.watch('body')}
            size="large"
          >
            {t('PUBLISH')}
          </Button>
        </Stack>
      </CardContainer>
    </FormProvider>
  );
};

export default CreatePost;
