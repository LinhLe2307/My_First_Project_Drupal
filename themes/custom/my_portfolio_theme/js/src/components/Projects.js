import React, { useEffect } from "react";
import { initializeProjects } from "../features/projects/projectsSlice";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { getProjectTypes } from "../features/projects/projectsSlice";

import Project from "./Project";

const projectsTypes = ["All", "React", "Symfony"];

const projects = [
  {
    id: 1,
    name: "SpeedGame_React",
    description: "Hi",
    html_url: "null",
  },
  {
    id: 1,
    name: "TasteIT_React",
    description: "Hi",
    html_url: "null",
  },
  {
    id: 1,
    name: "Countries_API_React",
    description: "Hi",
    html_url: "null",
  },
  {
    id: 1,
    name: "Books_App_React_Symfony",
    description: "Hi",
    html_url: "null",
  },
];

const languages = [
  {
    JavaScript: 23,
    PHP: 34,
    React: 3434,
  },
  {
    JavaScript: 23,
    PHP: 34,
    React: 3434,
  },
  {
    JavaScript: 23,
    PHP: 34,
    React: 3434,
  },
  {
    JavaScript: 23,
    PHP: 34,
    React: 3434,
  },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: "1rem" }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Projects = () => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const projectType = useSelector((state) => state.projects.projectType);
  // const projects = useSelector((state) => state.projects.projects);
  // const languages = useSelector((state) => state.projects.languages);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(getProjectTypes(newValue));
  };

  // useEffect(() => {
  //   dispatch(initializeProjects());
  // }, [dispatch]);

  return (
    <div id="projects">
      <Typography
        variant="h4"
        component="div"
        sx={{
          flexGrow: 1,
          display: { sm: "block" },
          fontFamily: '"Raleway", sans-serif',
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {projectsTypes.map((projectsType, index) => (
            <Tab
              label={`${projectsType}`}
              {...a11yProps(index)}
              key={index}
              sx={{
                fontFamily: '"Raleway", sans-serif',
                textTransform: "none",
                fontSize: "1rem",
              }}
            />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={value}>
        <Box
          sx={{
            flexGrow: 1,
            paddingLeft: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing="1.5rem"
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              maxWidth: "60rem",
            }}
          >
            {projects &&
              projects
                .filter((project) =>
                  projectType === "all"
                    ? project
                    : projectType === "react"
                    ? project.name.toLowerCase().indexOf("symfony") === -1
                    : project.name
                        .toLowerCase()
                        .indexOf(projectType.toLowerCase()) !== -1
                )
                .map((project, index) => (
                  <Grid item key={index}>
                    <Project
                      project={project}
                      languageList={languages[index]}
                      key={index}
                    />
                  </Grid>
                ))}
          </Grid>
        </Box>
      </TabPanel>
    </div>
  );
};

export default Projects;
