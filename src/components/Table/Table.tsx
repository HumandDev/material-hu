import { Paper } from '@mui/material';
import TableContainerHu from './TableContainerHu';
import TableHu from './TableHu';
import TableHeadHu from './TableHeadHu';
import TableRowHu from './TableRowHu';
import TableCellHu from './TableCellHu';
import TableBodyHu from './TableBodyHu';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Table = () => {
  return (
    <TableContainerHu component={Paper}>
      <TableHu
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHeadHu>
          <TableRowHu headerRow>
            <TableCellHu headerCell>Dessert (100g serving)</TableCellHu>
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
              selected={index === 2 ? true : index === 3 ? false : undefined}
            >
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
};

export default Table;
