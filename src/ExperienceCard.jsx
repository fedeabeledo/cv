import { CalendarMonth } from "@mui/icons-material";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

export const ExperienceCard = () => {
  return (
    <Box className="card">
      <img src="/buerentals.jpeg" alt="Buerentals logo" width={"50px"} />
      <Typography variant="h6" align="center">
        <strong>Collections management</strong>
      </Typography>
      <Typography variant="caption">
        <strong>Buerentals</strong> | Part time
      </Typography>
      <Typography variant="caption" alignItems="center" mt="0.5rem">
        <strong> 📅 July 2022 - June 2023</strong>
      </Typography>
      <List>
        <ListItem>
          <span style={{ marginRight: "0.5rem", fontSize: "14px" }}>•</span>
          <ListItemText primary="Responsible for contacting customers who have made reservations" />
        </ListItem>
        <ListItem>
          <span style={{ marginRight: "0.5rem", fontSize: "14px" }}>•</span>
          <ListItemText primary="Resolving questions from clients prior to their stay" />
        </ListItem>
        <ListItem>
          <span style={{ marginRight: "0.5rem", fontSize: "14px" }}>•</span>
          <ListItemText primary="Using Excel to manage and organize customer and reservation information" />
        </ListItem>
        <ListItem>
          <span style={{ marginRight: "0.5rem", fontSize: "14px" }}>•</span>
          <ListItemText primary="Effective communication with customers to ensure a satisfactory experience" />
        </ListItem>
      </List>
    </Box>
  );
};
