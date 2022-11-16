import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { useEffect, useState } from "react";
import Trip from "../types/Trip";
import TripsContext from "./TripsContext";

// const TRIP1 = {
//   id: "4243535",
//   name: "Weekend 1",
//   stops: [
//     {
//       city: "Paris",
//       date: "01/01/2023",
//     },
//     {
//       city: "Colmar",
//       date: "02/01/2023",
//     },
//     {
//       city: "Basel",
//       date: "03/01/2023",
//     },
//   ],
// };

// const TRIP2 = {
//   id: "367347",
//   name: "Weekend 2",
//   stops: [
//     {
//       city: "Paris",
//       date: "01/01/2024",
//     },
//     {
//       city: "Colmar",
//       date: "15/01/2024",
//     },
//     {
//       city: "Basel",
//       date: "03/01/2024",
//     },
//   ],
// };

type Props = {
  children: ReactJSXElement;
};

const TripsContextProvider: React.FC<Props> = (props) => {
  const [trips, setTrips] = useState<Trip[]>([]);

  const url = "http://localhost:4000";
  useEffect(() => {
    fetch(url + "/trips")
      .then((response) => response.json())
      .then((data) => {
        setTrips(data);
      })
      .then((data) => console.log(data));
  }, []);

  return (
    <TripsContext.Provider
      value={{
        trips,
        setTrips: (trips: Trip[]) => {
          setTrips(trips);
        },
      }}
    >
      {/* <TripContext /> */}
      {props.children}
    </TripsContext.Provider>
  );
};

export default TripsContextProvider;
