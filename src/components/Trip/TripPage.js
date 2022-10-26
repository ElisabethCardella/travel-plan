import React, { useContext, useState } from "react";
import {
  List,
  ListItem,
  ListIcon,
  Box,
  Button,
  Center,
  Stack,
  Text,
  Input,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { AspectRatio } from "@chakra-ui/react";
import TripsContext from "../../store/TripsContext";
import { useParams } from 'react-router-dom';



const TripPage = () => {
  const { tripId } = useParams();
  const {trips, setTrips} = useContext(TripsContext)

  const trip = trips.find(({id}) => id === tripId)

  const [cityName, setCityNameChanged] = useState("");
  const [newDate, setNewDateChanged] = useState("");

  const handleCityNameChange = (event) => {
    console.log(event.target.value);
    setCityNameChanged(event.target.value);
  };
  const handleNewDateChange = (event) => {
    setNewDateChanged(event.target.value);
  };
  const handleAdd = () => {
    setTrips([{
      ...trip,
      stops: [
        ...trip.stops,
        {
          city: cityName,
          date: newDate,
        },
      ],
    }]);
  };

  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
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
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"5xl"} fontWeight={700}>
              {trip.name}
            </Text>
          </Stack>
        </Stack>
        <AspectRatio borderRadius="lg" ratio={16 / 9}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
        </AspectRatio>

        <Box px={6} py={10}>
          <List spacing={3}>
            {trip.stops.map((stop, index) => {
              // Alternative:
              // return JSON.stringify(stop);
              return (
                <ListItem key={index}>
                  <Box display="flex">
                    <ListIcon as={CheckIcon} color="green.400" />
                    <Text fontWeight="semibold"> {stop.city}</Text>
                  </Box>
                  <Text>date: {stop.date}</Text>
                </ListItem>
              );
            })}
          </List>

          <Box mt={16}>
            <Input
              border="1px"
              borderColor="gray.200"
              type="text"
              value={cityName}
              onChange={handleCityNameChange}
              placeholder="Name of the stop"
            />
            <Input type="date" value={newDate} onChange={handleNewDateChange} />
            <Button
              border="1px"
              borderColor="gray.200"
              onClick={handleAdd}
              mt={2}
              w={"full"}
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
              Add the new stop
            </Button>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default TripPage;
