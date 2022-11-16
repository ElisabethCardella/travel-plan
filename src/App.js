import React from "react";
import "./App.css";
import TripPage from "./components/Trip/TripPage.tsx";
import { Routes, Route } from "react-router";
import TripsContextProvider from "./store/TripsContextProvider.tsx";
import Trips from "./components/AddTrip/Trips.tsx";

function App() {
  return (
    <TripsContextProvider>
      <Routes>
        <Route path="/trips" element={<Trips />}></Route>
        <Route path="/trips/:tripId" element={<TripPage />}></Route>
      </Routes>
    </TripsContextProvider>
  );
}

export default App;
