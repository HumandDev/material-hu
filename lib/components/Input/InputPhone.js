import { jsx as _jsx } from "react/jsx-runtime";
import { MuiTelInput } from 'mui-tel-input';
const InputPhone = ({ defaultCountry = 'AR', value, onChange, disabled, fullWidth = true, maxRows, minRows, placeholder, size, label, autoFocus, ariaLabel, variant = 'outlined', onKeyDown, onPaste, inputProps, sx, margin, onClick, helperText, error, }) => {
    const handleChange = (newValue, country) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue, country === null || country === void 0 ? void 0 : country.countryCallingCode);
    };
    return (_jsx(MuiTelInput, { value: value, onChange: handleChange, disableFormatting: true, defaultCountry: defaultCountry, preferredCountries: ['AR', 'MX'], error: error, size: size, disabled: disabled, fullWidth: fullWidth, maxRows: maxRows, minRows: minRows, placeholder: placeholder, label: label, autoFocus: autoFocus, "aria-label": ariaLabel, forceCallingCode: true, variant: variant, onKeyDown: onKeyDown, onPaste: onPaste, inputProps: inputProps, margin: margin, onClick: onClick, sx: Object.assign(Object.assign({}, sx), { '& .MuiInputBase-root.Mui-disabled': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
            } }), helperText: helperText }));
};
export default InputPhone;
