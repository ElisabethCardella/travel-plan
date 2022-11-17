import { Center, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Trip from "../../../types/Trip";
// import { useContext } from 'react';
// import TripsContext from '../../../store/TripsContext';

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { format } from "date-fns";

type Props = {
  trip: Trip;
};

const SingleTripOverview: React.FC<Props> = ({ trip }) => {
  const theme = useTheme();
  // const {trips, setTrips} = useContext(TripsContext)

  // const trip = trips[0]

  return (
    <Card
      sx={{
        display: "flex",
        boxShadow: 2,
        borderRadius: 2,
        fontSize: "0.875rem",
        margin: "20px",
      }}
    >
      <Stack sx={{ display: "flex" }}>
        <CardContent>
          <Typography variant="h5">{trip.name}</Typography>
          <Text>
            From {format(new Date(trip.stops[0].date), "MM/dd/yyyy")} to{" "}
            {format(
              new Date(trip.stops[trip.stops.length - 1].date),
              "MM/dd/yyyy"
            )}
          </Text>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Stack>
      {/* <Box
        component="img"
        sx={{
          height: 150,
          width: 200,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://img.freepik.com/photos-gratuite/concept-voyage-bagages_23-2149153260.jpg?2&w=826&t=st=1668696944~exp=1668697544~hmac=48beb8fb9569c73b7939159fb8a2f5787b6047365065b70b223be95cffa802ec"
      /> */}
    </Card>

    // <Center py={6}>
    //   <Box
    //     maxW={"100%"}
    //     // w={"full"}
    //     boxShadow={"2xl"}
    //     rounded={"md"}
    //     overflow={"hidden"}
    //   >
    //     <Stack textAlign={"center"} p={6} align={"center"}>
    //       <Stack direction={"row"} align={"center"} justify={"center"}>
    //         <Text fontSize={"5xl"} fontWeight={700}>
    //           {trip.name}
    //         </Text>
    //       </Stack>
    //       <Stack direction={"row"} align={"center"} justify={"center"}>
    //         <Text fontSize={"2xl"} fontWeight={700}>
    //           From {trip.stops[0].date} to{" "}
    //           {trip.stops[trip.stops.length - 1].date}
    //         </Text>
    //       </Stack>
    //     </Stack>
    //   </Box>
    // </Center>
  );
};

export default SingleTripOverview;
