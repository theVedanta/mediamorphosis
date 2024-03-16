import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import SlimHeading from "./SlimHeading";

const Consultation = () => {
    return (
        <Flex
            justifyContent="center"
            className="container"
            px={{ base: 0 }}
            py={{ base: 20, sm: 24 }}
        >
            <Flex
                direction="column"
                py={{ base: 12, sm: 32 }}
                bg="gray"
                rounded={{ base: 0, sm: 10 }}
                w={{ base: "100%", sm: "90%" }}
                textAlign="center"
            >
                <Text
                    fontSize={{ base: "xx-large", sm: "x-large" }}
                    lineHeight={1}
                >
                    Get a free consultation
                </Text>

                <Link href="mailto:info@mediamorphosisinc.com">
                    <SlimHeading
                        _hover={{ textDecoration: "underline" }}
                        my={8}
                        color="red"
                        w="100%"
                        textAlign="center"
                        fontWeight={500}
                        letterSpacing="-1px"
                        fontSize={{
                            base: "1.4rem !important",
                            sm: "3.45rem !important",
                        }}
                    >
                        info@mediamorphosisinc.com
                    </SlimHeading>
                </Link>

                <Link href="/">
                    <Button mt={6}>Get in Touch</Button>
                </Link>
            </Flex>
        </Flex>
    );
};
export default Consultation;
