import { ReactNode } from 'react';
export declare const ParticipationItemSkeleton: () => import("react/jsx-runtime").JSX.Element;
type MiscProps = {
    total: number;
    partial: number;
    noDataMessage?: ReactNode;
    label: string;
};
export type ParticipationItemProps = {
    primary: string;
    secondary?: string | null;
    partial: number;
    total: number;
    slotProps: {
        misc: Omit<MiscProps, 'partial' | 'total'>;
    };
};
export declare const ParticipationItem: ({ primary, secondary, partial, total, slotProps, }: ParticipationItemProps) => import("react/jsx-runtime").JSX.Element;
export type ParticipationExpandableItemProps = ParticipationItemProps & {
    children: (expandable: boolean) => ReactNode;
};
export declare const ParticipationExpandableItem: ({ children, primary, secondary, partial, total, slotProps, }: ParticipationExpandableItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
