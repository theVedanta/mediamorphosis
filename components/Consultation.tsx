import {
    Button,
    Flex,
    Text,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import SlimHeading from "./SlimHeading";

const Consultation = () => {
    const { colorMode } = useColorMode();

    return (
        <Flex
            justifyContent="center"
            className="container"
            px={{ base: 0 }}
            pt={{ base: 6, lg: 16, "2xl": 24 }}
            pb={{ base: 0, lg: 14, "2xl": 20 }}
            color="white !important"
        >
            <Flex
                direction="column"
                py={{ base: 12, lg: 20, "2xl": 28 }}
                bg={useColorModeValue("red", "darkGray")}
                rounded={{ base: 0, lg: 6, "2xl": 10 }}
                w={{ base: "100%", lg: "95%", "2xl": "90%" }}
                textAlign="center"
            >
                <Text
                    fontSize={{ base: "xx-large", lg: "x-large" }}
                    lineHeight={1}
                >
                    Get a free consultation
                </Text>

                <Link href="mailto:info@mediamorphosisinc.com">
                    <SlimHeading
                        _hover={{ textDecoration: "underline" }}
                        my={4}
                        color={colorMode === "light" ? "white" : "red"}
                        w="100%"
                        textAlign="center"
                        fontWeight={500}
                        letterSpacing="-1px"
                        fontSize={{
                            base: "1.4rem",
                            lg: "2.6rem",
                            "2xl": "3.45rem",
                        }}
                    >
                        info@mediamorphosisinc.com
                    </SlimHeading>
                </Link>

                <Link href="/contact">
                    <Button
                        color="white"
                        background={
                            colorMode === "light" ? "darkGray" : "transparent"
                        }
                        mt={6}
                        _hover={{
                            background: "#fff",
                            borderColor: "#fff",
                            color: "#000",
                        }}
                    >
                        Get in Touch
                    </Button>
                </Link>
            </Flex>
        </Flex>
    );
};
export default Consultation;
