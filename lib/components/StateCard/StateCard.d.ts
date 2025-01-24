import { ComponentProps, FC } from 'react';
import Avatar from '../Avatar/Avatar';
import CardContainer from '../CardContainer/CardContainer';
import Title from '../Title/Title';
export type StateCardProps = Pick<ComponentProps<typeof Title>, 'title' | 'description'> & Pick<ComponentProps<typeof Avatar>, 'Icon'> & Pick<ComponentProps<typeof CardContainer>, 'sx'>;
export declare const StateCard: FC<StateCardProps>;
export default StateCard;
