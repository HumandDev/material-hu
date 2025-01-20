import type { Meta, StoryObj } from '@storybook/react';
import { Paper, Stack, Typography } from '@mui/material';
import TableContainerHu from './HuTableContainer';
import HuTable from './HuTable';
import TableHeadHu from './HuTableHead';
import TableRowHu from './HuTableRow';
import HuTableCell from './HuTableCell';
import TableBodyHu from './HuTableBody';
import { useState } from 'react';
import rows from './mockData.json';
import Skeleton from '../Skeleton/Skeleton';
import Checkbox from '../Checkbox/Checkbox';
import IconsMenu from '../IconsMenu';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import TableToolbarHu from './HuTableToolbar';

const meta: Meta = {
  component: HuTable,
  title: 'Table',
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof HuTable>;

export const Default: Story = {
  render: () => {
    return (
      <TableContainerHu component={Paper}>
        <HuTable sx={{ minWidth: 650 }}>
          <TableHeadHu>
            <TableRowHu headerRow>
              <HuTableCell headerCell>Dessert</HuTableCell>
              <HuTableCell headerCell>Calories</HuTableCell>
              <HuTableCell headerCell>Fat&nbsp;(g)</HuTableCell>
              <HuTableCell headerCell>Carbs&nbsp;(g)</HuTableCell>
              <HuTableCell headerCell>Protein&nbsp;(g)</HuTableCell>
            </TableRowHu>
          </TableHeadHu>
          <TableBodyHu>
            {rows.map(row => (
              <TableRowHu key={row.name}>
                <HuTableCell
                  component="th"
                  scope="row"
                >
                  {row.name}
                </HuTableCell>
                <HuTableCell>{row.calories}</HuTableCell>
                <HuTableCell>{row.fat}</HuTableCell>
                <HuTableCell>{row.carbs}</HuTableCell>
                <HuTableCell>{row.protein}</HuTableCell>
              </TableRowHu>
            ))}
          </TableBodyHu>
        </HuTable>
      </TableContainerHu>
    );
  },
};

export const SelectionTable: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const handleSelection = (selectedIdx: number) => {
      setSelectedRows(prev => {
        if (prev.includes(selectedIdx)) {
          return prev.filter(idx => idx !== selectedIdx);
        }
        return [...prev, selectedIdx];
      });
    };

    const handleSelectAll = () => {
      if (selectedRows.length === rows.length) {
        setSelectedRows([]);
      } else {
        setSelectedRows(rows.map((_, idx) => idx));
      }
    };

    return (
      <TableContainerHu component={Paper}>
        <HuTable sx={{ minWidth: 650 }}>
          <TableHeadHu>
            <TableRowHu headerRow>
              <HuTableCell
                headerCell
                selectionCell
              >
                <Checkbox
                  checked={selectedRows.length === rows.length}
                  onClick={e => {
                    e.stopPropagation();
                    handleSelectAll();
                  }}
                />
              </HuTableCell>
              <HuTableCell
                headerCell
                tooltip="Desert column"
              >
                Dessert
              </HuTableCell>

              <HuTableCell headerCell>Calories</HuTableCell>
              <HuTableCell headerCell>Fat&nbsp;(g)</HuTableCell>
              <HuTableCell headerCell>Carbs&nbsp;(g)</HuTableCell>
              <HuTableCell headerCell>Protein&nbsp;(g)</HuTableCell>
            </TableRowHu>
          </TableHeadHu>
          <TableBodyHu>
            {rows.map((row, index) => (
              <TableRowHu
                key={row.name}
                selected={selectedRows.includes(index)}
              >
                <HuTableCell selectionCell>
                  <Checkbox
                    sx={{ zIndex: 100 }}
                    disabled={false}
                    checked={selectedRows.includes(index)}
                    onClick={() => handleSelection(index)}
                  />
                </HuTableCell>
                <HuTableCell
                  component="th"
                  scope="row"
                >
                  {row.name}
                </HuTableCell>
                <HuTableCell>{row.calories}</HuTableCell>
                <HuTableCell>{row.fat}</HuTableCell>
                <HuTableCell>{row.carbs}</HuTableCell>
                <HuTableCell>{row.protein}</HuTableCell>
              </TableRowHu>
            ))}
          </TableBodyHu>
        </HuTable>
      </TableContainerHu>
    );
  },
};

export const Loading: Story = {
  render: () => {
    return (
      <TableContainerHu component={Paper}>
        <HuTable sx={{ minWidth: 650 }}>
          <TableHeadHu>
            <TableRowHu headerRow>
              <HuTableCell headerCell>Dessert</HuTableCell>
              <HuTableCell headerCell>Calories</HuTableCell>
              <HuTableCell headerCell>Fat&nbsp;(g)</HuTableCell>
              <HuTableCell headerCell>Carbs&nbsp;(g)</HuTableCell>
              <HuTableCell headerCell>Protein&nbsp;(g)</HuTableCell>
            </TableRowHu>
          </TableHeadHu>
          <TableBodyHu>
            {rows.map(row => (
              <TableRowHu key={row.name}>
                <HuTableCell
                  component="th"
                  scope="row"
                >
                  <Skeleton
                    isLoading
                    width={98}
                    height={33}
                    variant="rounded"
                  />
                </HuTableCell>
                <HuTableCell
                  component="th"
                  scope="row"
                >
                  <Skeleton
                    isLoading
                    width={98}
                    height={33}
                    variant="rounded"
                  />
                </HuTableCell>
                <HuTableCell
                  component="th"
                  scope="row"
                >
                  <Skeleton
                    isLoading
                    width={98}
                    height={33}
                    variant="rounded"
                  />
                </HuTableCell>
                <HuTableCell
                  component="th"
                  scope="row"
                >
                  <Skeleton
                    isLoading
                    width={98}
                    height={33}
                    variant="rounded"
                  />
                </HuTableCell>
                <HuTableCell
                  component="th"
                  scope="row"
                >
                  <Skeleton
                    isLoading
                    width={98}
                    height={33}
                    variant="rounded"
                  />
                </HuTableCell>
              </TableRowHu>
            ))}
          </TableBodyHu>
        </HuTable>
      </TableContainerHu>
    );
  },
};

export const ActionsMenu: Story = {
  render: () => {
    return (
      <TableContainerHu component={Paper}>
        <HuTable sx={{ minWidth: 650 }}>
          <TableHeadHu>
            <TableRowHu headerRow>
              <HuTableCell headerCell>Dessert</HuTableCell>
              <HuTableCell headerCell>Calories</HuTableCell>
              <HuTableCell headerCell>Fat&nbsp;(g)</HuTableCell>
              <HuTableCell headerCell>Carbs&nbsp;(g)</HuTableCell>
              <HuTableCell headerCell>Protein&nbsp;(g)</HuTableCell>
              <HuTableCell aria-label={'actions'} />
            </TableRowHu>
          </TableHeadHu>
          <TableBodyHu>
            {rows.map(row => (
              <TableRowHu key={row.name}>
                <HuTableCell
                  component="th"
                  scope="row"
                >
                  {row.name}
                </HuTableCell>
                <HuTableCell>{row.calories}</HuTableCell>
                <HuTableCell>{row.fat}</HuTableCell>
                <HuTableCell>{row.carbs}</HuTableCell>
                <HuTableCell>{row.protein}</HuTableCell>
                <HuTableCell
                  variant="shortField"
                  align="right"
                  sx={{
                    whiteSpace: 'nowrap',
                  }}
                >
                  <IconsMenu
                    options={[
                      {
                        label: 'Edit',
                        icon: <EditOutlined />,
                        onClick: () => {},
                      },
                      {
                        label: 'Delete',
                        icon: <DeleteOutline />,
                        onClick: () => {},
                      },
                    ]}
                  />
                </HuTableCell>
              </TableRowHu>
            ))}
          </TableBodyHu>
        </HuTable>
      </TableContainerHu>
    );
  },
};

export const Toolbar: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const handleSelection = (selectedIdx: number) => {
      setSelectedRows(prev => {
        if (prev.includes(selectedIdx)) {
          return prev.filter(idx => idx !== selectedIdx);
        }
        return [...prev, selectedIdx];
      });
    };

    const handleSelectAll = () => {
      if (selectedRows.length === rows.length) {
        setSelectedRows([]);
      } else {
        setSelectedRows(rows.map((_, idx) => idx));
      }
    };

    return (
      <TableContainerHu component={Paper}>
        <TableToolbarHu>
          <Typography variant="globalS">{`Selected rows: ${selectedRows.length}`}</Typography>
        </TableToolbarHu>
        <HuTable sx={{ minWidth: 650 }}>
          <TableHeadHu>
            <TableRowHu headerRow>
              <HuTableCell
                headerCell
                selectionCell
              >
                <Checkbox
                  checked={selectedRows.length === rows.length}
                  onClick={e => {
                    e.stopPropagation();
                    handleSelectAll();
                  }}
                />
              </HuTableCell>
              <HuTableCell
                headerCell
                tooltip="Desert column"
              >
                Dessert
              </HuTableCell>
              <HuTableCell headerCell>Calories</HuTableCell>
              <HuTableCell headerCell>Fat&nbsp;(g)</HuTableCell>
              <HuTableCell headerCell>Carbs&nbsp;(g)</HuTableCell>
              <HuTableCell headerCell>Protein&nbsp;(g)</HuTableCell>
            </TableRowHu>
          </TableHeadHu>
          <TableBodyHu>
            {rows.map((row, index) => (
              <TableRowHu
                key={row.name}
                selected={selectedRows.includes(index)}
              >
                <HuTableCell selectionCell>
                  <Checkbox
                    sx={{ zIndex: 100 }}
                    disabled={false}
                    checked={selectedRows.includes(index)}
                    onClick={() => handleSelection(index)}
                  />
                </HuTableCell>
                <HuTableCell
                  component="th"
                  scope="row"
                >
                  {row.name}
                </HuTableCell>
                <HuTableCell>{row.calories}</HuTableCell>
                <HuTableCell>{row.fat}</HuTableCell>
                <HuTableCell>{row.carbs}</HuTableCell>
                <HuTableCell>{row.protein}</HuTableCell>
              </TableRowHu>
            ))}
          </TableBodyHu>
        </HuTable>
      </TableContainerHu>
    );
  },
};

export const Tooltips: Story = {
  render: () => {
    return (
      <TableContainerHu component={Paper}>
        <HuTable sx={{ minWidth: 650 }}>
          <TableHeadHu>
            <TableRowHu headerRow>
              <HuTableCell
                headerCell
                tooltip="Dessert column"
              >
                Dessert
              </HuTableCell>
              <HuTableCell
                headerCell
                tooltip="Calories column"
              >
                Calories
              </HuTableCell>
              <HuTableCell
                headerCell
                tooltip={'Fat column'}
              >
                Fat&nbsp;(g)
              </HuTableCell>
              <HuTableCell
                headerCell
                tooltip={'Carbohydrates column'}
              >
                Carbs&nbsp;(g)
              </HuTableCell>
              <HuTableCell
                headerCell
                tooltip={'Protein column'}
              >
                Protein&nbsp;(g)
              </HuTableCell>
            </TableRowHu>
          </TableHeadHu>
          <TableBodyHu>
            {rows.map(row => (
              <TableRowHu key={row.name}>
                <HuTableCell
                  tooltip="Content"
                  component="th"
                  align="left"
                >
                  <Content />
                </HuTableCell>
                <HuTableCell
                  tooltip={'Amount of calories per serving'}
                  align="center"
                >
                  {row.calories}
                </HuTableCell>
                <HuTableCell
                  align="center"
                  tooltip={'Amount of fat per serving'}
                >
                  {row.fat}
                </HuTableCell>
                <HuTableCell
                  align="center"
                  tooltip={'Amount of carbohydrates per serving'}
                >
                  {row.carbs}
                </HuTableCell>
                <HuTableCell
                  align="center"
                  tooltip={'Amount of protein per serving'}
                >
                  {row.protein}
                </HuTableCell>
              </TableRowHu>
            ))}
          </TableBodyHu>
        </HuTable>
      </TableContainerHu>
    );
  },
};

const Content = () => (
  <Stack
    sx={{
      width: 1,
      height: '33px',
      border: '1px dashed #CAD5FE',
      backgroundColor: '#EFF2FF',
      borderRadius: '8px',
    }}
  />
);
