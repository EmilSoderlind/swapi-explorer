import { Fab } from "@mui/material";
import React, { useEffect } from "react";
import PersonTile from "./PersonTile";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import QuickInfoSection from "./sections/QuickInfoSection.jsx";
import FilmsSection from "./sections/FilmsSection.jsx";
import HomeworldSection from "./sections/HomeworldSection.jsx";
import VehiclesSection from "./sections/VehiclesSection";
import StarshipsSection from "./sections/StarshipsSection";

const Person = ({ person, clearSelectedPerson }) => {
  useEffect(() => {
    console.log("Trying to scroll to topppp");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: "80px" }}>
      <PersonTile person={person} selected={true} />
      <hr />
      <QuickInfoSection person={person} />
      <hr />
      <FilmsSection films={person.films} />
      {person.homeworld && (
        <>
          <hr />
          <HomeworldSection homeworld={person.homeworld} />
        </>
      )}
      {person.vehicles.length && (
        <>
          <hr />
          <VehiclesSection vehicles={person.vehicles} />
        </>
      )}
      {person.starships.length && (
        <>
          <hr />
          <StarshipsSection starships={person.starships} />
        </>
      )}

      <hr style={{ marginBottom: "64px" }} />

      <Fab
        color="white"
        aria-label="add"
        onClick={() => clearSelectedPerson()}
        style={{ position: "fixed", top: "16px", left: "16px" }}
        variant="extended"
      >
        <ArrowCircleLeftIcon style={{ marginRight: "8px" }} />
        Back
      </Fab>
    </div>
  );
};

export default Person;
