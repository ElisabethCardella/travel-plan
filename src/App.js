import "./App.css";
import TripPage from "./components/Trip/TripPage";
import { Routes, Route } from "react-router";
import TripsContextProvider from "./store/TripsContextProvider";
import Trips from "./components/AddTrip/Trips";

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
