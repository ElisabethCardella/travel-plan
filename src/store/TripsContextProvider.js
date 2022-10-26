import React, { useState } from "react";
import TripsContext from "./TripsContext";

const TRIP1 = {
    id: '4243535',
    name: "Weekend 1",
    stops: [
      {
        city: "Paris",
        date: "01/01/2023",
      },
      {
        city: "Colmar",
        date: "02/01/2023",
      },
      {
        city: "Basel",
        date: "03/01/2023",
      },
    ],
  };

  const TRIP2 = {
    id: '367347',
    name: "Weekend 2",
    stops: [
      {
        city: "Paris",
        date: "01/01/2024",
      },
      {
        city: "Colmar",
        date: "15/01/2024",
      },
      {
        city: "Basel",
        date: "03/01/2024",
      },
    ],
  };

const TripsContextProvider = (props) => {
  const [trips, setTrips] = useState([TRIP1, TRIP2])

  return (
    <TripsContext.Provider value={{ trips, setTrips }}>
      {/* <TripContext /> */}
      {props.children}
    </TripsContext.Provider>
  );
};

export default TripsContextProvider;
