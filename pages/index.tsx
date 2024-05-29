import Head from "next/head";
import {
    Box,
    Button,
    Flex,
    Icon,
    Text,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Consultation from "@/components/Consultation";
import Italic from "@/components/Italic";
import { MapPin } from "react-feather";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Carousel from "@/components/Carousel";
import SlimHeading from "@/components/SlimHeading";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Parallax from "parallax-js";

export default function Home() {
    const { colorMode } = useColorMode();

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (document.querySelector(".craft") !== null) {
            new Parallax(
                document.querySelector(".craft-image-container") as HTMLElement
            );
        }
    }, []);

    return (
        <>
            <Head>
                <title>MediaMorphosis</title>
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
                        px={{ base: 6, lg: 16, "2xl": 20 }}
                        py={{ base: 6, lg: 20, "2xl": 32 }}
                    >
                        <video
                            style={{
                                position: "absolute",
                                zIndex: -1,
                                top: 0,
                                left: 0,
                                borderRadius: "30px",
                                filter: "brightness(40%)",
                                width: "100%",
                                height: "100%",
                            }}
                            autoPlay={true}
                            muted
                            preload="auto"
                            loop={true}
                            controls={false}
                            playsInline
                        >
                            <source src="/assets/hero.webm" type="video/webm" />
                        </video>

                        <Box
                            pl={{ base: 3, lg: 5, "2xl": 8 }}
                            pt={{ base: 3, lg: 5, "2xl": 8 }}
                            bg={colorMode === "dark" ? "black" : "white"}
                            position="absolute"
                            bottom={0}
                            right={0}
                            w={{ base: "80vw", lg: "50vw", "2xl": "40vw" }}
                            borderRadius="20px 0 0 0"
                        >
                            <Box
                                bg={useColorModeValue("lightGray", "darkGray")}
                                p={{ base: 3, lg: 5, "2xl": 8 }}
                                borderRadius="20px 0 0 20px"
                            >
                                <Text
                                    fontSize={{
                                        base: "0.96rem",
                                        lg: "medium",
                                        "2xl": "large",
                                    }}
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

                        <Box h="100%" mt={{ base: 8, lg: 3, "2xl": 0 }}>
                            <SlimHeading color="#fff !important">
                                <Italic>Digital Innovation&nbsp;</Italic>
                                at the Crossroads Of Cultures.
                            </SlimHeading>
                            <Text
                                fontSize={{
                                    base: "1rem",
                                    lg: "large",
                                    "2xl": "x-large",
                                }}
                                mt={{ base: 3, lg: 5, "2xl": 6 }}
                                w={{ base: "100%", lg: "45%", "2xl": "36%" }}
                                color="#fff !important"
                            >
                                Fueling Customer Engagement Through Data-Driven
                                Digital Solutions, Harnessing Analytics for
                                Unparalleled Viral Growth
                            </Text>
                            <Link href="/contact">
                                <Button
                                    color="#fff"
                                    mt={{ base: 6, lg: 10, "2xl": 14 }}
                                >
                                    Get Started
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>

                <CraftSection />

                <Flex
                    className="container harness"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    h={{ base: "50vh", lg: "60vh", "2xl": "70vh" }}
                    position="relative"
                    w="100%"
                    my={{ base: 0, lg: 20, "2xl": 32 }}
                    mt={{ base: 0, lg: 32, "2xl": 44 }}
                >
                    <SlimHeading fontWeight={500} data-aos="fade-up">
                        Harnessing <Italic>AI</Italic> and{" "}
                        <Italic>data analytics</Italic> to develop software that
                        predict and enhance consumer engagement.
                    </SlimHeading>

                    <Image
                        className="harness-image"
                        src={`/assets/harness${useColorModeValue(
                            "light",
                            ""
                        )}.png`}
                        alt="harness"
                        loading="eager"
                        width={500}
                        height={500}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            height: "100%",
                            width: "auto",
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
                    h={{ base: "60vh", lg: "70vh", "2xl": "80vh" }}
                    direction="column"
                    mt={{ base: 14, lg: 18, "2xl": 20 }}
                    className="container"
                >
                    <video
                        autoPlay={true}
                        preload="auto"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: -1,
                            filter: "brightness(40%)",
                            width: "100%",
                            height: "100%",
                        }}
                        muted
                        loop={true}
                        controls={false}
                        playsInline
                    >
                        <source src="/assets/human.webm" type="video/webm" />
                    </video>

                    <SlimHeading
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mb={10}
                        color="#fff !important"
                        data-aos="fade-up"
                        fontSize={{
                            base: "1.2rem",
                            lg: "2rem",
                            "2xl": "2.4rem",
                        }}
                    >
                        <Icon
                            boxSize={{
                                base: "1.4rem",
                                lg: "2rem",
                                "2xl": "2.4rem",
                            }}
                            as={MapPin}
                            color="red"
                        />
                        &nbsp;&nbsp;New York City
                    </SlimHeading>

                    <SlimHeading
                        data-aos="fade-up"
                        data-aos-delay="600"
                        color="#fff !important"
                        fontWeight={400}
                    >
                        We build <Italic>human connections</Italic> through
                        meaningful engagement.
                    </SlimHeading>
                </Flex>

                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    my={{ base: 10, lg: 14, "2xl": 16 }}
                >
                    <SlimHeading
                        fontSize={{ base: "3xl", lg: "5xl", "2xl": "6xl" }}
                    >
                        We build products for a global audience
                    </SlimHeading>
                    <Text fontSize={{ base: 20, lg: 22, "2xl": 24 }} mt={10}>
                        Embracing Diversity: Connecting with Cultures Across the
                        Globe
                    </Text>

                    <Box
                        w="100%"
                        h={{ base: "470px", lg: "800px", "2xl": "1000px" }}
                        overflow="hidden"
                    >
                        <Box
                            transform={{
                                base: "scale(2) translateY(20%) translateX(-20%)",
                                sm: "scale(1) translateX(-4%) translateY(-8%)",
                            }}
                        >
                            <ComposableMap
                                stroke={useColorModeValue("#fff", "#111")}
                                fill={useColorModeValue("#AFAFAF", "#333")}
                                strokeWidth="1px"
                            >
                                <Geographies geography="/world.json">
                                    {({ geographies }: { geographies: any }) =>
                                        geographies.map((geo: any) => (
                                            <Geography
                                                style={{
                                                    hover: {
                                                        fill:
                                                            colorMode ===
                                                            "light"
                                                                ? "#F54944"
                                                                : "#eee",
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
                    </Box>
                </Flex>

                <Flex
                    className="container"
                    justifyContent="center"
                    position="relative"
                    py={{ base: 10, lg: 16, "2xl": 20 }}
                    my={{ base: 2, lg: 6, "2xl": 10 }}
                >
                    <Image
                        style={{
                            position: "absolute",
                            zIndex: -1,
                            top: 0,
                            left: 0,
                            // borderRadius: "30px",
                            filter: "brightness(15%)",

                            display: colorMode === "light" ? "none" : "block",
                        }}
                        fill
                        loading="eager"
                        src="/assets/acc.jpg"
                        alt="background"
                    ></Image>

                    <Box w="90%">
                        <SlimHeading
                            mb={10}
                            w="100%"
                            textAlign={{
                                base: "center",
                                sm: colorMode === "light" ? "center" : "left",
                            }}
                        >
                            Our Accreditations
                        </SlimHeading>

                        <Flex
                            alignItems="center"
                            justifyContent="center"
                            wrap="wrap"
                            gap={{ base: 5, lg: 16, "2xl": 20 }}
                        >
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Image
                                    key={i}
                                    src={`/assets/acc/${i}${
                                        colorMode === "light" ? "light" : ""
                                    }.png`}
                                    alt="acc"
                                    width={200}
                                    height={100}
                                    loading="lazy"
                                />
                            ))}
                        </Flex>
                    </Box>
                </Flex>

                <Consultation />
            </main>
        </>
    );
}

const CraftSection = () => {
    useEffect(() => {
        gsap.to(document.querySelector(".craft-image"), {
            transform:
                window.innerWidth < 768
                    ? "translateY(0)"
                    : "translateY(-100px)",
            scrollTrigger: {
                trigger: document.querySelector(".craft"),
                scrub: 1,
                start: "top center",
                end: "bottom center",
            },
        });
    }, []);

    return (
        <Flex
            className="container craft"
            alignItems="center"
            textAlign="center"
            h={{ base: "60vh", lg: "200vh" }}
            direction="column"
            position="relative"
            mt={10}
        >
            <SlimHeading fontWeight={500} mt={{ base: 20, lg: "47vh" }}>
                We craft <Italic>web</Italic> and{" "}
                <Italic>app experiences</Italic> for user to explore and share,
                blending artful design with functionality.
                <br />
            </SlimHeading>
            <Link href="/work">
                <Button mt={10}>View our work</Button>
            </Link>

            <Box
                width="100%"
                h="100%"
                position="absolute"
                zIndex={-1}
                className="craft-image-container"
            >
                <Box
                    zIndex={-1}
                    w="100%"
                    h="100%"
                    position="absolute"
                    data-depth="0.5"
                >
                    <Image
                        className="craft-image"
                        src={`/assets/craft${useColorModeValue(
                            "light",
                            ""
                        )}.png`}
                        alt="craft"
                        fill
                        loading="eager"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: -1,
                            filter: useColorModeValue(
                                "brightness(1)",
                                "brightness(0.6)"
                            ),
                        }}
                    />
                </Box>
            </Box>
        </Flex>
    );
};
