import { createSlice } from "@reduxjs/toolkit";
import { LIGHT } from "../style/themes/light";
import { DARK } from "../style/themes/dark";

const themeState = createSlice({
  name: "themeState",
  initialState: {
    currentTheme: "light",
    selected: LIGHT,
  },
  reducers: {
    toDarkTheme(state) {
      state.selected = DARK;
      state.currentTheme = "dark";
    },
    toLightTheme(state) {
      state.selected = LIGHT;
      state.currentTheme = "light";
    },
  },
});

export const { toDarkTheme, toLightTheme } = themeState.actions;
export default themeState.reducer;
