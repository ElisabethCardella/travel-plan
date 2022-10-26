import React from "react";

const TripsContext = React.createContext({
  trips: [],
  setTrips: () => {},
});

export default TripsContext;
