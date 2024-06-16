import Consultation from "@/components/Consultation";
import SlimHeading from "@/components/SlimHeading";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";

type NonEmptyArray<T> = [T, ...T[]];

const ServicePage = ({
  title,
  description,
  services,
  image,
  banner,
}: {
  title: string;
  description: string;
  services: NonEmptyArray<{ name: string; description: string }>;
  image: string;
  banner?: string;
}) => {
  function formatNum(num: number): string {
    return num.toString().padStart(2, "0");
  }

  return (
    <>
      <Head>
        <title>MediaMorphosis - {title}</title>
      </Head>

      <Box
        py={["5em", "5em", "10em"]}
        px={{ base: 8, lg: 16, "2xl": 24 }}
        backgroundImage={banner || "/assets/banner.png"}
        bgRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Box w={["100%", "100%", "60%"]}>
          <Text color={"white"} fontWeight={500} fontSize={[40, 40, 80]}>
            {title}
          </Text>
          <Text
            color={"white"}
            fontFamily={"PP Neue Montreal Book"}
            fontSize={[28, 28, 40]}
          >
            {description}
          </Text>
        </Box>
      </Box>

      <Box ml={[0, 0, 20]} mt={{ base: 10, lg: 16, "2xl": 20 }}>
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
          <GridItem w={["100%", "100%", "75%"]}>
            <TextCard
              index={formatNum(1)}
              title={services[0].name}
              description={services[0].description}
            />
          </GridItem>
          <GridItem w={["100%", "100%", "75%"]}>
            <br />
            <Image src={image} alt="Phone" />
          </GridItem>
          {services.slice(1).map((s, i) => {
            return (
              <>
                <GridItem key={i} w={["100%", "100%", "75%"]}>
                  <TextCard
                    title={s.name}
                    description={s.description}
                    index={formatNum(i + 2)}
                  />
                </GridItem>
              </>
            );
          })}
        </Grid>
      </Box>

      <Consultation />

      {/* <Box mt={{ base: 10, lg: 10, "2xl": 10 }}>
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
          <GridItem>
            <OtherSolution />
          </GridItem>
          <GridItem>
            <OtherSolution />
          </GridItem>
        </Grid>
      </Box> */}
    </>
  );
};

const TextCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: string;
}) => {
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
        {index}
      </Text>
      <Box marginTop={100} marginLeft={[5, 5, 20]}>
        <Text mb={2.5} fontWeight={500} fontSize={"30px"}>
          {title}
        </Text>
        <Text>{description}</Text>
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

export default ServicePage;
