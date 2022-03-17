import { Button, CircularProgress } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonTile from "./PersonTile";

const PeopleGrid = ({
  setActivePerson,
  persons,
  loading,
  getMore,
  allPagesLoaded,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        {persons.map((person) => (
          <PersonTile
            key={person.name}
            person={person}
            setActivePerson={setActivePerson}
          />
        ))}
      </div>
      <div style={{ margin: "1rem" }}>
        {loading ? (
          <CircularProgress style={{ color: "white" }} />
        ) : (
          <Button
            startIcon={<ExpandMoreIcon />}
            onClick={() => !allPagesLoaded && getMore()}
            loading={loading}
            style={{ color: "white" }}
          >
            {allPagesLoaded ? "NO MORE PAGES" : "MORE"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PeopleGrid;
