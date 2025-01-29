var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LoadingButton } from '@mui/lab';
import { Stack, Typography } from '@mui/material';
import CardContainer from '../CardContainer/CardContainer';
import Avatar from '../Avatar/Avatar';
import FormInputClassic from '../Input/FormInputClassic';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from './i18n';
import { getInitials } from '../../utils/user';
export const CreatePost = ({ profilePicture, fullName, handlePost, sx, existingPost, }) => {
    const { t } = useTranslation();
    const form = useForm({
        defaultValues: {
            body: (existingPost === null || existingPost === void 0 ? void 0 : existingPost.body) || '',
        },
    });
    const submit = form.handleSubmit((values) => __awaiter(void 0, void 0, void 0, function* () {
        yield handlePost(values);
        form.reset();
    }));
    return (_jsx(FormProvider, Object.assign({}, form, { children: _jsx(CardContainer, { fullWidth: true, sx: sx, padding: 24, children: _jsxs(Stack, { children: [_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1 }, children: [_jsx(Avatar, { src: profilePicture, text: getInitials(fullName) }), _jsx(Typography, { sx: { flex: 1 }, children: fullName })] }), _jsx(FormInputClassic, { name: "body", inputProps: {
                            sx: {
                                mt: 2,
                                mb: 1,
                            },
                            multiline: true,
                            minRows: 1,
                            placeholder: t('WRITE_SOMETHING'),
                        } }), _jsx(LoadingButton, { variant: "primary", sx: { alignSelf: 'flex-end' }, onClick: submit, disabled: !form.watch('body'), loading: form.formState.isSubmitting, size: "large", children: t(existingPost ? 'EDIT' : 'PUBLISH') })] }) }) })));
};
export default CreatePost;
