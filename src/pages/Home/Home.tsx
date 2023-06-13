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
        rowHeight={pagesize}
        //pageSize={pagesize}
        //rowsPerPageOptions={[pagesize]}
      />
    </div>
  );
};

export default Home;
