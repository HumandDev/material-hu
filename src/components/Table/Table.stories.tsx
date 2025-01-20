import type { Meta, StoryObj } from '@storybook/react';
import { Paper, Stack, Typography } from '@mui/material';
import TableContainerHu from './TableContainerHu';
import TableHu from './TableHu';
import TableHeadHu from './TableHeadHu';
import TableRowHu from './TableRowHu';
import TableCellHu from './TableCellHu';
import TableBodyHu from './TableBodyHu';
import { useState } from 'react';
import rows from './mockData.json';
import Skeleton from '../Skeleton/Skeleton';
import Checkbox from '../Checkbox/Checkbox';
import IconsMenu from '../IconsMenu';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import TableToolbarHu from './TableToolbarHu';

const meta: Meta = {
  component: TableHu,
  title: 'Table',
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TableHu>;

export const Default: Story = {
  render: () => {
    return (
      <TableContainerHu component={Paper}>
        <TableHu sx={{ minWidth: 650 }}>
          <TableHeadHu>
            <TableRowHu headerRow>
              <TableCellHu headerCell>Dessert</TableCellHu>
              <TableCellHu headerCell>Calories</TableCellHu>
              <TableCellHu headerCell>Fat&nbsp;(g)</TableCellHu>
              <TableCellHu headerCell>Carbs&nbsp;(g)</TableCellHu>
              <TableCellHu headerCell>Protein&nbsp;(g)</TableCellHu>
            </TableRowHu>
          </TableHeadHu>
          <TableBodyHu>
            {rows.map(row => (
              <TableRowHu key={row.name}>
                <TableCellHu
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCellHu>
                <TableCellHu>{row.calories}</TableCellHu>
                <TableCellHu>{row.fat}</TableCellHu>
                <TableCellHu>{row.carbs}</TableCellHu>
                <TableCellHu>{row.protein}</TableCellHu>
              </TableRowHu>
            ))}
          </TableBodyHu>
        </TableHu>
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
        <TableHu sx={{ minWidth: 650 }}>
          <TableHeadHu>
            <TableRowHu headerRow>
              <TableCellHu
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
              </TableCellHu>
              <TableCellHu
                headerCell
                tooltip="Desert column"
              >
                Dessert
              </TableCellHu>

              <TableCellHu headerCell>Calories</TableCellHu>
              <TableCellHu headerCell>Fat&nbsp;(g)</TableCellHu>
              <TableCellHu headerCell>Carbs&nbsp;(g)</TableCellHu>
              <TableCellHu headerCell>Protein&nbsp;(g)</TableCellHu>
            </TableRowHu>
          </TableHeadHu>
          <TableBodyHu>
            {rows.map((row, index) => (
              <TableRowHu
                key={row.name}
                selected={selectedRows.includes(index)}
              >
                <TableCellHu selectionCell>
                  <Checkbox
                    sx={{ zIndex: 100 }}
                    disabled={false}
                    checked={selectedRows.includes(index)}
                    onClick={() => handleSelection(index)}
                  />
                </TableCellHu>
                <TableCellHu
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCellHu>
                <TableCellHu>{row.calories}</TableCellHu>
                <TableCellHu>{row.fat}</TableCellHu>
                <TableCellHu>{row.carbs}</TableCellHu>
                <TableCellHu>{row.protein}</TableCellHu>
              </TableRowHu>
            ))}
          </TableBodyHu>
        </TableHu>
      </TableContainerHu>
    );
  },
};

export const Loading: Story = {
  render: () => {
    return (
      <TableContainerHu component={Paper}>
        <TableHu sx={{ minWidth: 650 }}>
          <TableHeadHu>
            <TableRowHu headerRow>
              <TableCellHu headerCell>Dessert</TableCellHu>
              <TableCellHu headerCell>Calories</TableCellHu>
              <TableCellHu headerCell>Fat&nbsp;(g)</TableCellHu>
              <TableCellHu headerCell>Carbs&nbsp;(g)</TableCellHu>
              <TableCellHu headerCell>Protein&nbsp;(g)</TableCellHu>
            </TableRowHu>
          </TableHeadHu>
          <TableBodyHu>
            {rows.map(row => (
              <TableRowHu key={row.name}>
                <TableCellHu
                  component="th"
                  scope="row"
                >
                  <Skeleton
                    isLoading
                    width={98}
                    height={33}
                    variant="rounded"
                  />
                </TableCellHu>
                <TableCellHu
                  component="th"
                  scope="row"
                >
                  <Skeleton
                    isLoading
                    width={98}
                    height={33}
                    variant="rounded"
                  />
                </TableCellHu>
                <TableCellHu
                  component="th"
                  scope="row"
                >
                  <Skeleton
                    isLoading
                    width={98}
                    height={33}
                    variant="rounded"
                  />
                </TableCellHu>
                <TableCellHu
                  component="th"
                  scope="row"
                >
                  <Skeleton
                    isLoading
                    width={98}
                    height={33}
                    variant="rounded"
                  />
                </TableCellHu>
                <TableCellHu
                  component="th"
                  scope="row"
                >
                  <Skeleton
                    isLoading
                    width={98}
                    height={33}
                    variant="rounded"
                  />
                </TableCellHu>
              </TableRowHu>
            ))}
          </TableBodyHu>
        </TableHu>
      </TableContainerHu>
    );
  },
};

export const ActionsMenu: Story = {
  render: () => {
    return (
      <TableContainerHu component={Paper}>
        <TableHu sx={{ minWidth: 650 }}>
          <TableHeadHu>
            <TableRowHu headerRow>
              <TableCellHu headerCell>Dessert</TableCellHu>
              <TableCellHu headerCell>Calories</TableCellHu>
              <TableCellHu headerCell>Fat&nbsp;(g)</TableCellHu>
              <TableCellHu headerCell>Carbs&nbsp;(g)</TableCellHu>
              <TableCellHu headerCell>Protein&nbsp;(g)</TableCellHu>
              <TableCellHu aria-label={'actions'} />
            </TableRowHu>
          </TableHeadHu>
          <TableBodyHu>
            {rows.map(row => (
              <TableRowHu key={row.name}>
                <TableCellHu
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCellHu>
                <TableCellHu>{row.calories}</TableCellHu>
                <TableCellHu>{row.fat}</TableCellHu>
                <TableCellHu>{row.carbs}</TableCellHu>
                <TableCellHu>{row.protein}</TableCellHu>
                <TableCellHu
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
                </TableCellHu>
              </TableRowHu>
            ))}
          </TableBodyHu>
        </TableHu>
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
        <TableHu sx={{ minWidth: 650 }}>
          <TableHeadHu>
            <TableRowHu headerRow>
              <TableCellHu
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
              </TableCellHu>
              <TableCellHu
                headerCell
                tooltip="Desert column"
              >
                Dessert
              </TableCellHu>
              <TableCellHu headerCell>Calories</TableCellHu>
              <TableCellHu headerCell>Fat&nbsp;(g)</TableCellHu>
              <TableCellHu headerCell>Carbs&nbsp;(g)</TableCellHu>
              <TableCellHu headerCell>Protein&nbsp;(g)</TableCellHu>
            </TableRowHu>
          </TableHeadHu>
          <TableBodyHu>
            {rows.map((row, index) => (
              <TableRowHu
                key={row.name}
                selected={selectedRows.includes(index)}
              >
                <TableCellHu selectionCell>
                  <Checkbox
                    sx={{ zIndex: 100 }}
                    disabled={false}
                    checked={selectedRows.includes(index)}
                    onClick={() => handleSelection(index)}
                  />
                </TableCellHu>
                <TableCellHu
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCellHu>
                <TableCellHu>{row.calories}</TableCellHu>
                <TableCellHu>{row.fat}</TableCellHu>
                <TableCellHu>{row.carbs}</TableCellHu>
                <TableCellHu>{row.protein}</TableCellHu>
              </TableRowHu>
            ))}
          </TableBodyHu>
        </TableHu>
      </TableContainerHu>
    );
  },
};
