import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  id: string[];
} = {
  id: [],
};

interface Action {
  payload: string;
  type: string;
}

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: initialState,
  reducers: {
    addFavourites: (state, action: Action) => {
      state.id.push(action.payload);
    },
    removeFavourites: (state, action: Action) => {
      state.id.splice(state.id.indexOf(action.payload), 1);
    },
  },
});

export const addAction = favouritesSlice.actions.addFavourites;
export const removeAction = favouritesSlice.actions.removeFavourites;
export default favouritesSlice.reducer;
