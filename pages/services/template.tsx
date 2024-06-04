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
  Image,
  Divider,
} from "@chakra-ui/react";
import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>MediaMorphosis - Services</title>
      </Head>

      {/* <Box mt={{ base: 10, lg: 16, "2xl": 20 }}>
        <SlimHeading w="100%" textAlign="center">
          Digital Solutions Tailored for&nbsp;
          <Italic>Impact</Italic>
        </SlimHeading>
      </Box> */}

      <Box
        py={['5em','5em',"10em"]}
        px={{ base: 8, lg: 16, "2xl": 24 }}
        backgroundImage={"/assets/banner.png"}
        bgRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Box w={["100%", "100%", "60%"]}>
          {/* <Image objectFit={"cover"} src="/assets/banner.png" alt="banner" /> */}
          <Text color={"white"} fontWeight={500} fontSize={[40, 40, 80]}>
            Web Development
          </Text>
          <Text
            color={"white"}
            fontFamily={"PP Neue Montreal Book"}
            fontSize={[28, 28, 40]}
          >
            Craft an App That Puts Your Business in Everyone&apos;s Pocket.
          </Text>
        </Box>
      </Box>

      <Box mt={{ base: 10, lg: 16, "2xl": 20 }}>
        <Grid
          px={{ base: 8, lg: 16, "2xl": 24 }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
          }}
          mx={"25px"}
          gap={[10, 10, 50]}
          mt={{ base: 10, lg: 16, "2xl": 20 }}
          gridAutoRows="auto"
          pb={{ base: 10, lg: 4, "2xl": 0 }}
          mb={10}
        >
          {/* {cards.map((card) => (
            <ServiceCard key={card[0]} card={card} />
          ))} */}
          <GridItem w={["100%", "100%", "75%"]}>
            <TextCard />
          </GridItem>
          <GridItem w={["100%", "100%", "75%"]}>
            <Image src="/assets/services/phone.png" alt="Phone" />
          </GridItem>{" "}
          <GridItem w={["100%", "100%", "75%"]}>
            <TextCard />
          </GridItem>{" "}
          <GridItem w={["100%", "100%", "75%"]}>
            <TextCard />
          </GridItem>
        </Grid>
      </Box>

      <Consultation />

      <Box mt={{ base: 10, lg: 10, "2xl": 10 }}>
        <Divider mx={{ base: 23, lg: 31, "2xl": 39 }} />
        <br />
        <br />
        <SlimHeading w="100%" textAlign="center">
          Other Solutions
        </SlimHeading>

        <Grid
          px={{ base: 8, lg: 16, "2xl": 24 }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
          }}
          mx={"25px"}
          gap={[20]}
          mt={{ base: 10, lg: 16, "2xl": 20 }}
          gridAutoRows="auto"
          pb={{ base: 10, lg: 4, "2xl": 0 }}
          mb={10}
        >
          {/* {cards.map((card) => (
            <ServiceCard key={card[0]} card={card} />
          ))} */}
          <GridItem>
            <OtherSolution />
          </GridItem>
          <GridItem>
            <OtherSolution />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

const TextCard = () => {
  return (
    <Box position={"relative"}>
      <Text
        position={"absolute"}
        left={-7}
        fontSize={150}
        fontFamily="PP Neue Editorial"
        fontStyle={"italic"}
        color={"#FB3B3B33"}
        top={"-80px"}
      >
        01
      </Text>
      <Box marginTop={100} marginLeft={[5, 5, 20]}>
        <Text mb={2.5} fontWeight={500} fontSize={"30px"}>
          FlowNote: SaaS tool for Web Design
        </Text>
        <Text>
          Our app development service turns your ideas into intuitive,
          user-friendly mobile applications that stand out in crowded
          marketplaces. Whether it&apos;s for iOS, Android, or cross-platform
          solutions, we focus on creating apps that offer engaging user
          experiences, seamless functionality, and real-time performance
        </Text>
      </Box>
    </Box>
  );
};

const OtherSolution = () => {
  return (
    <Box minH={"25em"} position={"relative"}>
      <Box
        padding={"1.25em"}
        background={"#E7EAF2"}
        rounded={"xl"}
        aspectRatio={1.5}
        w={"70%"}
      >
        <Flex justifyContent={"space-between"} align="center">
          <Text lineHeight={"40px"} fontSize="34px" fontWeight={415} flex="1">
            Web Development
          </Text>
          <Flex justify="flex-end" flex="1">
            <Image w="3em" src="/assets/services/webd.png" alt="Icon" />
          </Flex>
        </Flex>
        <Text mt={3} fontWeight={400} fontSize={20}>
          Bring Your Online Space to Life with a Stunning Website
        </Text>
      </Box>
      <Flex
        justify={"flex-end"}
        ml={"-2em"}
        marginTop={["-1em", "-2em", "-4em"]}
      >
        <Image
          w="70%"
          src="/assets/services/webd-banner.png"
          alt="webd banner"
        />
      </Flex>
    </Box>
  );
};

export default Services;
