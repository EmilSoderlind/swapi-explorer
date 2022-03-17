import { CardMedia, Typography } from "@mui/material";
import React from "react";

const HomeworldSection = ({ homeworld }) => {
  const planetId = homeworld.split("/")[5];
  return (
    <div style={{ margin: "16px" }}>
      <Typography
        component="div"
        variant="h5"
        color={"white"}
        style={{ marginBottom: "8px" }}
      >
        {"Home planet"}
      </Typography>
      <CardMedia
        component="img"
        image={require(`../../static/images/planets/${planetId}.jpg`)}
      />
    </div>
  );
};

export default HomeworldSection;
