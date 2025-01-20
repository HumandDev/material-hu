import { FC } from 'react';
import { InputProps } from './InputClassic';
export type SearchProps = Omit<InputProps, 'startAdornment' | 'hasCounter'> & {
    variant?: 'classic' | 'custom';
};
export declare const Search: FC<SearchProps>;
export default Search;
