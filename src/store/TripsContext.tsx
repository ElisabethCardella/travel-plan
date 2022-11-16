import React from "react";
import Trip from "../types/Trip";

type TripsContextInterface = {
  trips: Trip[];
  setTrips: (trips: Trip[]) => void;
};

const TripsContext = React.createContext<TripsContextInterface>({
  trips: [],
  setTrips: (trips: Trip[]) => {},
});

export default TripsContext;
