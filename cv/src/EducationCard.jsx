import { Box, Typography } from "@mui/material";
import { CircularProgressWithLabel } from "./CircularProgressWithLabel.jsx";

export const EducationCard = () => {
  return (
    <Box className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhxIAvfGuy1fJP2SbILWDYqDk67O7gLmW1A&s"
        alt="UADE logo"
        width={"50px"}
      />
      <Typography variant="h6" align="center">
        <strong>Engineering Degree in Computer Science</strong>
      </Typography>
      <Typography variant="caption">
        <strong>Universidad Argentina de la Empresa</strong>
      </Typography>
      <Typography variant="caption" alignItems="center" my="0.5rem">
        <strong> 📅 March 2022 - Present</strong>
      </Typography>
      <Typography variant="caption" alignItems="center" mt="0.5rem" mb="1rem">
        <strong> 📚 22/52 </strong>approved subjects
      </Typography>
      <CircularProgressWithLabel value={43} color="success" />
    </Box>
  );
};
