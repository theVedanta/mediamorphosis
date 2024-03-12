import { Box, Button, Flex, Heading, Text, color } from "@chakra-ui/react";
import Link from "next/link";

const Consultation = () => {
    return (
        <Flex justifyContent="center" className="container" py={20}>
            <Flex
                direction="column"
                py={32}
                bg="gray"
                rounded={10}
                w="90%"
                textAlign="center"
            >
                <Text fontSize="x-large">Get a free consultation</Text>

                <Link href="mailto:info@mediamorphosisinc.com">
                    <Heading
                        _hover={{ textDecoration: "underline" }}
                        my={8}
                        color="red"
                        fontWeight={400}
                        fontSize={60}
                    >
                        info@mediamorphosisinc.com
                    </Heading>
                </Link>

                <Link href="/">
                    <Button mt={6}>Get in Touch</Button>
                </Link>
            </Flex>
        </Flex>
    );
};
export default Consultation;
