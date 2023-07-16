import { Person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";

export interface AppStore {
  people: Person[],
  favorites: Person[]
}

export default configureStore<AppStore>({
  reducer: {
    people: ,
    favorites : 
  },
});
