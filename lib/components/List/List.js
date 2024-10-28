import { jsx as _jsx } from "react/jsx-runtime";
import { List as MuiList } from '@mui/material';
export const List = ({ id, sx, children }) => {
    return (_jsx(MuiList, { id: id, sx: Object.assign({ p: 0 }, sx), children: children }));
};
export default List;
