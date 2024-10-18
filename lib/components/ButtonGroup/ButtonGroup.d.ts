export type ButtonGroupProps = {
    labels: [string, string] | [string, string, string];
    onChange?: (index: number) => void;
};
declare const ButtonGroup: ({ labels, onChange }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export default ButtonGroup;
