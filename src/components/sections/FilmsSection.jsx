import { CardMedia, Typography } from "@mui/material";
import React from "react";

const FilmsSection = ({ films }) => (
  <div style={{ margin: "16px" }}>
    <Typography
      component="div"
      variant="h5"
      color={"white"}
      style={{ marginBottom: "8px" }}
    >
      {"Films"}
    </Typography>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "16px",
      }}
    >
      {films.map((filmUrl) => {
        const filmId = filmUrl.split("/")[5];
        return (
          <CardMedia
            component="img"
            image={require(`../../static/images/films/${filmId}.jpg`)}
          />
        );
      })}
    </div>
  </div>
);

export default FilmsSection;
