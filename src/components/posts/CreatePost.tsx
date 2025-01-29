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
  onCancel?: () => void;
};

export const CreatePost: FC<CreatePostProps> = ({
  profilePicture,
  fullName,
  handlePost,
  sx,
  existingPost,
  onCancel,
}) => {
  const { t } = useTranslation();

  const form = useForm<FieldValues>({
    defaultValues: {
      body: existingPost?.body || '',
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
        padding={24}
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
          <Stack
            sx={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 2 }}
          >
            {!!onCancel && (
              <LoadingButton
                variant="secondary"
                onClick={onCancel}
              >
                {t('CANCEL')}
              </LoadingButton>
            )}
            <LoadingButton
              variant="primary"
              onClick={submit}
              disabled={!form.watch('body')}
              loading={form.formState.isSubmitting}
              size="large"
            >
              {t(existingPost ? 'EDIT' : 'PUBLISH')}
            </LoadingButton>
          </Stack>
        </Stack>
      </CardContainer>
    </FormProvider>
  );
};

export default CreatePost;
