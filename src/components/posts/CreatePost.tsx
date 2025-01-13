import { FC } from 'react';
import { Stack, Button, Typography } from '@mui/material';
import CardContainer from '../CardContainer/CardContainer';
import Avatar from '../Avatar/Avatar';
import FormInputClassic from '../Input/FormInputClassic';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from './i18n';
import { getInitials } from '../../utils/user';

export type FieldValues = {
  text: string;
};

export type CreatePostProps = {
  profilePicture?: string;
  fullName: string;
  handlePost: SubmitHandler<FieldValues>;
};

export const CreatePost: FC<CreatePostProps> = ({
  profilePicture,
  fullName,
  handlePost,
}) => {
  const { t } = useTranslation();

  const form = useForm<FieldValues>({
    defaultValues: {
      text: '',
    },
  });

  return (
    <FormProvider {...form}>
      <CardContainer fullWidth>
        <Stack>
          <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
            <Avatar
              src={profilePicture}
              text={getInitials(fullName)}
            />
            <Typography sx={{ flex: 1 }}>{fullName}</Typography>
          </Stack>
          <FormInputClassic
            name="text"
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
            disabled={!form.watch('text')}
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
