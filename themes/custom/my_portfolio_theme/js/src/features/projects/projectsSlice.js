import { createSlice } from "@reduxjs/toolkit";
import projectService from "../../services/projects";
// import speedgame from "../../assets/projects/speedgame.png";
const projectsNames = [
  "SpeedGame_React",
  "TasteIT_React",
  "Countries_API_React",
  "Books_App_React_Symfony",
];

const baseUrl = "https://api.github.com/users/LinhLe2307/repos";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    languages: [],
    projectType: "",
  },
  reducers: {
    getProjects: (state, action) => {
      const projectsList = action.payload;
      const newProject = projectsList.map((project) => {
        return { ...project };
      });
      state.projects = newProject;
    },
    getLanguages: (state, action) => {
      state.languages = action.payload;
    },
    getProjectTypes: (state, action) => {
      let type = action.payload;
      if (type === 0) {
        state.projectType = "all";
      } else if (type === 1) {
        state.projectType = "react";
      } else {
        state.projectType = "symfony";
      }
    },
  },
});

export const initializeProjects = () => {
  return async (dispatch) => {
    let projects = await projectService.getAll(baseUrl);

    let newProjectsList = await projects.data.filter(
      (res) => projectsNames.indexOf(res.name) !== -1
    );

    let fetchLanguagesUrl = await Promise.all(
      newProjectsList.map((project) =>
        projectService.getAll(`${project.languages_url}`)
      )
    );

    let newLanguagesList = fetchLanguagesUrl.map((lang) => lang.data);

    dispatch(getProjects(await newProjectsList));
    dispatch(getLanguages(newLanguagesList));
  };
};

export const { getProjects, getLanguages, getProjectTypes } =
  projectsSlice.actions;
export default projectsSlice.reducer;
