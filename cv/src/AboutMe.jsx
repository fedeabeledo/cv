import React from "react";
import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import { School, Work } from "@mui/icons-material";
import { ExperienceCard } from "./ExperienceCard.jsx";
import { EducationCard } from "./EducationCard.jsx";

export const AboutMe = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      maxWidth={"800px"}
      gap={3}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        maxWidth={"800px"}
        gap={1}
      >
        <Box display={"flex"} flexDirection="row" gap={2}>
          <PersonIcon sx={{ fontSize: 30, color: "#677d6a" }} />
          <Typography variant="h5" align="center">
            <strong>About Me</strong>
          </Typography>
        </Box>
        <Typography variant="body1" align="justify">
          I am a computer enthusiast and researcher of new technologies. I enjoy
          delving into familiar areas, which allows me to develop my creativity
          and critical thinking. I am a quick learner, always willing to acquire
          new skills and knowledge to efficiently face technological challenges.
          Detail-oriented and committed, I like to do things right and make sure
          that each project is of the highest possible standard.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        maxWidth={"800px"}
        gap={1}
      >
        <Box display={"flex"} flexDirection="row" gap={2}>
          <Work sx={{ fontSize: 30, color: "#677d6a" }} />
          <Typography variant="h5" align="center">
            <strong>Experience</strong>
          </Typography>
        </Box>
        <ExperienceCard />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        maxWidth={"800px"}
        gap={1}
      >
        <Box display={"flex"} flexDirection="row" gap={2}>
          <School sx={{ fontSize: 30, color: "#677d6a" }} />
          <Typography variant="h5" align="center">
            <strong>Education</strong>
          </Typography>
        </Box>
        <EducationCard />
      </Box>
    </Box>
  );
};
