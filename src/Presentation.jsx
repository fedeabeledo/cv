import {
  Avatar,
  Box,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import { transform } from "framer-motion";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import avatar from "./assets/img/avatar.png";
import cv from "./assets/Federico_Abeledo_Resume.pdf";

export const Presentation = () => {
  const [selected, setSelected] = useState("about");

  const buttonStyle = {
    color: "#fff",
    borderWidth: 0,
    fontWeight: 600,
    backgroundColor: "#677D6A",
    opacity: 0.9,
    transition:
      "transform 0.7s ease, background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
      backgroundColor: "#40534C",
      borderWidth: 0,
      opacity: 1,
      color: "#fff",
      transform: "scale(1.1)",
    },
    "&.Mui-selected": {
      backgroundColor: "#40534C",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#40534C",
        transform: "scale(1)",
      },
    },
  };

  return (
    <Box
      h="50vh"
      w="100%"
      display="flex"
      gap={3}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          alt="Federico Abeledo avatar"
          src={avatar}
          sx={{ width: 120, height: 120 }}
        />
        <h2 className="profile-name">Federico Abeledo</h2>
        <h3 className="profession">Software Developer</h3>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <a
          href="https://github.com/fedeabeledo"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/federico-abeledo/"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://wa.me/5491153230016"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <WhatsAppIcon />
        </a>
        <a
          href="mailto:fedeabeledo01@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <EmailIcon />
        </a>
      </Box>
      <a href={cv} download="Federico_Abeledo_Resume.pdf">
        <Button variant="outlined" sx={buttonStyle} endIcon={<DownloadIcon />}>
          Download Resume
        </Button>
      </a>
      <ToggleButtonGroup
        color="primary"
        value={selected}
        exclusive
        onChange={(event, newAlignment) => setSelected(newAlignment)}
        aria-label="Platform"
      >
        <ToggleButton value="about" sx={buttonStyle}>
          About Me
        </ToggleButton>
        <ToggleButton value="skills" sx={buttonStyle}>
          Skills
        </ToggleButton>
        <ToggleButton value="projects" sx={buttonStyle}>
          Projects
        </ToggleButton>
      </ToggleButtonGroup>
      {selected === "about" && <AboutMe />}
      {selected === "skills" && <Skills />}
      {selected === "projects" && <Projects />}
    </Box>
  );
};
