import { Box, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Trip from "../../../types/Trip";
// import { useContext } from 'react';
// import TripsContext from '../../../store/TripsContext';

type Props = {
  trip: Trip;
};

const SingleTripOverview: React.FC<Props> = ({ trip }) => {
  // const {trips, setTrips} = useContext(TripsContext)

  // const trip = trips[0]

  return (
    <Center py={6}>
      <Box
        maxW={"100%"}
        // w={"full"}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack textAlign={"center"} p={6} align={"center"}>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"5xl"} fontWeight={700}>
              {trip.name}
            </Text>
          </Stack>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"2xl"} fontWeight={700}>
              From {trip.stops[0].date} to{" "}
              {trip.stops[trip.stops.length - 1].date}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default SingleTripOverview;
