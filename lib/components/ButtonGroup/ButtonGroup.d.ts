export type ButtonGroupProps = {
    labels: [string, string] | [string, string, string];
    onChange?: (index: number) => void;
    fullWidth?: boolean;
    disableUnselect?: boolean;
};
declare const ButtonGroup: ({ labels, onChange, fullWidth, disableUnselect, }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export default ButtonGroup;
