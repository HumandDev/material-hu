import { ThemeOptions, type Direction } from '@mui/material';
type Config = {
    direction?: Direction;
    color?: string;
};
export declare const createOptions: (config: Config) => ThemeOptions;
export default createOptions;
