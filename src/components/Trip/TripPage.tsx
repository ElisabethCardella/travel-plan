import React, { useContext, useState } from "react";
import TripsContext from "../../store/TripsContext";
import Trip from "../../types/Trip";
import { useParams } from "react-router-dom";
import "@fontsource/roboto/300.css";
// import { Alert } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { ThemeProvider } from "@mui/material/styles";
// import { green } from "@mui/material/colors";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Container } from "@mui/system";
import { format } from "date-fns";

// import { Typography } from "@mui/material";

const TripPage = () => {
  const { tripId } = useParams();
  const { trips, setTrips } = useContext(TripsContext);
  const openedTrip: Trip = trips.find(({ _id }) => _id === tripId) as Trip;

  const [trip, setTrip] = useState<Trip>(openedTrip);

  const [cityName, setCityNameStopChanged] = useState("");
  const [newDate, setNewDateChanged] = React.useState(new Date());

  const nameTripChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTrip({
      ...trip,
      name: event.target.value,
    });
  };

  const cityNameStopChangeHandle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCityNameStopChanged(event.target.value);
  };
  const newDateChangeHandle = (updatedDate: string | null) => {
    console.log(updatedDate as any);
    if (updatedDate !== null) {
      setNewDateChanged(new Date(updatedDate));
    }

    // setNewDateChanged(event.target.value);
  };

  const AddStopHandle = () => {
    setTrip({
      ...trip,
      stops: [
        ...trip.stops,
        {
          city: cityName,
          date: newDate.toISOString(),
        },
      ],
    });
    // console.log("helloooooo");
  };

  return (
    <Container>
      <Box width="100%">
        <Stack
          spacing={2}
          alignItems="center"
          border-radius="1px"
          borderColor="green"
          color="green"
        >
          <h4>Travel planner</h4>

          <Stack
            spacing={1}
            // alignItems="Center"
            margin="40px"
            width="90%"

            // direction={"row"}
            // align={"center"}
            // justify={"center"}
            // borderColor={"transparent"}
          >
            <TextField
              value={trip?.name}
              onChange={nameTripChangeHandle}
              InputProps={{
                inputProps: {
                  style: { textAlign: "center" },
                },
              }}
            />
          </Stack>
        </Stack>

        <Box
          width="100%"
          borderRadius={20}
          marginTop="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          // overflow="hidden"
        >
          <iframe
            title="myMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
          />
        </Box>

        <Box px={2} py={2}>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              paddingBottom: "2px",
            }}
          >
            {trip?.stops?.map((stop, index) => {
              return (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={stop.city}
                    secondary={format(new Date(stop.date), "MM/dd/yyyy")}
                  />
                </ListItem>
              );
            })}
          </List>

          <Stack mt={3} spacing={2}>
            <Stack spacing={3} margin-top="20px">
              <TextField
                label="Enter the city name"
                value={cityName}
                onChange={cityNameStopChangeHandle}
                InputProps={{
                  readOnly: false,
                }}
              />
            </Stack>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={format(new Date(newDate), "MM/dd/yyyy")}
                onChange={newDateChangeHandle}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <Button variant="contained" color="success" onClick={AddStopHandle}>
              Add the new stop 2
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default TripPage;
