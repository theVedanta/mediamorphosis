import Consultation from "@/components/Consultation";
import Italic from "@/components/Italic";
import SlimHeading from "@/components/SlimHeading";
import { cards } from "@/content";
import {
  As,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>MediaMorphosis - Services</title>
      </Head>

      <Box mt={{ base: 10, lg: 16, "2xl": 20 }}>
        <SlimHeading w="100%" textAlign="center">
          Digital Solutions Tailored for&nbsp;
          <Italic>Impact</Italic>
        </SlimHeading>

        <Grid
          px={{ base: 8, lg: 16, "2xl": 24 }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(3, 1fr)",
          }}
          gap={{ base: 6, lg: 8, "2xl": 12 }}
          mt={{ base: 10, lg: 16, "2xl": 20 }}
          gridAutoRows="auto"
          pb={{ base: 10, lg: 4, "2xl": 0 }}
        >
          {cards.map((card) => (
            <ServiceCard key={card[0]} card={card} />
          ))}
        </Grid>
      </Box>
      <Consultation />
    </>
  );
};

const ServiceCard = ({
  card,
}: {
  card: [string, As, string, string, string];
}) => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem cursor="pointer" minH="100%" key={card[0]}>
        <Link _hover={{ opacity: 0.6 }} href={`/services${card[4]}`}>
          <Flex
            bg={colorMode === "light" ? "lightGray" : "darkGray"}
            color={colorMode === "light" ? "#18161A" : "#A39595"}
            borderRadius="14px"
            border={`1px solid ${
              colorMode === "light" ? "#18161A" : "#A39595"
            }`}
            px={{ base: 7, lg: 8, "2xl": 10 }}
            py={{ base: 7, lg: 8 }}
            direction="column"
            h="100%"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Heading
                letterSpacing="0"
                width="70%"
                noOfLines={2}
                fontSize={{
                  base: "1.2rem",
                  sm: "2rem",
                }}
                fontWeight={600}
              >
                {card[0].split(" ")[0]}
                {card[0].split(" ") && (
                  <>
                    <br />
                    {card[0].split(" ")[1]}
                  </>
                )}
              </Heading>

              <Icon
                boxSize={{
                  base: "2rem",
                  sm: "3rem",
                }}
                as={card[1]}
              />
            </Flex>

            <Text
              fontSize={{ base: 14, lg: 18, "2xl": 20 }}
              mt={{ base: 3, lg: 5, "2xl": 6 }}
              fontWeight={400}
            >
              {card[2]}
            </Text>
          </Flex>
        </Link>
      </GridItem>

      {/* <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
        border={
            colorMode === "light" ? "1px solid #18161A" : "1px solid #A39595"
          }
          px={6}
          py={4}
          pb={8}
          bg={colorMode === "light" ? "lightGray" : "darkGray"}
          color={colorMode === "light" ? "#18161A" : "#ccc"}
          borderRadius="14px"
        >
          <ModalHeader display="flex" alignItems="center">
            <Icon boxSize="2rem" as={card[1]} mr={5} />
            <Heading size="lg">{card[0]}</Heading>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>{card[3]}</ModalBody>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default Services;
