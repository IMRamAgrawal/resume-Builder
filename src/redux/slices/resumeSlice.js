import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Education: [],
  Projects: [],
  Internships: [],
  Trainings: [],
  Jobs: [],
  Skills: [],
  Tools: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addDetail(state, action) {
      const { data, details } = action.payload;
      state[details] = [...state[details], data];
    },
    deleteDetail(state, action) {
      const { index, details } = action.payload;
      state[details].splice(index, 1);
    },
  },
});

export const { addDetail, deleteDetail, openPopup, closePopup } =
  resumeSlice.actions;
export default resumeSlice.reducer;
