import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'apiParam', headerName: 'Параметр', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', apiParam: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', apiParam: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', apiParam: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', apiParam: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', apiParam: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', apiParam: null, age: 150 },
  { id: 7, lastName: 'Clifford', apiParam: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', apiParam: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', apiParam: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        onCellClick={(id) => console.log(id)}
        componentsProps={{
          pagination: {
            labelRowsPerPage: "Строк на странице"
          }
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}