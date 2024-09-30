import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import petshopImage from "./assets/img/petshop.jpg";
import universityRegistrationSystemImage from "./assets/img/university-registration-system.jpg";
import trilaterationImage from "./assets/img/trilateration.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Patitas Peludas Backend",
      description:
        "Implementation of a secure and efficient system to manage products, users and orders, as well as a RESTful API for communication with the frontend",
      skills: ["Java", "Spring Boot", "JWT", "MySQL"],
      image: petshopImage,
      imageText: "Petshop",
      link: "https://github.com/fedeabeledo/backend-api-grupo-seis",
    },
    {
      title: "Registration System",
      description:
        "An integrated platform for educational institutions that streamlines course registration, enrollment, tracking, and payments, with interconnected modules ensuring efficient workflows and unit testing for reliability",
      skills: ["Java", "Spring Boot", "Unit testing"],
      image: universityRegistrationSystemImage,
      imageText: "University Registration System",
      link: "https://github.com/valentincampestri/Registration-system-for-universities",
    },
    {
      title: "Trilateration",
      description:
        "Developing a trilateration solution that calculates the intersection of three circles based on their coordinates and radius, using mathematical algorithms to determine the precise location.",
      skills: ["Java", "Spring Boot"],
      image: trilaterationImage,
      imageText: "Trilateration",
      link: "https://github.com/rrrrho/tpo-poo",
    },
  ];

  return (
    <Box>
      <Grid container spacing={2} justifyContent="left">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ minHeight: 390, width: "70%", backgroundColor: "#1a1a1a" }}
            >
              <CardActionArea
                sx={{ height: "100%" }}
                href={project.link}
                target="_blank"
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.imageText}
                />
                <CardContent>
                  <Typography
                    color={"white"}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "white", textAlign: "left" }}
                  >
                    {project.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    my={1}
                    sx={{ color: "white", textAlign: "left" }}
                  >
                    <strong>Skills:</strong> {project.skills.join(", ")}.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
