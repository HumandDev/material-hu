import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Button, Typography } from '@mui/material';
import CardContainer from '../CardContainer/CardContainer';
import Avatar from '../Avatar/Avatar';
import FormInputClassic from '../Input/FormInputClassic';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from './i18n';
import { getInitials } from '../../utils/user';
export const CreatePost = ({ profilePicture, fullName, handlePost, sx, }) => {
    const { t } = useTranslation();
    const form = useForm({
        defaultValues: {
            text: '',
        },
    });
    return (_jsx(FormProvider, Object.assign({}, form, { children: _jsx(CardContainer, { fullWidth: true, sx: sx, children: _jsxs(Stack, { children: [_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1 }, children: [_jsx(Avatar, { src: profilePicture, text: getInitials(fullName) }), _jsx(Typography, { sx: { flex: 1 }, children: fullName })] }), _jsx(FormInputClassic, { name: "text", inputProps: {
                            sx: {
                                mt: 2,
                                mb: 1,
                            },
                            placeholder: t('WRITE_SOMETHING'),
                        } }), _jsx(Button, { variant: "primary", sx: { alignSelf: 'flex-end' }, onClick: form.handleSubmit(handlePost), disabled: !form.watch('text'), size: "large", children: t('PUBLISH') })] }) }) })));
};
export default CreatePost;
