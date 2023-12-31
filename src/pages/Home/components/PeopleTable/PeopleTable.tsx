import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { useState } from "react";

export interface PeopleTableProps {}

const PeopleTable: React.FC<PeopleTableProps> = () => {
  const dispatch = useDispatch();

  const findPerson = (person: Person) =>
    !!selectedPeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    selectedPeople.filter((p) => p.id !== person.id);
  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];
    dispatch(addFavorites(filteredPeople));
    setSelectedPeople(filteredPeople);
  };
  const storePeople = useSelector((store: AppStore) => store.people);
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
          checked={findPerson(params.row)}
          onChange={() => handleChange(params.row)}
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
    {
      field: "levelOfHappiness",
      headerName: "Level of Happiness",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      rows={storePeople}
      columns={columns}
      disableColumnSelector
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

export default PeopleTable;
