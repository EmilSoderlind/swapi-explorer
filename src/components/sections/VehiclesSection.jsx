import { CardMedia, Typography } from "@mui/material";
import React from "react";

const VehiclesSection = ({ vehicles }) => (
  <div style={{ margin: "16px" }}>
    <Typography
      component="div"
      variant="h5"
      color={"white"}
      style={{ marginBottom: "8px" }}
    >
      {"Vehicles"}
    </Typography>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "16px",
      }}
    >
      {vehicles.map((vehicleUrl) => {
        const vehicleId = vehicleUrl.split("/")[5];
        return (
          <CardMedia
            component="img"
            image={require(`../../static/images/vehicles/${vehicleId}.jpg`)}
          />
        );
      })}
    </div>
  </div>
);

export default VehiclesSection;
