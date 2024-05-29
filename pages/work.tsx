import Head from "next/head";
import {
    Box,
    Button,
    Flex,
    useBreakpointValue,
    useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import SlimHeading from "../components/SlimHeading";
import Carousel from "@/components/Carousel";
import Consultation from "@/components/Consultation";
import CaseStudyList from "@/components/CaseStudyList";

const Work = () => {
    const { colorMode } = useColorMode();

    return (
        <>
            <Head>
                <title>MediaMorphosis - Work</title>
            </Head>

            <main>
                <Flex
                    justifyContent="center"
                    className="container"
                    px={{ base: 0 }}
                    py={{ base: 3, lg: 10, "2xl": 14 }}
                    color="white !important"
                >
                    <Flex
                        direction="column"
                        h={{ base: "200px", lg: "400px", "2xl": "500px" }}
                        overflow="hidden"
                        rounded={{ base: 0, lg: 8, "2xl": 10 }}
                        w={{ base: "100%", lg: "90%" }}
                        textAlign="center"
                        justifyContent="center"
                        position="relative"
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
                            <source src="/assets/work.webm" type="video/webm" />
                        </video>

                        <SlimHeading
                            mb={{ base: 0, lg: 4 }}
                            color={
                                useBreakpointValue({ base: true, sm: false })
                                    ? "white"
                                    : colorMode === "light"
                                    ? "white"
                                    : "red"
                            }
                            w="100%"
                            textAlign="center"
                            fontWeight={500}
                            letterSpacing="-1px"
                            fontSize={{
                                base: "1.6rem",
                                lg: "3.4rem",
                                "2xl": "4.6rem",
                            }}
                        >
                            Unlock your digital potential
                        </SlimHeading>

                        <Link href="/contact">
                            <Button
                                color="white"
                                background="transparent"
                                mt={6}
                                display={{ base: "none", sm: "initial" }}
                            >
                                Start a Project
                            </Button>
                        </Link>
                    </Flex>
                </Flex>

                <Carousel />

                <Box
                    mt={{ base: 10, lg: 16, "2xl": 20 }}
                    className="container"
                    textAlign="center"
                >
                    <SlimHeading
                        w="100%"
                        fontWeight={{ base: 500, sm: "initial" }}
                    >
                        Our success Stories
                    </SlimHeading>

                    <CaseStudyList />
                </Box>

                <Consultation />
            </main>
        </>
    );
};
export default Work;
