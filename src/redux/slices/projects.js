import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAllProjects = createAsyncThunk(
    "projects",
    async () => {
        const {data} = await axios.get("/projects");
        return data;
    }
);

export const fetchAllTypes = createAsyncThunk(
    "type",
    async () => {
        const {data} = await axios.get("/type");
        return data;
    }
);

export const fetchAllSkills = createAsyncThunk(
    "skill",
    async () => {
        const {data} = await axios.get("/skill");
        return data;
    }
);

export const fetchPostProject = createAsyncThunk(
    "auth/fetchRegister",
    async (params) => {
        const { data } = await axios.post("/projects/", params);
        return data;
    }
);

const initialState = {
    projects: {
        items: [],
        status: "loading",
    },
    types: {
        items: {},
        status: "loading",
    },
    skills: {
        items: {},
        status: "loading",
    },
    newProject: {
        status: "loading",
    },
    status: "loading",
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
            state.projects.items = [...action.payload.Projects].reverse();
            state.projects.status = "loaded";
        },
        [fetchAllProjects.rejected]: (state) => {
            state.projects.status = "error";
        },
        [fetchAllTypes.pending]: (state) => {
            state.types.status = "loading";
        },
        [fetchAllTypes.fulfilled]: (state, action) => {
            state.types.items = action.payload.ProjectTypes.reduce((acc, item) => ({ ...acc, [item.id]: item.title }), {})
            state.types.status = "loaded";
        },
        [fetchAllTypes.rejected]: (state) => {
            state.types.status = "error";
        },
        [fetchAllSkills.pending]: (state) => {
            state.skills.status = "loading";
        },
        [fetchAllSkills.fulfilled]: (state, action) => {
            state.skills.items = action.payload.ProjectSkills.reduce((acc, item) => ({ ...acc, [item.id]: item.title }), {})
            state.skills.status = "loaded";
        },
        [fetchAllSkills.rejected]: (state) => {
            state.skills.status = "error";
        },
        [fetchPostProject.pending]: (state) => {
            state.newProject.status = "loading";
        },
        [fetchPostProject.fulfilled]: (state, action) => {
            state.projects.items = [action.payload.Project, ...state.projects.items]
            state.newProject.status = "loaded";
        },
        [fetchPostProject.rejected]: (state) => {
            state.newProject.status = "error";
        }
    },
});

export const projectReducer = projectsSlice.reducer;
export const isProjectsLoaded = (state) => state.projects.projects.status === "loaded"
    && state.projects.types.status === "loaded"
    && state.projects.skills.status === "loaded";
