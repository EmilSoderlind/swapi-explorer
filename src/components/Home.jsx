import React, { useState } from "react";
import { usePersonList } from "../hooks";
import PeopleGrid from "./PeopleGrid";
import Person from "./Person";

const Home = () => {
  const { getMore, persons, loading, allPagesLoaded } = usePersonList();
  const [activePerson, setActivePerson] = useState();

  return (
    <div
      style={{
        backgroundColor: "black",
      }}
    >
      {activePerson ? (
        <Person
          person={activePerson}
          clearSelectedPerson={() => setActivePerson()}
        />
      ) : (
        <PeopleGrid
          setActivePerson={setActivePerson}
          persons={persons}
          getMore={getMore}
          loading={loading}
          allPagesLoaded={allPagesLoaded}
        />
      )}
    </div>
  );
};

export default Home;
