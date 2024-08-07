export * from '@mui/material';
export * from '@mui/x-date-pickers';
export * from '@mui/x-date-pickers/AdapterDateFns';
export * from '@mui/x-date-pickers/internals/hooks/useDesktopPicker';
export { default as Button, type LoadingButtonProps as ButtonProps, } from '@mui/lab/LoadingButton';
export { TreeView, TreeItem } from '@mui/lab';
export { createNewTheme } from './theme/material-hu';
export { default as IconsMenu } from './components/IconsMenu';
export { default as NewModal } from './components/NewModal';
export { default as useSnackbarUtils } from './components/Snackbar';
export { default as RoundedTabs } from './components/RoundedTabs';
export { default as FormRichEditor } from './components/FormRichEditor';
export { default as CustomStepper, CustomStepperProps, } from './components/CustomStepper';
export { default as SideStepper } from './components/SideStepper';
export { default as HorizontalStepper, HorizontalStepperProps, StepType, } from './components/HorizontalStepper';
export { default as FormDrop, FormDropProps, FormDropTypes, FormDropContext, } from './components/FormDrop';
export { default as CroppingModal, CroppingModalProps, } from './components/CroppingModal';
export { default as DocumentItem, DocumentItemProps, } from './components/DocumentItem';
export { default as FormRadioCustomGroup, FormRadioCustomGroupProps, } from './components/FormRadioCustomGroup';
export { useDebounce } from './hooks/useDebounce';
export { useServerPagination, TableSortingHeaderProps, } from './hooks/useServerPagination';
export { useClientPagination } from './hooks/useClientPagination';
export { useModal } from './hooks/useModal';
export { createHuGoTheme } from './theme/hugo';
export declare const PeopleExperience: {
    DisplayGroup: <TData extends {
        id: import("react").Key;
    }>({ items, renderItem, }: {
        items: TData[];
        renderItem: (item: TData, index: number) => JSX.Element;
    }) => import("react/jsx-runtime").JSX.Element;
    DisplayGroupItem: import("@emotion/styled").StyledComponent<import("@mui/material").StackOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLDivElement> | null | undefined;
    }, keyof import("@mui/material/OverridableComponent").CommonProps | keyof import("@mui/material").StackOwnProps> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
        component?: import("react").ElementType;
    }, {}, {}>;
    ParticipationItemSkeleton: () => import("react/jsx-runtime").JSX.Element;
    ParticipationExpandableItem: ({ children, primary, secondary, partial, total, slotProps, }: import("./components/peopleExperience/Participation").ParticipationExpandableItemProps) => import("react/jsx-runtime").JSX.Element;
    ParticipationItem: ({ primary, secondary, partial, total, slotProps, }: import("./components/peopleExperience/Participation").ParticipationItemProps) => import("react/jsx-runtime").JSX.Element;
    ValueIndicator: ({ value, label, loading, description, slotProps, }: {
        value: number | string;
        label: string;
        loading?: boolean;
        description?: string;
        slotProps?: Partial<{
            container: import("@mui/material").StackProps;
        }>;
    }) => import("react/jsx-runtime").JSX.Element;
    ListWithDivider: ({ items, dividerProps, ...other }: import("@mui/material").ListOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
        ref?: ((instance: HTMLUListElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLUListElement> | null | undefined;
    }, "style" | "className" | "children" | "dense" | "sx" | "classes" | "subheader" | "disablePadding"> & {
        component?: import("react").ElementType;
    } & {
        items: import("react").ReactNode[];
        dividerProps?: import("@mui/material").DividerProps;
    }) => import("react/jsx-runtime").JSX.Element;
    ResultContainer: ({ title, children, subtitle, actions, sx, }: {
        title: string;
        subtitle?: string;
        children: import("react").ReactNode;
        actions?: import("react").ReactNode;
        sx?: import("@mui/material").StackProps["sx"];
    }) => import("react/jsx-runtime").JSX.Element;
    LinearProgressWithLabel: ({ linearProgressProps, value, ...other }: import("./components/peopleExperience/LinearProgressWithLabel").LinearProgressWithLabelProps) => import("react/jsx-runtime").JSX.Element;
    ActionsMenu: ({ children, renderTrigger, closeOnSelect }: {
        children: import("react").ReactNode;
        renderTrigger: (props: {
            ariaProps: object;
            handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
            open: boolean;
        }) => JSX.Element;
        closeOnSelect?: boolean;
    }) => import("react/jsx-runtime").JSX.Element;
    ActionsMenuItem: ({ onClick, sx, ...props }: import("@mui/material").MenuItemProps) => import("react/jsx-runtime").JSX.Element;
    SideTabNavigation: ({ selectedIndex, onChangeIndex, tabs, title, layout: Layout, slotProps, }: {
        title: string;
        selectedIndex: number;
        onChangeIndex: (nextIndex: number) => void;
        tabs: import("./components/peopleExperience/SideTabNavigation").Tab[];
        layout?: import("react").ComponentType<{
            children: import("react").ReactNode;
        }>;
        slotProps?: Partial<{
            tabs: import("@mui/material").StackProps;
        }>;
    }) => import("react/jsx-runtime").JSX.Element;
    TabPanel: ({ children, value }: {
        children: import("react").ReactNode;
        value: number;
    }) => import("react/jsx-runtime").JSX.Element;
    TabPanelItem: ({ children, index, ...other }: import("./components/peopleExperience/TabPanel").TabPanelItemProps) => import("react/jsx-runtime").JSX.Element;
};
export { default as Avatar } from './components/Avatar';
export { default as AvatarGroup } from './components/AvatarGroup';
