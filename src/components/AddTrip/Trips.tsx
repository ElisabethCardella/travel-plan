import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";
import OverviewTrips from "./SingleTripOverview/SingleTripOverview";
import React, { useContext } from "react";
import TripsContext from "../../store/TripsContext";
import { Link } from "react-router-dom";

const Trips: React.FC = () => {
  const { trips } = useContext(TripsContext);

  return (
    <Box display="flex" width="100%" height="100vh">
      <Box
        // maxW={"330px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack textAlign={"center"} p={6} align={"center"}>
          <Text
            fontSize={"sm"}
            fontWeight={500}
            p={2}
            px={3}
            color={"green.500"}
            rounded={"full"}
          >
            Travel planner
          </Text>
        </Stack>

        <Container>
          {trips.map((trip) => {
            return (
              <Link to={`/trips/${trip._id}`}>
                <OverviewTrips key={trip._id} trip={trip} />{" "}
              </Link>
            );
          })}
        </Container>

        <Button
          marginLeft="25%"
          marginRight="auto"
          //   flex="display"
          //   alignItems="center"
          //   justifyContent="center"
          //   textAlign="center"
          height="100px"
          //   margin="auto"
          border="1px"
          borderColor="gray.200"
          w={"50%"}
          bg={"green.400"}
          color={"white"}
          rounded={"xl"}
          boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
          _hover={{
            bg: "green.500",
          }}
          _focus={{
            bg: "green.500",
          }}
        >
          <AddIcon w={6} h={6} />
          <br></br>
          Add the new trip
        </Button>
      </Box>
    </Box>
  );
};

export default Trips;
