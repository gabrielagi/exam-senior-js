import { Person } from "@/models";
import { addFavorites } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { removeFavorite } from "@/redux/states";
import { useDispatch, useSelector } from "react-redux";

export interface FavoriteTableProps {}

const FavoriteTable: React.FC<FavoriteTableProps> = () => {
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
  const storeFavorites = useSelector((store: AppStore) => store.favorites);
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "Confirmed",
      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton
              color="secondary"
              aria-label="favorites"
              component="label"
              onClick={() => handleClick(params.row)}
            >
              <Delete />
            </IconButton>
          }
        </>
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
      rows={storeFavorites}
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

export default FavoriteTable;
