type Props = {
    options: {
        onClick: (e?: any) => void;
        label: string;
        icon?: any;
        iconIsImage?: boolean;
        show?: boolean;
        divider?: boolean;
    }[];
};
declare const IconsMenu: ({ options }: Props) => import("react/jsx-runtime").JSX.Element;
export default IconsMenu;
