import { FC } from 'react';
import { LoadingButton } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
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
  existingPost?: FieldValues;
};

export const CreatePost: FC<CreatePostProps> = ({
  profilePicture,
  fullName,
  handlePost,
  sx,
  existingPost,
}) => {
  const { t } = useTranslation();

  const form = useForm<FieldValues>({
    defaultValues: existingPost || {
      body: '',
    },
  });

  const submit = form.handleSubmit(async values => {
    await handlePost(values);
    form.reset();
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
              multiline: true,
              minRows: 1,
              placeholder: t('WRITE_SOMETHING'),
            }}
          />
          <LoadingButton
            variant="primary"
            sx={{ alignSelf: 'flex-end' }}
            onClick={submit}
            disabled={!form.watch('body')}
            loading={form.formState.isSubmitting}
            size="large"
          >
            {t('PUBLISH')}
          </LoadingButton>
        </Stack>
      </CardContainer>
    </FormProvider>
  );
};

export default CreatePost;
