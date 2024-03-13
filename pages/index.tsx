import Head from "next/head";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Consultation from "@/components/Consultation";
import Italic from "@/components/Italic";
import { MapPin } from "react-feather";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Carousel from "@/components/Carousel";

export default function Home() {
    return (
        <>
            <Head>
                <title>MediaMorphosis</title>
                <meta
                    name="description"
                    content="A marketing company based in New York"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main>
                <Box
                    width="100vw"
                    height="85vh"
                    className="container hero-section"
                >
                    <Box
                        position="relative"
                        width="100%"
                        height="100%"
                        px={{ base: 6, sm: 20 }}
                        py={{ base: 6, sm: 32 }}
                    >
                        <Image
                            style={{
                                position: "absolute",
                                zIndex: -1,
                                top: 0,
                                left: 0,
                                borderRadius: "30px",
                                filter: "brightness(40%)",
                            }}
                            fill
                            src="/assets/hero.gif"
                            alt="background"
                            loading="eager"
                            objectFit="cover"
                        ></Image>

                        <Box
                            pl={{ base: 4, sm: 8 }}
                            pt={{ base: 4, sm: 8 }}
                            bg="black"
                            position="absolute"
                            bottom={0}
                            right={0}
                            w={{ base: "72vw", sm: "40vw" }}
                            borderRadius="20px 0 0 0"
                        >
                            <Box
                                bg="gray"
                                p={{ base: 4, sm: 8 }}
                                borderRadius="20px 0 0 20px"
                            >
                                <Text
                                    fontSize={{ base: "0.7rem", sm: "large" }}
                                >
                                    A Full-Service Technology Powerhouse in NYC
                                    with a Rich Advertising Heritage.
                                    Specializing in crafting innovative software
                                    and digital solutions, we excel at driving
                                    consumer engagement through cutting-edge
                                    technology. Our expertise in seamless
                                    integration of advertising strategies with
                                    technology-driven campaigns propels business
                                    growth, optimizing for scalability and cost
                                    efficiency while engaging audiences in
                                    meaningful ways.
                                </Text>
                            </Box>
                        </Box>

                        <Box
                            w={{ base: "100%", sm: "60%" }}
                            h="100%"
                            mt={{ base: 10, sm: 0 }}
                        >
                            <Heading
                                size={{ base: "xl", sm: "4xl" }}
                                fontWeight={500}
                            >
                                <Italic>Digital Innovation</Italic>
                                &nbsp;at the crossroads of cultures.
                            </Heading>
                            <Text
                                fontSize={{ base: "sm", sm: "xl" }}
                                mt={{ base: 3, sm: 6 }}
                                w={{ base: "100%", sm: "70%" }}
                            >
                                Fueling Customer Engagement Through Data-Driven
                                Digital Solutions, Harnessing Analytics for
                                Unparalleled Viral Growth
                            </Text>
                            <Link href="/">
                                <Button mt={{ base: 6, sm: 14 }}>
                                    Get Started
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>

                {/* 
                <Flex
                    className="container"
                    alignItems="center"
                    textAlign="center"
                    h="200vh"
                    position="relative"
                    direction="column"
                    mt={32}
                >
                    <Heading mt="47vh" w="75%" fontSize="4rem" fontWeight={300}>
                        We craft <Italic>web</Italic> and{" "}
                        <Italic>app experiences</Italic> for user to explore and
                        share, blending artful design with functionality.
                    </Heading>

                    <Link href="/">
                        <Button mt={10}>View our work</Button>
                    </Link>

                    <Image
                        src="/assets/craft.svg"
                        alt="harness"
                        fill
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: -1,
                        }}
                        loading="eager"
                    />
                </Flex>

                <Flex
                    className="container"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    h="70vh"
                    position="relative"
                    my={32}
                    mt={60}
                >
                    <Heading w="75%" fontSize="4rem" fontWeight={300}>
                        Harnessing <Italic>AI</Italic> and{" "}
                        <Italic>data analytics</Italic> to develop software that
                        predict and enhance consumer engagement.
                    </Heading>

                    <Image
                        src="/assets/harness.svg"
                        alt="harness"
                        loading="eager"
                        fill
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: -1,
                        }}
                    />
                </Flex>

                <Carousel />

                <Flex
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    position="relative"
                    w="100%"
                    h="80vh"
                    flexDirection="column"
                    mt={10}
                >
                    <Image
                        src="/assets/human.gif"
                        alt="human"
                        loading="eager"
                        fill
                        objectFit="cover"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: -1,
                            filter: "brightness(40%)",
                        }}
                    />

                    <Heading display="flex" alignItems="center" mb={10}>
                        <Text color="red" fontSize={64}>
                            <MapPin size={44} />
                        </Text>
                        &nbsp;&nbsp;New York City
                    </Heading>

                    <Heading w="70%" size="4xl" fontWeight={400}>
                        We build <Italic>human connections</Italic> through
                        meaningful engagement.
                    </Heading>
                </Flex>

                <Flex
                    className="container"
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    my={32}
                >
                    <Heading fontWeight={400} fontSize={44}>
                        We build products for a global audience
                    </Heading>
                    <Text fontSize={20} mt={10}>
                        Embracing Diversity: Connecting with Cultures Across the
                        Globe
                    </Text>

                    <Box
                        w="100%"
                        h="100vh"
                        transform="translateX(-4%)"
                        overflow="hidden"
                    >
                        <ComposableMap
                            stroke="#111"
                            fill="#333"
                            strokeWidth="1px"
                        >
                            <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                                {({ geographies }: { geographies: any }) =>
                                    geographies.map((geo: any) => (
                                        <Geography
                                            style={{
                                                hover: {
                                                    fill: "#eee",
                                                    transition: "all 0.2s",
                                                },
                                            }}
                                            key={geo.rsmKey}
                                            geography={geo}
                                        />
                                    ))
                                }
                            </Geographies>
                        </ComposableMap>
                    </Box>
                </Flex>

                <Flex className="container" justifyContent="center">
                    <Box w="90%">
                        <Heading fontWeight={400} fontSize="4rem" mb={10}>
                            Our Accreditations
                        </Heading>

                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Image
                                    key={i}
                                    src={`/assets/acc/${i}.svg`}
                                    alt="acc"
                                    width={200}
                                    height={100}
                                    loading="lazy"
                                />
                            ))}
                        </Flex>
                    </Box>
                </Flex>

                <Consultation /> */}
            </main>
        </>
    );
}
