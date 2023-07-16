import { Person } from "@/models";
//import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const peopleSlice = createSlice({
  name: "people",
  initialState: getLocalStorage("people")
    ? JSON.parse(getLocalStorage("people") as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage("people", state);
      return action.payload;
    },
  },
});
