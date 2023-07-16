import React, { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const findPerson = (person: Person) =>
    !!selectedPeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    selectedPeople.filter((p) => p.id === person.id);
  const handleChange = (person: Person) => {
    setSelectedPeople(
      findPerson(person) ? filterPerson(person) : [...selectedPeople, person]
    );
  };
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "Confirmed",
      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <Checkbox
          size="small"
          //checked={findPerson(params.row)}
          onChange={() => handleChange(params.row.id)}
        />
      ),
    },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <DataGrid
      rows={People}
      columns={columns}
      disableColumnSelector
      //checkboxSelection
      disableRowSelectionOnClick
      autoHeight
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
      }}
      pageSizeOptions={[5, 10, 25]}
      getRowId={(row: any) => row.id}
    />
  );
};
export default Home;
