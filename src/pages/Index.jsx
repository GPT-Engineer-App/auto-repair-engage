import React, { useState } from "react";
import { Box, Heading, Text, Button, Image, Grid, GridItem, Input, Textarea, Select, Flex, IconButton, Avatar, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure } from "@chakra-ui/react";
import { FaCar, FaTools, FaCalendar, FaUser, FaComments } from "react-icons/fa";

const services = ["Oil Change", "Brake Service", "Tire Rotation", "Engine Tune-up", "Wheel Alignment"];

const Index = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleBooking = () => {
    // TODO: Implement booking logic
    console.log("Booking submitted:", {
      service: selectedService,
      date: selectedDate,
      name,
      email,
    });
  };

  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" padding={4} bg="gray.100">
        <Heading as="h1" size="xl">
          Southside Auto Repair
        </Heading>
        <IconButton icon={<FaUser />} variant="outline" aria-label="User Profile" onClick={onOpen} />
      </Flex>

      {/* Hero Section */}
      <Box backgroundImage="https://images.unsplash.com/photo-1618312980096-873bd19759a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwc2hvcHxlbnwwfHx8fDE3MTI1Mzc4OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" backgroundSize="cover" backgroundPosition="center" py={20} textAlign="center" color="white">
        <Heading as="h2" size="2xl" mb={4}>
          Quality Auto Repair Services
        </Heading>
        <Text fontSize="xl" mb={8}>
          Expert mechanics dedicated to keeping your vehicle in top shape.
        </Text>
        <Button colorScheme="blue" size="lg">
          Book an Appointment
        </Button>
      </Box>

      {/* Services Section */}
      <Box py={20}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Our Services
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={8}>
          {services.map((service) => (
            <GridItem key={service} textAlign="center">
              <Box borderWidth={1} borderRadius="lg" p={6} boxShadow="md" transition="all 0.3s" _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}>
                <Image src={`https://placehold.co/600x400`} alt={service} mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  {service}
                </Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* Booking Section */}
      <Box py={20} bg="gray.100">
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Book an Appointment
        </Heading>
        <Flex justify="center">
          <Box width="400px">
            <Select placeholder="Select a service" mb={4} value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </Select>
            <Input type="date" mb={4} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            <Input placeholder="Name" mb={4} value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Email" mb={4} value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button colorScheme="blue" onClick={handleBooking}>
              Submit Booking
            </Button>
          </Box>
        </Flex>
      </Box>

      {/* Chat Bot Section */}
      <Box position="fixed" bottom={4} right={4} borderWidth={1} borderRadius="full" p={4} boxShadow="lg" cursor="pointer" onClick={onOpen}>
        <FaComments size={24} />
      </Box>

      {/* User Profile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>User Profile</DrawerHeader>
          <DrawerBody>
            <Flex align="center" mb={4}>
              <Avatar size="lg" mr={4} />
              <Box>
                <Heading as="h3" size="md">
                  John Doe
                </Heading>
                <Text>john.doe@example.com</Text>
              </Box>
            </Flex>
            <Heading as="h4" size="md" mb={2}>
              Invoice History
            </Heading>
            {/* TODO: Display invoice history */}
            <Heading as="h4" size="md" mb={2}>
              Repair Recommendations
            </Heading>
            {/* TODO: Display repair recommendations */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Index;
