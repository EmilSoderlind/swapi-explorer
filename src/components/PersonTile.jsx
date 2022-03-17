import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import React from "react";

const PersonTile = ({ person, setActivePerson, selected = false }) => (
  <Card
    style={{
      margin: "1rem",
      backgroundColor: "black",
    }}
  >
    <CardActionArea onClick={() => setActivePerson(person)} disabled={selected}>
      <CardMedia
        component="img"
        height={"50%"}
        style={{ maxHeight: "50vh", maxWidth: "600px", margin: "auto" }}
        image={require(`../static/images/characters/${person.id}.jpg`)}
      />
      <Typography
        variant={selected ? "h3" : "h6"}
        component="div"
        color={"white"}
        style={{ marginTop: "32px" }}
      >
        {person.name}
      </Typography>
    </CardActionArea>
  </Card>
);

export default PersonTile;
