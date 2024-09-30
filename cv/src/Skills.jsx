import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid";

export const Skills = () => {
  const technologies1 = ["CSS", "Flask", "HTML", "Java"];
  const technologies2 = ["Python", "SpringBoot", "SQL", "JavaScript"];

  const tools = ["Linux", "Git", "Postman"];
  const languages = ["English", "Spanish"];

  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Grid container spacing={8} justifyContent="center">
        {/* Columna para Technologies y Tools */}
        <Grid item xs={12} md={6}>
          <Box mb={2}>
            {/* Technologies */}
            <Typography variant="h6" align="center">
              Technologies
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <List>
                  {technologies1.map((technology) => (
                    <ListItem key={technology}>
                      <ListItemIcon sx={{ minWidth: "30px" }}>
                        <CheckCircleIcon sx={{ color: "#677D6A" }} />
                      </ListItemIcon>
                      <ListItemText primary={technology} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6} mb={4}>
                <List>
                  {technologies2.map((technology) => (
                    <ListItem key={technology}>
                      <ListItemIcon sx={{ minWidth: "30px" }}>
                        <CheckCircleIcon sx={{ color: "#677D6A" }} />
                      </ListItemIcon>
                      <ListItemText primary={technology} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>

            {/* Tools */}
            <Typography variant="h6" align="center">
              Tools
            </Typography>
            <List>
              {tools.map((tool) => (
                <ListItem key={tool}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <CheckCircleIcon sx={{ color: "#677D6A" }} />
                  </ListItemIcon>
                  <ListItemText primary={tool} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Columna para Languages */}
        <Grid item xs={12} md={6}>
          <Box mb={2}>
            <Typography variant="h6" align="center">
              Languages
            </Typography>
            <List>
              {languages.map((language) => (
                <ListItem key={language}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <CheckCircleIcon sx={{ color: "#677D6A" }} />
                  </ListItemIcon>
                  <ListItemText primary={language} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
