import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAllProjects = createAsyncThunk(
  "projects/fetchComments",
  async () => {
    const { data } = await axios.get("/projects");
    return data;
  }
);

const initialState = {
  projects: {
    items: [],
    status: "loading",
  }
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllProjects.pending]: (state) => {
      state.projects.status = "loading";
    },
    [fetchAllProjects.fulfilled]: (state, action) => {
      state.projects.items = action.payload.Projects;
      state.projects.status = "loaded";
    },
    [fetchAllProjects.rejected]: (state) => {
      state.projects.status = "error";
    }
  },
});

export const projectReducer = projectsSlice.reducer;
export const isProjectsLoaded = (state) => state.projects.projects.status === "loaded";
