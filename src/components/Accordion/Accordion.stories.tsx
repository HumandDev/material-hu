import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import ImgAvatar1 from '../../../static/avatar1.png';
import { PillsProps } from '../Pills/Pills';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
  tags: ['autodocs'],
  argTypes: {
    customDetail: {
      control: false,
    },
    avatar: {
      description: 'See AvatarProps',
    },
    pill: {
      description: 'See PillsProps',
    },
  },
  args: {},
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: '#333' },
        { name: 'Light', value: '#F7F9F2' },
      ],
      default: 'Light',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const AccordionWithCustomChildren: Story = {
  args: {
    elevation: 0,
    avatar: {
      src: ImgAvatar1,
      alt: '',
    },
    title: 'Title',
    caption: 'copetin',
    description: 'descripción',
    pill: {
      label: 'Info',
      type: 'success',
    },
    customDetail: <>hola</>,
  },
};

export const AccordionWithTextDetail: Story = {
  args: {
    elevation: 0,
    title: '¿Como puedo hacer tal cosa?',
    textDetail: {
      description:
        'Este es un texto explicativo que responde a la pregunta. Lorem ipsum dolor sit amet consectetur. Consequat elementum eleifend eget erat dictumst adipiscing sed. Condimentum varius cum nibh sed quis sociis molestie. Amet dui eget sem curabitur sed risus eget. Est egestas lobortis auctor risus. Sit nunc luctus luctus urna quis id.',
      link: 'http://www2.',
      label: 'Más información',
    },
  },
};

export const AccordionList: Story = {
  render: () => {
    const accordinList = [
      {
        elevation: 0,
        avatar: {
          src: ImgAvatar1,
          alt: '',
        },
        title: 'Title1',
        caption: 'copetin',
        description: 'descripción',
        pill: {
          label: 'Info',
          type: 'warning',
        } as PillsProps,
        customDetail: <>hola</>,
      },
      {
        title: '¿Como puedo hacer tal cosa?',
        textDetail: {
          description:
            'Este es un texto explicativo que responde a la pregunta. Lorem ipsum dolor sit amet consectetur. Consequat elementum eleifend eget erat dictumst adipiscing sed. Condimentum varius cum nibh sed quis sociis molestie. Amet dui eget sem curabitur sed risus eget. Est egestas lobortis auctor risus. Sit nunc luctus luctus urna quis id.',
          link: 'http://www2.',
          label: 'Más información',
        },
      },
    ];

    return (
      <>
        {accordinList.map(elem => (
          <Accordion
            disableGutters
            elevation={0}
            key={elem.title}
            {...elem}
          />
        ))}
      </>
    );
  },
};
