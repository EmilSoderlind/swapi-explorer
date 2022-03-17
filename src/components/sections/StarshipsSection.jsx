import { CardMedia, Typography } from "@mui/material";
import React from "react";

const StarshipsSection = ({ starships }) => {
  return (
    <div style={{ margin: "16px" }}>
      <Typography
        component="div"
        variant="h5"
        color={"white"}
        style={{ marginBottom: "8px" }}
      >
        {"Starships"}
      </Typography>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "16px",
        }}
      >
        {starships.map((starshipUrl) => {
          const starshipId = starshipUrl.split("/")[5];
          return (
            <CardMedia
              component="img"
              image={require(`../../static/images/starships/${starshipId}.jpg`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarshipsSection;
