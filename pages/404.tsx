import Italic from "@/components/Italic";
import SlimHeading from "@/components/SlimHeading";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Error = () => {
    const router = useRouter();

    const smallFont = { base: "1rem", lg: "1.6rem" };

    return (
        <Flex
            w="100vw"
            h="80vh"
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <SlimHeading w="100%" textAlign="center">
                <Italic
                    fontSize={{ base: "4.6rem", lg: "6rem", "2xl": "7rem" }}
                >
                    404
                </Italic>
            </SlimHeading>

            <Text mt={10} fontSize={smallFont}>
                <Button
                    color="red"
                    variant="link"
                    fontSize={smallFont}
                    onClick={() => router.back()}
                >
                    Click here
                </Button>{" "}
                to go back
            </Text>
        </Flex>
    );
};
export default Error;
