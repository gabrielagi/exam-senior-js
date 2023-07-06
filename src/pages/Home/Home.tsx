import React from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";

export type HomeProps = {};
const pagesize = 5;
const columns = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    minWidth: 150,
    renderCell: (params: GridRenderCellParams) => <>{params.field}</>,
  },
];

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <DataGrid
        rows={People}
        columns={columns}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>
  );
};

export default Home;
